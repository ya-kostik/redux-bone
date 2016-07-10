(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.middleware = exports.createReducer = exports.flow = exports.reducer = undefined;
	
	var _Bone = __webpack_require__(2);
	
	var _Bone2 = _interopRequireDefault(_Bone);
	
	var _Model = __webpack_require__(15);
	
	var _Model2 = _interopRequireDefault(_Model);
	
	var _Collection = __webpack_require__(17);
	
	var _Collection2 = _interopRequireDefault(_Collection);
	
	var _reducer = __webpack_require__(19);
	
	var _reducer2 = _interopRequireDefault(_reducer);
	
	var _controlFlow = __webpack_require__(14);
	
	var __flow = _interopRequireWildcard(_controlFlow);
	
	var _createReducer = __webpack_require__(16);
	
	var _createReducer2 = _interopRequireDefault(_createReducer);
	
	var _middleware = __webpack_require__(25);
	
	var _middleware2 = _interopRequireDefault(_middleware);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var toExport = {
	  Model: _Model2.default,
	  Collection: _Collection2.default,
	  initialize: function initialize(store) {
	    var root = arguments.length <= 1 || arguments[1] === undefined ? 'redbone' : arguments[1];
	
	    _Bone2.default.initialize(store, root);
	  }
	};
	
	exports.default = toExport;
	var reducer = exports.reducer = _reducer2.default;
	var flow = exports.flow = __flow;
	var createReducer = exports.createReducer = _createReducer2.default;
	var middleware = exports.middleware = _middleware2.default;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _isFunction = __webpack_require__(3);
	
	var _isFunction2 = _interopRequireDefault(_isFunction);
	
	var _isPlainObject = __webpack_require__(5);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _RedboneError = __webpack_require__(9);
	
	var _RedboneError2 = _interopRequireDefault(_RedboneError);
	
	var _createReducer = __webpack_require__(16);
	
	var _createReducer2 = _interopRequireDefault(_createReducer);
	
	var _createTypes = __webpack_require__(10);
	
	var _createTypes2 = _interopRequireDefault(_createTypes);
	
	var _sync = __webpack_require__(13);
	
	var _sync2 = _interopRequireDefault(_sync);
	
	var _controlFlow = __webpack_require__(14);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var __dispatch = void 0,
	    __getState = void 0;
	var __root = void 0;
	var __lastPid = 0;
	
	var __actionSync = function __actionSync(data) {
	  return {
	    type: this.TYPES.SYNC,
	    data: data
	  };
	};
	
	var Bone = function () {
	  _createClass(Bone, null, [{
	    key: 'initialize',
	    value: function initialize(_ref, root) {
	      var dispatch = _ref.dispatch;
	      var getState = _ref.getState;
	
	      __dispatch = dispatch;
	      __getState = getState;
	      __root = root;
	    }
	  }, {
	    key: 'newPid',
	    get: function get() {
	      return ++__lastPid;
	    }
	  }, {
	    key: '__dangerDontUseThisType',
	    get: function get() {
	      return 'root';
	    }
	  }, {
	    key: '__dangerDontUseThisTypesList',
	    get: function get() {
	      return {};
	    }
	  }]);
	
	  function Bone() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    _classCallCheck(this, Bone);
	
	    if (options.sync && (0, _isFunction2.default)(options.sync)) {
	      this.sync = options.sync.bind(this);
	    } else {
	      this.sync = _sync2.default.bind(this);
	    }
	    this.dispatch = __dispatch;
	    this.getState = __getState;
	    this.root = __root;
	    this.idAttribute = options.idAttribute || 'id';
	    this.isNew = options.isNew ? !!options.isNew : true;
	    if (options.pid) {
	      if ((0, _isFunction2.default)(options.pid)) this.pid = options.pid.bind(this)();else this.pid = options.pid;
	    } else this.pid = 'redbonePid' + Bone.newPid;
	    (0, _createTypes2.default)(this, options.prefix, {
	      SYNC: 'SYNC',
	      CREATE: 'CREATE',
	      DESTROY: 'DESTROY',
	      RESET: 'RESET'
	    });
	    this.actions = {
	      sync: __actionSync.bind(this)
	    };
	    if (!options.noFlow) {
	      this.flow = (0, _controlFlow.set)(this);
	      this.dispatch({ type: this.TYPES.CREATE });
	    }
	  }
	
	  _createClass(Bone, [{
	    key: 'getReducerObject',
	    value: function getReducerObject() {
	      return {};
	    }
	  }, {
	    key: 'createReducer',
	    value: function createReducer() {
	      this.reducer = (0, _createReducer2.default)(this.getReducerObject(), this.constructor.initialState);
	    }
	  }, {
	    key: 'addTypes',
	    value: function addTypes(types) {
	      var _this = this;
	
	      var addPrefix = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	
	      if (!(0, _isPlainObject2.default)(types)) throw new _RedboneError2.default('Types is not an object');
	      if (addPrefix) {
	        Object.keys(types).forEach(function (type) {
	          types[type] = _this.PREFIX + types[type];
	        });
	      }
	      this.TYPES = _extends({}, this.TYPES, types);
	      return;
	    }
	  }, {
	    key: 'addActions',
	    value: function addActions(actions) {
	      this.actions = _extends({}, this.actions, actions);
	    }
	  }, {
	    key: 'reduce',
	    value: function reduce(state, action) {
	      if (!this.reducer) this.createReducer();
	      return this.reducer(state, action);
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.dispatch({ type: this.TYPES.DESTROY });
	      (0, _controlFlow.remove)(this.flow);
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      this.dispatch({ type: this.TYPES.RESET });
	    }
	  }]);
	
	  return Bone;
	}();
	
	exports.default = Bone;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(4);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(6),
	    isHostObject = __webpack_require__(7),
	    isObjectLike = __webpack_require__(8);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object,
	 *  else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}
	
	module.exports = isPlainObject;


/***/ },
/* 6 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetPrototype = Object.getPrototypeOf;
	
	/**
	 * Gets the `[[Prototype]]` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {null|Object} Returns the `[[Prototype]]`.
	 */
	function getPrototype(value) {
	  return nativeGetPrototype(Object(value));
	}
	
	module.exports = getPrototype;


/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}
	
	module.exports = isHostObject;


/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RedboneError = function (_window$Error) {
	  _inherits(RedboneError, _window$Error);
	
	  function RedboneError() {
	    _classCallCheck(this, RedboneError);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(RedboneError).apply(this, arguments));
	  }
	
	  return RedboneError;
	}(window.Error);
	
	exports.default = RedboneError;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isString = __webpack_require__(11);
	
	var _isString2 = _interopRequireDefault(_isString);
	
	var _isPlainObject = __webpack_require__(5);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var __createTypes = function __createTypes(context, prefix, typesAdd) {
	  var classType = context.constructor.__dangerDontUseThisType;
	  var classTypesList = context.constructor.__dangerDontUseThisTypesList;
	  if ((0, _isString2.default)(prefix)) {
	    context.PREFIX = prefix;
	  } else {
	    context.PREFIX = '@@Redbone/' + classType + '/' + context.constructor.name + '/';
	  }
	  if (context.pid) {
	    context.PREFIX += context.pid + '/';
	  }
	  var types = {};
	  Object.keys(classTypesList).forEach(function (key) {
	    var type = key.toUpperCase() + '_';
	    types[type + 'REQUESTING'] = context.PREFIX + type + 'REQUESTING';
	    types[type + 'REQUESTED'] = context.PREFIX + type + 'REQUESTED';
	    types[type + 'ERROR'] = context.PREFIX + type + 'ERROR';
	  });
	  context.TYPES = types;
	  if ((0, _isPlainObject2.default)(typesAdd)) {
	    context.addTypes(typesAdd, true);
	  }
	  if (context.constructor.TYPES) {
	    context.addTypes(context.constructor.TYPES, true);
	  }
	};
	
	exports.default = __createTypes;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(12),
	    isObjectLike = __webpack_require__(8);
	
	/** `Object#toString` result references. */
	var stringTag = '[object String]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
	}
	
	module.exports = isString;


/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @type {Function}
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	module.exports = isArray;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ERROR = exports.REQUESTED = exports.REQUESTING = exports.PREFIX = exports.__methodMap = undefined;
	
	var _isFunction = __webpack_require__(3);
	
	var _isFunction2 = _interopRequireDefault(_isFunction);
	
	var _RedboneError = __webpack_require__(9);
	
	var _RedboneError2 = _interopRequireDefault(_RedboneError);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var __methodMap = exports.__methodMap = {
	  'create': 'POST',
	  'update': 'PUT',
	  'patch': 'PATCH',
	  'delete': 'DELETE',
	  'read': 'GET'
	};
	
	var PREFIX = exports.PREFIX = '@@Redbone/ajax/';
	var REQUESTING = exports.REQUESTING = PREFIX + 'REQUESTING';
	var REQUESTED = exports.REQUESTED = PREFIX + 'REQUESTED';
	var ERROR = exports.ERROR = PREFIX + 'ERROR';
	
	var __sync = function __sync(method, actions, options) {
	  if (!window.jQuery) throw (0, _RedboneError2.default)('jQuery not defined');
	  var $ = window.jQuery;
	  options.sync = options.sync === false ? false : true;
	  var type = __methodMap[method];
	  var url = void 0;
	  if (options.url) {
	    url = (0, _isFunction2.default)(options.url) ? options.url.bind(this) : options.url;
	  } else {
	    url = this.url;
	    if (!this.isNew) url += this.id;
	  }
	  var data = null;
	  if (options.data) {
	    data = options.data;
	  } else if (this.get && (0, _isFunction2.default)(this.get)) {
	    data = this.get();
	  }
	  var processData = true;
	  if (data && type !== 'GET' && type !== 'get') {
	    data = JSON.stringify(data);
	    processData = false;
	  }
	  this.dispatch({ type: REQUESTING });
	  this.dispatch(actions.requesting());
	
	  var success = function success(data) {
	    this.id = data[this.idAttribute] || null;
	    this.isNew = false;
	    this.dispatch({ type: REQUESTED });
	    if (options.sync) {
	      this.dispatch(actions.requested());
	      this.dispatch(this.actions.sync(data));
	    } else {
	      this.dispatch(actions.requested(data));
	    }
	    if (options.success && (0, _isFunction2.default)(options.success)) {
	      options.success(data);
	    }
	    if (this.afterRequest && (0, _isFunction2.default)(this.afterRequest)) {
	      this.afterRequest(method, data);
	    }
	  };
	
	  var error = function error(err) {
	    this.dispatch({ type: ERROR, err: err });
	    this.dispatch(actions.error(err));
	    if (options.error && (0, _isFunction2.default)(options.error)) {
	      options.error(data);
	    }
	  };
	
	  $.ajax({
	    type: type,
	    url: url,
	    data: data,
	    dataType: 'json',
	    contentType: 'application/json',
	    processData: processData,
	    success: success.bind(this),
	    error: error.bind(this)
	  });
	};
	
	exports.default = __sync;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.remove = exports.get = exports.set = undefined;
	
	var _RedboneError = __webpack_require__(9);
	
	var _RedboneError2 = _interopRequireDefault(_RedboneError);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var __controlFlow = {};
	
	var __init = function __init(bone) {
	  var type = bone.constructor.__dangerDontUseThisType;
	  var className = bone.constructor.name;
	  if (!__controlFlow[type]) {
	    __controlFlow[type] = {};
	  }
	  if (!__controlFlow[type][className]) {
	    __controlFlow[type][className] = {};
	  }
	  if (!__controlFlow[type][className][bone.pid]) {
	    __controlFlow[type][className][bone.pid] = bone;
	  } else {
	    throw new _RedboneError2.default(type + '/' + className + '/' + bone.pid + ' is already exists');
	  }
	  return {
	    type: type, className: className, pid: bone.pid
	  };
	};
	
	var set = exports.set = function set(bone) {
	  return __init(bone);
	};
	
	var get = exports.get = function get(flow) {
	  if (flow) {
	    var type = flow.type;
	    var className = flow.className;
	    var pid = flow.pid;
	
	    if (__controlFlow[type] && __controlFlow[type][className] && __controlFlow[type][className][pid]) {
	      return __controlFlow[type][className][pid];
	    }
	    return null;
	  }
	  return __controlFlow;
	};
	
	var remove = exports.remove = function remove(_ref) {
	  var type = _ref.type;
	  var className = _ref.className;
	  var pid = _ref.pid;
	
	  __controlFlow[type][className][pid] = null;
	  delete __controlFlow[type][className][pid];
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Bone2 = __webpack_require__(2);
	
	var _Bone3 = _interopRequireDefault(_Bone2);
	
	var _getSyncActions = __webpack_require__(18);
	
	var _getSyncActions2 = _interopRequireDefault(_getSyncActions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var __initialState = {
	  attributes: {}
	};
	
	var Model = function (_Bone) {
	  _inherits(Model, _Bone);
	
	  _createClass(Model, null, [{
	    key: '__dangerDontUseThisType',
	    get: function get() {
	      return 'model';
	    }
	  }, {
	    key: '__dangerDontUseThisTypesList',
	    get: function get() {
	      return {
	        LOAD: 'LOAD',
	        SAVE: 'SAVE',
	        REMOVE: 'REMOVE'
	      };
	    }
	  }, {
	    key: 'TYPES',
	    get: function get() {
	      return {
	        SET: 'SET'
	      };
	    }
	  }, {
	    key: 'initialState',
	    get: function get() {
	      return __initialState;
	    }
	  }]);
	
	  function Model() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    _classCallCheck(this, Model);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Model).call(this, options));
	
	    if (options.url) _this.url = options.url;
	    _this.addActions({
	      load: (0, _getSyncActions2.default)(_this, 'LOAD'),
	      save: (0, _getSyncActions2.default)(_this, 'SAVE'),
	      remove: (0, _getSyncActions2.default)(_this, 'REMOVE'),
	      set: function set(state, force) {
	        return { type: _this.TYPES.SET, state: state, force: force };
	      }
	    });
	    return _this;
	  }
	
	  _createClass(Model, [{
	    key: 'parse',
	    value: function parse(data) {
	      return data;
	    }
	  }, {
	    key: 'getReducerObject',
	    value: function getReducerObject() {
	      var _this2 = this,
	          _ref;
	
	      return _ref = {}, _defineProperty(_ref, this.TYPES.SYNC, function (state, action) {
	        return _extends({}, state, {
	          attributes: _this2.parse(action.data)
	        });
	      }), _defineProperty(_ref, this.TYPES.SET, function (state, action) {
	        if (action.force) {
	          return _extends({}, state, {
	            attributes: action.state
	          });
	        }
	        return _extends({}, state, {
	          attributes: _extends({}, state.attributes, action.state)
	        });
	      }), _defineProperty(_ref, this.TYPES.RESET, function () {
	        return __initialState;
	      }), _ref;
	    }
	  }, {
	    key: 'afterRequest',
	    value: function afterRequest(type, data) {
	      if (type === 'read' || type === 'create' || type === 'update') {
	        if (data && data[this.idAttribute]) {
	          this.id = data[this.idAttribute];
	        }
	        this.isNew = false;
	      }
	    }
	  }, {
	    key: 'load',
	    value: function load() {
	      var id = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	      var url = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	
	      if (!id && this.id) id = this.id;
	      if (!url) url = this.url;
	      if (!id) id = '';
	      this.sync('read', this.actions.load, { url: url + id });
	    }
	  }, {
	    key: 'save',
	    value: function save() {
	      var id = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	      var url = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	
	      if (!id && this.id) id = this.id;
	      if (!url) url = this.url;
	      if (!id) {
	        this.sync('create', this.actions.save, { url: url });
	      } else {
	        this.sync('update', this.actions.save, { url: url + id });
	      }
	    }
	  }, {
	    key: 'remove',
	    value: function remove() {
	      var id = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	      var url = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	
	      if (!id && this.id) id = this.id;
	      if (!url) url = this.url;
	      if (!id) id = '';
	      this.sync('remove', this.actions.remove, { url: url + id });
	    }
	  }, {
	    key: 'set',
	    value: function set(state) {
	      var force = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	
	      this.dispatch(this.actions.set(state, force));
	    }
	  }, {
	    key: 'get',
	    value: function get() {
	      var state = this.getState();
	      return state[this.root][this.flow.type][this.flow.className][this.pid].attributes;
	    }
	  }]);
	
	  return Model;
	}(_Bone3.default);
	
	exports.default = Model;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _RedboneError = __webpack_require__(9);
	
	var _RedboneError2 = _interopRequireDefault(_RedboneError);
	
	var _isFunction = __webpack_require__(3);
	
	var _isFunction2 = _interopRequireDefault(_isFunction);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var __createReducer = function __createReducer(switches) {
	  var initialState = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	  var stateReducer = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
	
	  return function () {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments[1];
	
	    var nextState = state;
	    if (switches[action.type]) {
	      if (!(0, _isFunction2.default)(switches[action.type])) {
	        throw new _RedboneError2.default('createReducer switcher is not a function');
	      }
	      nextState = switches[action.type](state, action);
	    }
	    if ((0, _isFunction2.default)(stateReducer)) {
	      return stateReducer(state, nextState, action);
	    }
	    return nextState;
	  };
	};
	
	exports.default = __createReducer;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Bone2 = __webpack_require__(2);
	
	var _Bone3 = _interopRequireDefault(_Bone2);
	
	var _isArray = __webpack_require__(12);
	
	var _isArray2 = _interopRequireDefault(_isArray);
	
	var _getSyncActions = __webpack_require__(18);
	
	var _getSyncActions2 = _interopRequireDefault(_getSyncActions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SET = 'SET';
	var SET_MODEL = 'SET_MODEL';
	
	var __actionSet = function __actionSet(state) {
	  var reset = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	
	  return {
	    type: this.TYPES.SET,
	    state: state, reset: reset
	  };
	};
	
	var __initialState = {
	  models: {},
	  list: [],
	  currentModel: null
	};
	
	var __loadModel = function __loadModel(id) {
	  this.sync('read', this.actions.model.load, { url: this.url + id, sync: false });
	};
	
	var Collection = function (_Bone) {
	  _inherits(Collection, _Bone);
	
	  _createClass(Collection, null, [{
	    key: '__dangerDontUseThisType',
	    get: function get() {
	      return 'collection';
	    }
	  }, {
	    key: '__dangerDontUseThisTypesList',
	    get: function get() {
	      return {
	        FETCH: 'FETCH',
	        SAVE_CURRENT_MODEL: 'SAVE_CURRENT_MODEL',
	        REMOVE_MODEL: 'REMOVE_MODEL',
	        LOAD_CURRENT_MODEL: 'LOAD_CURRENT_MODEL'
	      };
	    }
	  }, {
	    key: 'TYPES',
	    get: function get() {
	      return {
	        SET: SET,
	        SET_MODEL: SET_MODEL
	      };
	    }
	  }, {
	    key: 'initialState',
	    get: function get() {
	      return __initialState;
	    }
	  }]);
	
	  function Collection() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    _classCallCheck(this, Collection);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Collection).call(this, options));
	
	    if (options.url) _this.url = options.url;
	    if (options.innerAttribute) _this.innerAttribute = options.innerAttribute;
	    _this.addActions({
	      fetch: (0, _getSyncActions2.default)(_this, 'FETCH'),
	      model: {
	        loadAsCurrent: (0, _getSyncActions2.default)(_this, 'LOAD_CURRENT_MODEL')
	      },
	      set: __actionSet.bind(_this)
	    });
	    _this.model = {};
	    _this.model.load = __loadModel.bind(_this);
	    return _this;
	  }
	
	  _createClass(Collection, [{
	    key: 'getReducerObject',
	    value: function getReducerObject() {
	      var _this2 = this,
	          _ref;
	
	      return _ref = {}, _defineProperty(_ref, this.TYPES.SYNC, function (state, action) {
	        return _extends({}, state, _this2.__parse(action.data));
	      }), _defineProperty(_ref, this.TYPES.LOAD_CURRENT_MODEL_REQUESTED, function (state, action) {
	        return _extends({}, state, {
	          currentModel: action.data
	        });
	      }), _defineProperty(_ref, this.TYPES.RESET, function () {
	        return __initialState;
	      }), _ref;
	    }
	  }, {
	    key: 'fetch',
	    value: function fetch(data) {
	      this.sync('read', this.actions.fetch, { data: data });
	    }
	  }, {
	    key: 'parse',
	    value: function parse(data) {
	      var _this3 = this;
	
	      if (this.innerAttribute && data) {
	        data = data[this.innerAttribute];
	      }
	      var models = {};
	      var list = [];
	      if (!(0, _isArray2.default)(data)) {
	        return {
	          models: models,
	          list: list
	        };
	      }
	      data.forEach(function (model) {
	        if (!model[_this3.idAttribute]) return;
	        models[model[_this3.idAttribute]] = model;
	        list.push(model[_this3.idAttribute]);
	      });
	      return {
	        models: models,
	        list: list
	      };
	    }
	  }]);
	
	  return Collection;
	}(_Bone3.default);
	
	exports.default = Collection;

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var __getSyncActions = function __getSyncActions(context, PRE) {
	  var __requesting = function __requesting() {
	    var data = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	
	    return {
	      type: context.TYPES[PRE + '_REQUESTING'],
	      data: data
	    };
	  };
	  var __requested = function __requested() {
	    var data = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	
	    return {
	      type: context.TYPES[PRE + '_REQUESTED'],
	      data: data
	    };
	  };
	  var __error = function __error(err) {
	    return {
	      type: context.TYPES[PRE + '_ERROR'],
	      err: err
	    };
	  };
	  return {
	    requesting: __requesting,
	    requested: __requested,
	    error: __error
	  };
	};
	
	exports.default = __getSyncActions;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _parseFlow = __webpack_require__(24);
	
	var _parseFlow2 = _interopRequireDefault(_parseFlow);
	
	var _processFlow = __webpack_require__(20);
	
	var _processFlow2 = _interopRequireDefault(_processFlow);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var __initialState = {
	  root: {}
	};
	
	var __reducer = function __reducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? __initialState : arguments[0];
	  var action = arguments[1];
	
	  var flow = (0, _parseFlow2.default)(action);
	  if (!flow) return state;
	  return (0, _processFlow2.default)(state, action, flow);
	};
	
	exports.default = __reducer;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _RedboneError = __webpack_require__(9);
	
	var _RedboneError2 = _interopRequireDefault(_RedboneError);
	
	var _controlFlow = __webpack_require__(14);
	
	var __flow = _interopRequireWildcard(_controlFlow);
	
	var _createBone = __webpack_require__(21);
	
	var _createBone2 = _interopRequireDefault(_createBone);
	
	var _destroyBone = __webpack_require__(23);
	
	var _destroyBone2 = _interopRequireDefault(_destroyBone);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var __processFlow = function __processFlow(state, action, flow) {
	  if (!flow) throw new _RedboneError2.default('Flow is not defined');
	  var bone = __flow.get(flow);
	  if (flow.action === 'CREATE') {
	    return (0, _createBone2.default)(state, flow, bone.constructor.initialState);
	  }
	  if (flow.action === 'DESTROY') {
	    return (0, _destroyBone2.default)(state, flow);
	  }
	  if (!bone) return state;
	
	  if (!bone.TYPES[flow.action]) return state;
	  // const fakeAction = {
	  //   ...action,
	  //   type: flow.action
	  // };
	  var fakeState = state[flow.type][flow.className][flow.pid];
	
	  return _extends({}, state, _defineProperty({}, flow.type, _extends({}, state[flow.type], _defineProperty({}, flow.className, _extends({}, state[flow.type][flow.className], _defineProperty({}, flow.pid, bone.reduce(fakeState, action)))))));
	};
	
	exports.default = __processFlow;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _RedboneError = __webpack_require__(9);
	
	var _RedboneError2 = _interopRequireDefault(_RedboneError);
	
	var _nonFlow = __webpack_require__(22);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var __createBone = function __createBone(state, flow, initialState) {
	  if (!state[flow.type]) {
	    return (0, _nonFlow.__nonFlowType)(state, flow, initialState);
	  }
	  if (!state[flow.type][flow.className]) {
	    return (0, _nonFlow.__nonFlowClass)(state, flow, initialState);
	  }
	  if (!state[flow.type][flow.className][flow.pid]) {
	    return (0, _nonFlow.__nonFlowPid)(state, flow, initialState);
	  } else throw new _RedboneError2.default(flow.type + '/' + flow.className + '/' + flow.pid + ' already in store');
	};
	
	exports.default = __createBone;

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var __nonFlowType = exports.__nonFlowType = function __nonFlowType(state, _ref) {
	  var type = _ref.type;
	  var className = _ref.className;
	  var pid = _ref.pid;
	  var initialState = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	  return _extends({}, state, _defineProperty({}, type, _defineProperty({}, className, _defineProperty({}, pid, initialState))));
	};
	
	var __nonFlowClass = exports.__nonFlowClass = function __nonFlowClass(state, _ref2) {
	  var type = _ref2.type;
	  var className = _ref2.className;
	  var pid = _ref2.pid;
	  var initialState = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	  return _extends({}, state, _defineProperty({}, type, _extends({}, state[type], _defineProperty({}, className, _defineProperty({}, pid, initialState)))));
	};
	
	var __nonFlowPid = exports.__nonFlowPid = function __nonFlowPid(state, _ref3) {
	  var type = _ref3.type;
	  var className = _ref3.className;
	  var pid = _ref3.pid;
	  var initialState = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	  return _extends({}, state, _defineProperty({}, type, _extends({}, state[type], _defineProperty({}, className, _extends({}, state[type][className], _defineProperty({}, pid, initialState))))));
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var __destroyBone = function __destroyBone(state, _ref) {
	  var type = _ref.type;
	  var className = _ref.className;
	  var pid = _ref.pid;
	
	  var stateClass = _extends({}, state[type][className]);
	  stateClass[pid] = null;
	  delete stateClass[pid];
	  return _extends({}, state, _defineProperty({}, type, _extends({}, state[type], _defineProperty({}, className, stateClass))));
	};
	
	exports.default = __destroyBone;

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var __redbonePx = '@@redbone';
	var __redbonePxLen = __redbonePx.length;
	
	var __parseFlowRule = /^@@redbone\/([a-z]+?)\/([a-z_0-9]+?)\/([a-z_0-9]+?)\/(.*)/i;
	
	var __parseFlow = function __parseFlow(action) {
	  if (action.type.slice(0, __redbonePxLen).toLowerCase() !== __redbonePx) return null;
	  var flowRule = action.type.match(__parseFlowRule);
	  if (!flowRule) return null;
	  return {
	    action: flowRule[4],
	    pid: flowRule[3],
	    className: flowRule[2],
	    type: flowRule[1]
	  };
	};
	
	exports.default = __parseFlow;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isFunction = __webpack_require__(3);
	
	var _isFunction2 = _interopRequireDefault(_isFunction);
	
	var _parseFlow = __webpack_require__(24);
	
	var _parseFlow2 = _interopRequireDefault(_parseFlow);
	
	var _controlFlow = __webpack_require__(14);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var __middleware = function __middleware(_ref) {
	  var dispatch = _ref.dispatch;
	  var getState = _ref.getState;
	
	  return function (next) {
	    return function (action) {
	      if (!action.type) return next(action);
	      var flow = (0, _parseFlow2.default)(action);
	      if (flow === null) return next(action);
	      var bone = (0, _controlFlow.get)(flow);
	      if (!bone) return next(action);
	      var middlewareObject = { dispatch: dispatch, getState: getState, action: action, flow: flow };
	      if (bone.beforeDispatch && (0, _isFunction2.default)(bone.beforeDispatch)) {
	        middlewareObject.next = function (action) {
	          if (action) {
	            next(action);
	            if (bone.afterDispatch && (0, _isFunction2.default)(bone.afterDispatch)) {
	              bone.afterDispatch(middlewareObject);
	            }
	          }
	          return;
	        };
	        bone.beforeDispatch(middlewareObject);
	        return;
	      }
	      next(action);
	      if (bone.afterDispatch && (0, _isFunction2.default)(bone.afterDispatch)) {
	        bone.afterDispatch(middlewareObject);
	      }
	    };
	  };
	};
	
	exports.default = __middleware;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjM2MxOTFlNzU0MDAxMzc4MjM5YSIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0JvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc1BsYWluT2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzSG9zdE9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL1JlZGJvbmVFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvX19jcmVhdGVUeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovLy8uL2xpYi9fX3N5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL19fY29udHJvbEZsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL01vZGVsLmpzIiwid2VicGFjazovLy8uL2xpYi9fX3JlZHVjZXJIZWxwZXJzL19fY3JlYXRlUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvQ29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9saWIvX19nZXRTeW5jQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvX19yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2xpYi9fX3JlZHVjZXJIZWxwZXJzL19fcHJvY2Vzc0Zsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL19fcmVkdWNlckhlbHBlcnMvX19jcmVhdGVCb25lLmpzIiwid2VicGFjazovLy8uL2xpYi9fX3JlZHVjZXJIZWxwZXJzL19fbm9uRmxvdy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvX19yZWR1Y2VySGVscGVycy9fX2Rlc3Ryb3lCb25lLmpzIiwid2VicGFjazovLy8uL2xpYi9fX3BhcnNlRmxvdy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvX19taWRkbGV3YXJlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0tBQVksTTs7QUFDWjs7OztBQUNBOzs7Ozs7OztBQUVBLEtBQU0sV0FBVztBQUNmLHlCQURlO0FBRWYsbUNBRmU7QUFHZixhQUhlLHNCQUdKLEtBSEksRUFHcUI7QUFBQSxTQUFsQixJQUFrQix5REFBWCxTQUFXOztBQUNsQyxvQkFBSyxVQUFMLENBQWdCLEtBQWhCLEVBQXVCLElBQXZCO0FBQ0Q7QUFMYyxFQUFqQjs7bUJBUWUsUTtBQUVSLEtBQU0sNkNBQU47QUFDQSxLQUFNLHNCQUFPLE1BQWI7QUFDQSxLQUFNLCtEQUFOO0FBQ0EsS0FBTSxzREFBTixDOzs7Ozs7Ozs7Ozs7Ozs7O0FDckJQOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxLQUFJLG1CQUFKO0FBQUEsS0FBZ0IsbUJBQWhCO0FBQ0EsS0FBSSxlQUFKO0FBQ0EsS0FBSSxZQUFZLENBQWhCOztBQUVBLEtBQU0s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QTNCLEVBQTREO0FBQzFELDBCQUFpQixJQUFqQixHQUF3QixVQUFDLE1BQUQsRUFBWTtBQUNsQyxlQUFJLE1BQUosRUFBWTtBQUNWLGtCQUFLLE1BQUw7QUFDQSxpQkFBSSxLQUFLLGFBQUwsSUFBc0IsMEJBQVcsS0FBSyxhQUFoQixDQUExQixFQUEwRDtBQUN4RCxvQkFBSyxhQUFMLENBQW1CLGdCQUFuQjtBQUNEO0FBQ0Y7QUFDRDtBQUNELFVBUkQ7QUFTQSxjQUFLLGNBQUwsQ0FBb0IsZ0JBQXBCO0FBQ0E7QUFDRDtBQUNELFlBQUssTUFBTDtBQUNBLFdBQUksS0FBSyxhQUFMLElBQXNCLDBCQUFXLEtBQUssYUFBaEIsQ0FBMUIsRUFBMEQ7QUFDeEQsY0FBSyxhQUFMLENBQW1CLGdCQUFuQjtBQUNEO0FBQ0YsTUF4Qk07QUFBQSxJQUFQO0FBeUJELEVBMUJEOzttQkE0QmUsWSIsImZpbGUiOiJpbmRleC5qcz9jM2MxOTFlNzU0MDAxMzc4MjM5YSIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGMzYzE5MWU3NTQwMDEzNzgyMzlhXG4gKiovIiwiaW1wb3J0IEJvbmUgZnJvbSAnLi9Cb25lJztcbmltcG9ydCBNb2RlbCBmcm9tICcuL01vZGVsJztcbmltcG9ydCBDb2xsZWN0aW9uIGZyb20gJy4vQ29sbGVjdGlvbic7XG5pbXBvcnQgX19yZWR1Y2VyIGZyb20gJy4vX19yZWR1Y2VyJztcbmltcG9ydCAqIGFzIF9fZmxvdyBmcm9tICcuL19fY29udHJvbEZsb3cnO1xuaW1wb3J0IF9fY3JlYXRlUmVkdWNlciBmcm9tICcuL19fcmVkdWNlckhlbHBlcnMvX19jcmVhdGVSZWR1Y2VyJztcbmltcG9ydCBfX21pZGRsZXdhcmUgZnJvbSAnLi9fX21pZGRsZXdhcmUnO1xuXG5jb25zdCB0b0V4cG9ydCA9IHtcbiAgTW9kZWwsXG4gIENvbGxlY3Rpb24sXG4gIGluaXRpYWxpemUoc3RvcmUsIHJvb3QgPSAncmVkYm9uZScpIHtcbiAgICBCb25lLmluaXRpYWxpemUoc3RvcmUsIHJvb3QpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvRXhwb3J0O1xuXG5leHBvcnQgY29uc3QgcmVkdWNlciA9IF9fcmVkdWNlcjtcbmV4cG9ydCBjb25zdCBmbG93ID0gX19mbG93O1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVJlZHVjZXIgPSBfX2NyZWF0ZVJlZHVjZXI7XG5leHBvcnQgY29uc3QgbWlkZGxld2FyZSA9IF9fbWlkZGxld2FyZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbGliL2luZGV4LmpzXG4gKiovIiwiaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnbG9kYXNoL2lzRnVuY3Rpb24nO1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJ2xvZGFzaC9pc1BsYWluT2JqZWN0JztcbmltcG9ydCBSZWRib25lRXJyb3IgZnJvbSAnLi9SZWRib25lRXJyb3InO1xuXG5pbXBvcnQgX19jcmVhdGVSZWR1Y2VyIGZyb20gJy4vX19yZWR1Y2VySGVscGVycy9fX2NyZWF0ZVJlZHVjZXInO1xuXG5pbXBvcnQgX19jcmVhdGVUeXBlcyBmcm9tICcuL19fY3JlYXRlVHlwZXMnO1xuaW1wb3J0IF9fc3luYyBmcm9tICcuL19fc3luYyc7XG5pbXBvcnQge3NldCBhcyBfX2FkZFRvRmxvdywgcmVtb3ZlIGFzIF9fcmVtb3ZlRnJvbUZMb3d9IGZyb20gJy4vX19jb250cm9sRmxvdyc7XG5cbmxldCBfX2Rpc3BhdGNoLCBfX2dldFN0YXRlO1xubGV0IF9fcm9vdDtcbmxldCBfX2xhc3RQaWQgPSAwO1xuXG5jb25zdCBfX2FjdGlvblN5bmMgPSBmdW5jdGlvbihkYXRhKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdGhpcy5UWVBFUy5TWU5DLFxuICAgIGRhdGFcbiAgfVxufVxuXG5jbGFzcyBCb25lIHtcbiAgc3RhdGljIGluaXRpYWxpemUoe2Rpc3BhdGNoLCBnZXRTdGF0ZX0sIHJvb3QpIHtcbiAgICBfX2Rpc3BhdGNoID0gZGlzcGF0Y2g7XG4gICAgX19nZXRTdGF0ZSA9IGdldFN0YXRlO1xuICAgIF9fcm9vdCA9IHJvb3Q7XG4gIH1cblxuICBzdGF0aWMgZ2V0IG5ld1BpZCgpIHtcbiAgICByZXR1cm4gKytfX2xhc3RQaWQ7XG4gIH1cblxuICBzdGF0aWMgZ2V0IF9fZGFuZ2VyRG9udFVzZVRoaXNUeXBlKCkge1xuICAgIHJldHVybiAncm9vdCdcbiAgfVxuXG4gIHN0YXRpYyBnZXQgX19kYW5nZXJEb250VXNlVGhpc1R5cGVzTGlzdCgpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICBpZiAob3B0aW9ucy5zeW5jICYmIGlzRnVuY3Rpb24ob3B0aW9ucy5zeW5jKSkge1xuICAgICAgdGhpcy5zeW5jID0gb3B0aW9ucy5zeW5jLmJpbmQodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3luYyA9IF9fc3luYy5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICB0aGlzLmRpc3BhdGNoID0gX19kaXNwYXRjaDtcbiAgICB0aGlzLmdldFN0YXRlID0gX19nZXRTdGF0ZTtcbiAgICB0aGlzLnJvb3QgPSBfX3Jvb3Q7XG4gICAgdGhpcy5pZEF0dHJpYnV0ZSA9IG9wdGlvbnMuaWRBdHRyaWJ1dGUgfHwgJ2lkJztcbiAgICB0aGlzLmlzTmV3ID0gKG9wdGlvbnMuaXNOZXcgPyAhIW9wdGlvbnMuaXNOZXcgOiB0cnVlKTtcbiAgICBpZiAob3B0aW9ucy5waWQpIHtcbiAgICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMucGlkKSkgdGhpcy5waWQgPSBvcHRpb25zLnBpZC5iaW5kKHRoaXMpKCk7XG4gICAgICBlbHNlIHRoaXMucGlkID0gb3B0aW9ucy5waWQ7XG4gICAgfVxuICAgIGVsc2UgdGhpcy5waWQgPSAncmVkYm9uZVBpZCcgKyBCb25lLm5ld1BpZDtcbiAgICBfX2NyZWF0ZVR5cGVzKHRoaXMsIG9wdGlvbnMucHJlZml4LCB7XG4gICAgICBTWU5DOiAnU1lOQycsXG4gICAgICBDUkVBVEU6ICdDUkVBVEUnLFxuICAgICAgREVTVFJPWTogJ0RFU1RST1knLFxuICAgICAgUkVTRVQ6ICdSRVNFVCdcbiAgICB9KTtcbiAgICB0aGlzLmFjdGlvbnMgPSB7XG4gICAgICBzeW5jOiBfX2FjdGlvblN5bmMuYmluZCh0aGlzKVxuICAgIH1cbiAgICBpZiAoIW9wdGlvbnMubm9GbG93KSB7XG4gICAgICB0aGlzLmZsb3cgPSBfX2FkZFRvRmxvdyh0aGlzKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2goeyB0eXBlOiB0aGlzLlRZUEVTLkNSRUFURSB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRSZWR1Y2VyT2JqZWN0KCkge1xuICAgIHJldHVybiB7fVxuICB9XG5cbiAgY3JlYXRlUmVkdWNlcigpIHtcbiAgICB0aGlzLnJlZHVjZXIgPSBfX2NyZWF0ZVJlZHVjZXIodGhpcy5nZXRSZWR1Y2VyT2JqZWN0KCksIHRoaXMuY29uc3RydWN0b3IuaW5pdGlhbFN0YXRlKTtcbiAgfVxuXG4gIGFkZFR5cGVzKHR5cGVzLCBhZGRQcmVmaXggPSBmYWxzZSkge1xuICAgIGlmICghaXNPYmplY3QodHlwZXMpKSB0aHJvdyBuZXcgUmVkYm9uZUVycm9yKCdUeXBlcyBpcyBub3QgYW4gb2JqZWN0Jyk7XG4gICAgaWYgKGFkZFByZWZpeCkge1xuICAgICAgT2JqZWN0LmtleXModHlwZXMpLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgdHlwZXNbdHlwZV0gPSB0aGlzLlBSRUZJWCArIHR5cGVzW3R5cGVdO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuVFlQRVMgPSB7IC4uLnRoaXMuVFlQRVMsIC4uLnR5cGVzIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBhZGRBY3Rpb25zKGFjdGlvbnMpIHtcbiAgICB0aGlzLmFjdGlvbnMgPSB7XG4gICAgICAuLi50aGlzLmFjdGlvbnMsXG4gICAgICAuLi5hY3Rpb25zXG4gICAgfVxuICB9XG4gIHJlZHVjZShzdGF0ZSwgYWN0aW9uKSB7XG4gICAgaWYgKCF0aGlzLnJlZHVjZXIpIHRoaXMuY3JlYXRlUmVkdWNlcigpO1xuICAgIHJldHVybiB0aGlzLnJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZGlzcGF0Y2goeyB0eXBlOiB0aGlzLlRZUEVTLkRFU1RST1kgfSk7XG4gICAgX19yZW1vdmVGcm9tRkxvdyh0aGlzLmZsb3cpO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5kaXNwYXRjaCh7IHR5cGU6IHRoaXMuVFlQRVMuUkVTRVQgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9uZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbGliL0JvbmUuanNcbiAqKi8iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgY29ycmVjdGx5IGNsYXNzaWZpZWQsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA4IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5IGFuZCB3ZWFrIG1hcCBjb25zdHJ1Y3RvcnMsXG4gIC8vIGFuZCBQaGFudG9tSlMgMS45IHdoaWNoIHJldHVybnMgJ2Z1bmN0aW9uJyBmb3IgYE5vZGVMaXN0YCBpbnN0YW5jZXMuXG4gIHZhciB0YWcgPSBpc09iamVjdCh2YWx1ZSkgPyBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2lzRnVuY3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pc09iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnZXRQcm90b3R5cGUgPSByZXF1aXJlKCcuL19nZXRQcm90b3R5cGUnKSxcbiAgICBpc0hvc3RPYmplY3QgPSByZXF1aXJlKCcuL19pc0hvc3RPYmplY3QnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGluZmVyIHRoZSBgT2JqZWN0YCBjb25zdHJ1Y3Rvci4gKi9cbnZhciBvYmplY3RDdG9yU3RyaW5nID0gZnVuY1RvU3RyaW5nLmNhbGwoT2JqZWN0KTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIHRoYXQgaXMsIGFuIG9iamVjdCBjcmVhdGVkIGJ5IHRoZVxuICogYE9iamVjdGAgY29uc3RydWN0b3Igb3Igb25lIHdpdGggYSBgW1tQcm90b3R5cGVdXWAgb2YgYG51bGxgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC44LjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogfVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChuZXcgRm9vKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdCh7ICd4JzogMCwgJ3knOiAwIH0pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChPYmplY3QuY3JlYXRlKG51bGwpKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkgfHxcbiAgICAgIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpICE9IG9iamVjdFRhZyB8fCBpc0hvc3RPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwcm90byA9IGdldFByb3RvdHlwZSh2YWx1ZSk7XG4gIGlmIChwcm90byA9PT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBDdG9yID0gaGFzT3duUHJvcGVydHkuY2FsbChwcm90bywgJ2NvbnN0cnVjdG9yJykgJiYgcHJvdG8uY29uc3RydWN0b3I7XG4gIHJldHVybiAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJlxuICAgIEN0b3IgaW5zdGFuY2VvZiBDdG9yICYmIGZ1bmNUb1N0cmluZy5jYWxsKEN0b3IpID09IG9iamVjdEN0b3JTdHJpbmcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUGxhaW5PYmplY3Q7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaXNQbGFpbk9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRQcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5cbi8qKlxuICogR2V0cyB0aGUgYFtbUHJvdG90eXBlXV1gIG9mIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge251bGx8T2JqZWN0fSBSZXR1cm5zIHRoZSBgW1tQcm90b3R5cGVdXWAuXG4gKi9cbmZ1bmN0aW9uIGdldFByb3RvdHlwZSh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlR2V0UHJvdG90eXBlKE9iamVjdCh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFByb3RvdHlwZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9fZ2V0UHJvdG90eXBlLmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0IGluIElFIDwgOS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSG9zdE9iamVjdCh2YWx1ZSkge1xuICAvLyBNYW55IGhvc3Qgb2JqZWN0cyBhcmUgYE9iamVjdGAgb2JqZWN0cyB0aGF0IGNhbiBjb2VyY2UgdG8gc3RyaW5nc1xuICAvLyBkZXNwaXRlIGhhdmluZyBpbXByb3Blcmx5IGRlZmluZWQgYHRvU3RyaW5nYCBtZXRob2RzLlxuICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gIGlmICh2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZS50b1N0cmluZyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9ICEhKHZhbHVlICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0hvc3RPYmplY3Q7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2lzSG9zdE9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pc09iamVjdExpa2UuanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJjbGFzcyBSZWRib25lRXJyb3IgZXh0ZW5kcyB3aW5kb3cuRXJyb3Ige1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBSZWRib25lRXJyb3I7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2xpYi9SZWRib25lRXJyb3IuanNcbiAqKi8iLCJpbXBvcnQgaXNTdHJpbmcgZnJvbSAnbG9kYXNoL2lzU3RyaW5nJztcbmltcG9ydCBpc09iamVjdCBmcm9tICdsb2Rhc2gvaXNQbGFpbk9iamVjdCc7XG5cbmNvbnN0IF9fY3JlYXRlVHlwZXMgPSAoY29udGV4dCwgcHJlZml4LCB0eXBlc0FkZCkgPT4ge1xuICBjb25zdCBjbGFzc1R5cGUgPSBjb250ZXh0LmNvbnN0cnVjdG9yLl9fZGFuZ2VyRG9udFVzZVRoaXNUeXBlO1xuICBjb25zdCBjbGFzc1R5cGVzTGlzdCA9IGNvbnRleHQuY29uc3RydWN0b3IuX19kYW5nZXJEb250VXNlVGhpc1R5cGVzTGlzdDtcbiAgaWYgKGlzU3RyaW5nKHByZWZpeCkpIHtcbiAgICBjb250ZXh0LlBSRUZJWCA9IHByZWZpeDtcbiAgfSBlbHNlIHtcbiAgICBjb250ZXh0LlBSRUZJWCA9ICdAQFJlZGJvbmUvJyArIGNsYXNzVHlwZSArXG4gICAgICAnLycgKyBjb250ZXh0LmNvbnN0cnVjdG9yLm5hbWUgKyAnLyc7XG4gIH1cbiAgaWYgKGNvbnRleHQucGlkKSB7XG4gICAgY29udGV4dC5QUkVGSVggKz0gY29udGV4dC5waWQgKyAnLyc7XG4gIH1cbiAgbGV0IHR5cGVzID0ge307XG4gIE9iamVjdC5rZXlzKGNsYXNzVHlwZXNMaXN0KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBjb25zdCB0eXBlID0ga2V5LnRvVXBwZXJDYXNlKCkgKyAnXyc7XG4gICAgdHlwZXNbdHlwZSArICdSRVFVRVNUSU5HJ10gPSBjb250ZXh0LlBSRUZJWCArIHR5cGUgKyAnUkVRVUVTVElORyc7XG4gICAgdHlwZXNbdHlwZSArICdSRVFVRVNURUQnXSA9IGNvbnRleHQuUFJFRklYICsgdHlwZSArICdSRVFVRVNURUQnO1xuICAgIHR5cGVzW3R5cGUgKyAnRVJST1InXSA9IGNvbnRleHQuUFJFRklYICsgdHlwZSArICdFUlJPUic7XG4gIH0pO1xuICBjb250ZXh0LlRZUEVTID0gdHlwZXM7XG4gIGlmIChpc09iamVjdCh0eXBlc0FkZCkpIHtcbiAgICBjb250ZXh0LmFkZFR5cGVzKHR5cGVzQWRkLCB0cnVlKTtcbiAgfVxuICBpZiAoY29udGV4dC5jb25zdHJ1Y3Rvci5UWVBFUykge1xuICAgIGNvbnRleHQuYWRkVHlwZXMoY29udGV4dC5jb25zdHJ1Y3Rvci5UWVBFUywgdHJ1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgX19jcmVhdGVUeXBlcztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbGliL19fY3JlYXRlVHlwZXMuanNcbiAqKi8iLCJ2YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTdHJpbmdgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgY29ycmVjdGx5IGNsYXNzaWZpZWQsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3RyaW5nKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3RyaW5nKDEpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyB8fFxuICAgICghaXNBcnJheSh2YWx1ZSkgJiYgaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBzdHJpbmdUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3RyaW5nO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2lzU3RyaW5nLmpzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAdHlwZSB7RnVuY3Rpb259XG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBjb3JyZWN0bHkgY2xhc3NpZmllZCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pc0FycmF5LmpzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJ2xvZGFzaC9pc0Z1bmN0aW9uJztcbmltcG9ydCBSZWRib25lRXJyb3IgZnJvbSAnLi9SZWRib25lRXJyb3InO1xuXG5leHBvcnQgY29uc3QgX19tZXRob2RNYXAgPSB7XG4gICdjcmVhdGUnOiAnUE9TVCcsXG4gICd1cGRhdGUnOiAnUFVUJyxcbiAgJ3BhdGNoJzogJ1BBVENIJyxcbiAgJ2RlbGV0ZSc6ICdERUxFVEUnLFxuICAncmVhZCc6ICdHRVQnXG59O1xuXG5leHBvcnQgY29uc3QgUFJFRklYID0gJ0BAUmVkYm9uZS9hamF4Lyc7XG5leHBvcnQgY29uc3QgUkVRVUVTVElORyA9IFBSRUZJWCArICdSRVFVRVNUSU5HJztcbmV4cG9ydCBjb25zdCBSRVFVRVNURUQgPSBQUkVGSVggKyAnUkVRVUVTVEVEJztcbmV4cG9ydCBjb25zdCBFUlJPUiA9IFBSRUZJWCArICdFUlJPUic7XG5cbmNvbnN0IF9fc3luYyA9IGZ1bmN0aW9uKG1ldGhvZCwgYWN0aW9ucywgb3B0aW9ucykge1xuICBpZiAoIXdpbmRvdy5qUXVlcnkpIHRocm93IFJlZGJvbmVFcnJvcignalF1ZXJ5IG5vdCBkZWZpbmVkJyk7XG4gIGNvbnN0ICQgPSB3aW5kb3cualF1ZXJ5O1xuICBvcHRpb25zLnN5bmMgPSAob3B0aW9ucy5zeW5jID09PSBmYWxzZSA/IGZhbHNlIDogdHJ1ZSk7XG4gIGNvbnN0IHR5cGUgPSBfX21ldGhvZE1hcFttZXRob2RdO1xuICBsZXQgdXJsO1xuICBpZiAob3B0aW9ucy51cmwpIHtcbiAgICB1cmwgPSAoaXNGdW5jdGlvbihvcHRpb25zLnVybCkgPyBvcHRpb25zLnVybC5iaW5kKHRoaXMpIDogb3B0aW9ucy51cmwpO1xuICB9IGVsc2Uge1xuICAgIHVybCA9IHRoaXMudXJsO1xuICAgIGlmICghdGhpcy5pc05ldykgdXJsICs9IHRoaXMuaWQ7XG4gIH1cbiAgbGV0IGRhdGEgPSBudWxsO1xuICBpZiAob3B0aW9ucy5kYXRhKSB7XG4gICAgZGF0YSA9IG9wdGlvbnMuZGF0YTtcbiAgfSBlbHNlIGlmICh0aGlzLmdldCAmJiBpc0Z1bmN0aW9uKHRoaXMuZ2V0KSkge1xuICAgIGRhdGEgPSB0aGlzLmdldCgpO1xuICB9XG4gIGxldCBwcm9jZXNzRGF0YSA9IHRydWU7XG4gIGlmIChkYXRhICYmIHR5cGUgIT09ICdHRVQnICYmIHR5cGUgIT09ICdnZXQnKSB7XG4gICAgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIHByb2Nlc3NEYXRhID0gZmFsc2U7XG4gIH1cbiAgdGhpcy5kaXNwYXRjaCh7IHR5cGU6IFJFUVVFU1RJTkcgfSk7XG4gIHRoaXMuZGlzcGF0Y2goYWN0aW9ucy5yZXF1ZXN0aW5nKCkpO1xuXG4gIGNvbnN0IHN1Y2Nlc3MgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdGhpcy5pZCA9IGRhdGFbdGhpcy5pZEF0dHJpYnV0ZV0gfHwgbnVsbDtcbiAgICB0aGlzLmlzTmV3ID0gZmFsc2U7XG4gICAgdGhpcy5kaXNwYXRjaCh7IHR5cGU6IFJFUVVFU1RFRCB9KTtcbiAgICBpZiAob3B0aW9ucy5zeW5jKSB7XG4gICAgICB0aGlzLmRpc3BhdGNoKGFjdGlvbnMucmVxdWVzdGVkKCkpO1xuICAgICAgdGhpcy5kaXNwYXRjaCh0aGlzLmFjdGlvbnMuc3luYyhkYXRhKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2goYWN0aW9ucy5yZXF1ZXN0ZWQoZGF0YSkpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5zdWNjZXNzICYmIGlzRnVuY3Rpb24ob3B0aW9ucy5zdWNjZXNzKSkge1xuICAgICAgb3B0aW9ucy5zdWNjZXNzKGRhdGEpO1xuICAgIH1cbiAgICBpZiAodGhpcy5hZnRlclJlcXVlc3QgJiYgaXNGdW5jdGlvbih0aGlzLmFmdGVyUmVxdWVzdCkpIHtcbiAgICAgIHRoaXMuYWZ0ZXJSZXF1ZXN0KG1ldGhvZCwgZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZXJyb3IgPSBmdW5jdGlvbihlcnIpIHtcbiAgICB0aGlzLmRpc3BhdGNoKHsgdHlwZTogRVJST1IsIGVyciB9KTtcbiAgICB0aGlzLmRpc3BhdGNoKGFjdGlvbnMuZXJyb3IoZXJyKSk7XG4gICAgaWYgKG9wdGlvbnMuZXJyb3IgJiYgaXNGdW5jdGlvbihvcHRpb25zLmVycm9yKSkge1xuICAgICAgb3B0aW9ucy5lcnJvcihkYXRhKTtcbiAgICB9XG4gIH1cblxuICAkLmFqYXgoe1xuICAgIHR5cGUsXG4gICAgdXJsLFxuICAgIGRhdGEsXG4gICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIHByb2Nlc3NEYXRhLFxuICAgIHN1Y2Nlc3M6IHN1Y2Nlc3MuYmluZCh0aGlzKSxcbiAgICBlcnJvcjogZXJyb3IuYmluZCh0aGlzKVxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgX19zeW5jO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9saWIvX19zeW5jLmpzXG4gKiovIiwiaW1wb3J0IFJlZGJvbmVFcnJvciBmcm9tICcuL1JlZGJvbmVFcnJvcic7XG5cbmNvbnN0IF9fY29udHJvbEZsb3cgPSB7fTtcblxuY29uc3QgX19pbml0ID0gKGJvbmUpID0+IHtcbiAgY29uc3QgdHlwZSA9IGJvbmUuY29uc3RydWN0b3IuX19kYW5nZXJEb250VXNlVGhpc1R5cGU7XG4gIGNvbnN0IGNsYXNzTmFtZSA9IGJvbmUuY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKCFfX2NvbnRyb2xGbG93W3R5cGVdKSB7XG4gICAgX19jb250cm9sRmxvd1t0eXBlXSA9IHt9O1xuICB9XG4gIGlmICghX19jb250cm9sRmxvd1t0eXBlXVtjbGFzc05hbWVdKSB7XG4gICAgX19jb250cm9sRmxvd1t0eXBlXVtjbGFzc05hbWVdID0ge307XG4gIH1cbiAgaWYgKCFfX2NvbnRyb2xGbG93W3R5cGVdW2NsYXNzTmFtZV1bYm9uZS5waWRdKSB7XG4gICAgX19jb250cm9sRmxvd1t0eXBlXVtjbGFzc05hbWVdW2JvbmUucGlkXSA9IGJvbmU7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFJlZGJvbmVFcnJvcihgJHt0eXBlfS8ke2NsYXNzTmFtZX0vJHtib25lLnBpZH0gaXMgYWxyZWFkeSBleGlzdHNgKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHR5cGUsIGNsYXNzTmFtZSwgcGlkOiBib25lLnBpZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzZXQgPSAoYm9uZSkgPT4ge1xuICByZXR1cm4gX19pbml0KGJvbmUpO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0ID0gKGZsb3cpID0+IHtcbiAgaWYgKGZsb3cpIHtcbiAgICBjb25zdCB7dHlwZSwgY2xhc3NOYW1lLCBwaWR9ID0gZmxvdztcbiAgICBpZiAoX19jb250cm9sRmxvd1t0eXBlXSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fY29udHJvbEZsb3dbdHlwZV1bY2xhc3NOYW1lXSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fY29udHJvbEZsb3dbdHlwZV1bY2xhc3NOYW1lXVtwaWRdKSB7XG4gICAgICByZXR1cm4gX19jb250cm9sRmxvd1t0eXBlXVtjbGFzc05hbWVdW3BpZF07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBfX2NvbnRyb2xGbG93O1xufVxuXG5leHBvcnQgY29uc3QgcmVtb3ZlID0gKHt0eXBlLCBjbGFzc05hbWUsIHBpZH0pID0+IHtcbiAgX19jb250cm9sRmxvd1t0eXBlXVtjbGFzc05hbWVdW3BpZF0gPSBudWxsO1xuICBkZWxldGUgX19jb250cm9sRmxvd1t0eXBlXVtjbGFzc05hbWVdW3BpZF07XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2xpYi9fX2NvbnRyb2xGbG93LmpzXG4gKiovIiwiaW1wb3J0IEJvbmUgZnJvbSAnLi9Cb25lJztcbmltcG9ydCBfX2dldFN5bmNBY3Rpb25zIGZyb20gJy4vX19nZXRTeW5jQWN0aW9ucyc7XG5cbmNvbnN0IF9faW5pdGlhbFN0YXRlID0ge1xuICBhdHRyaWJ1dGVzOiB7fVxufVxuXG5jbGFzcyBNb2RlbCBleHRlbmRzIEJvbmUge1xuICBzdGF0aWMgZ2V0IF9fZGFuZ2VyRG9udFVzZVRoaXNUeXBlKCkge1xuICAgIHJldHVybiAnbW9kZWwnXG4gIH1cbiAgc3RhdGljIGdldCBfX2RhbmdlckRvbnRVc2VUaGlzVHlwZXNMaXN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBMT0FEOiAnTE9BRCcsXG4gICAgICBTQVZFOiAnU0FWRScsXG4gICAgICBSRU1PVkU6ICdSRU1PVkUnXG4gICAgfVxuICB9XG4gIHN0YXRpYyBnZXQgVFlQRVMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFNFVDogJ1NFVCdcbiAgICB9XG4gIH1cbiAgc3RhdGljIGdldCBpbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIF9faW5pdGlhbFN0YXRlXG4gIH1cbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIob3B0aW9ucyk7XG4gICAgaWYgKG9wdGlvbnMudXJsKSB0aGlzLnVybCA9IG9wdGlvbnMudXJsO1xuICAgIHRoaXMuYWRkQWN0aW9ucyh7XG4gICAgICBsb2FkOiBfX2dldFN5bmNBY3Rpb25zKHRoaXMsICdMT0FEJyksXG4gICAgICBzYXZlOiBfX2dldFN5bmNBY3Rpb25zKHRoaXMsICdTQVZFJyksXG4gICAgICByZW1vdmU6IF9fZ2V0U3luY0FjdGlvbnModGhpcywgJ1JFTU9WRScpLFxuICAgICAgc2V0OiAoc3RhdGUsIGZvcmNlKSA9PiB7XG4gICAgICAgIHJldHVybiB7IHR5cGU6IHRoaXMuVFlQRVMuU0VULCBzdGF0ZSwgZm9yY2UgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcGFyc2UoZGF0YSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgZ2V0UmVkdWNlck9iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgW3RoaXMuVFlQRVMuU1lOQ106IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgYXR0cmlidXRlczogdGhpcy5wYXJzZShhY3Rpb24uZGF0YSlcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBbdGhpcy5UWVBFUy5TRVRdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICBpZiAoYWN0aW9uLmZvcmNlKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgYXR0cmlidXRlczogYWN0aW9uLnN0YXRlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgLi4uc3RhdGUuYXR0cmlidXRlcyxcbiAgICAgICAgICAgIC4uLmFjdGlvbi5zdGF0ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFt0aGlzLlRZUEVTLlJFU0VUXTogKCkgPT4gX19pbml0aWFsU3RhdGVcbiAgICB9O1xuICB9XG5cbiAgYWZ0ZXJSZXF1ZXN0KHR5cGUsIGRhdGEpIHtcbiAgICBpZiAodHlwZSA9PT0gJ3JlYWQnIHx8IHR5cGUgPT09ICdjcmVhdGUnIHx8IHR5cGUgPT09ICd1cGRhdGUnKSB7XG4gICAgICBpZiAoZGF0YSAmJiBkYXRhW3RoaXMuaWRBdHRyaWJ1dGVdKSB7XG4gICAgICAgIHRoaXMuaWQgPSBkYXRhW3RoaXMuaWRBdHRyaWJ1dGVdO1xuICAgICAgfVxuICAgICAgdGhpcy5pc05ldyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGxvYWQoaWQgPSBudWxsLCB1cmwgPSBudWxsKSB7XG4gICAgaWYgKCFpZCAmJiB0aGlzLmlkKSBpZCA9IHRoaXMuaWQ7XG4gICAgaWYgKCF1cmwpIHVybCA9IHRoaXMudXJsO1xuICAgIGlmICghaWQpIGlkID0gJyc7XG4gICAgdGhpcy5zeW5jKCdyZWFkJywgdGhpcy5hY3Rpb25zLmxvYWQsIHsgdXJsOiB1cmwgKyBpZCB9KTtcbiAgfVxuXG4gIHNhdmUoaWQgPSBudWxsLCB1cmwgPSBudWxsKSB7XG4gICAgaWYgKCFpZCAmJiB0aGlzLmlkKSBpZCA9IHRoaXMuaWQ7XG4gICAgaWYgKCF1cmwpIHVybCA9IHRoaXMudXJsO1xuICAgIGlmICghaWQpIHtcbiAgICAgIHRoaXMuc3luYygnY3JlYXRlJywgdGhpcy5hY3Rpb25zLnNhdmUsIHsgdXJsOiB1cmwgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3luYygndXBkYXRlJywgdGhpcy5hY3Rpb25zLnNhdmUsIHsgdXJsOiB1cmwgKyBpZCB9KTtcbiAgICB9XG4gIH1cblxuICByZW1vdmUoaWQgPSBudWxsLCB1cmwgPSBudWxsKSB7XG4gICAgaWYgKCFpZCAmJiB0aGlzLmlkKSBpZCA9IHRoaXMuaWQ7XG4gICAgaWYgKCF1cmwpIHVybCA9IHRoaXMudXJsO1xuICAgIGlmICghaWQpIGlkID0gJyc7XG4gICAgdGhpcy5zeW5jKCdyZW1vdmUnLCB0aGlzLmFjdGlvbnMucmVtb3ZlLCB7IHVybDogdXJsICsgaWQgfSk7XG4gIH1cblxuICBzZXQoc3RhdGUsIGZvcmNlID0gZmFsc2UpIHtcbiAgICB0aGlzLmRpc3BhdGNoKHRoaXMuYWN0aW9ucy5zZXQoc3RhdGUsIGZvcmNlKSk7XG4gIH1cblxuICBnZXQoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCk7XG4gICAgcmV0dXJuIHN0YXRlW3RoaXMucm9vdF1bdGhpcy5mbG93LnR5cGVdW3RoaXMuZmxvdy5jbGFzc05hbWVdW3RoaXMucGlkXS5hdHRyaWJ1dGVzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGVsO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9saWIvTW9kZWwuanNcbiAqKi8iLCJpbXBvcnQgUmVkYm9uZUVycm9yIGZyb20gJy4uL1JlZGJvbmVFcnJvcic7XG5pbXBvcnQgaXNGdW5jdGlvbiBmcm9tICdsb2Rhc2gvaXNGdW5jdGlvbic7XG5cbmNvbnN0IF9fY3JlYXRlUmVkdWNlciA9IChzd2l0Y2hlcywgaW5pdGlhbFN0YXRlID0gbnVsbCwgc3RhdGVSZWR1Y2VyID0gbnVsbCkgPT4ge1xuICByZXR1cm4gZnVuY3Rpb24oc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICAgIGxldCBuZXh0U3RhdGUgPSBzdGF0ZTtcbiAgICBpZiAoc3dpdGNoZXNbYWN0aW9uLnR5cGVdKSB7XG4gICAgICBpZiAoIWlzRnVuY3Rpb24oc3dpdGNoZXNbYWN0aW9uLnR5cGVdKSkge1xuICAgICAgICB0aHJvdyBuZXcgUmVkYm9uZUVycm9yKCdjcmVhdGVSZWR1Y2VyIHN3aXRjaGVyIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gICAgICB9XG4gICAgICBuZXh0U3RhdGUgPSBzd2l0Y2hlc1thY3Rpb24udHlwZV0oc3RhdGUsIGFjdGlvbik7XG4gICAgfVxuICAgIGlmIChpc0Z1bmN0aW9uKHN0YXRlUmVkdWNlcikpIHtcbiAgICAgIHJldHVybiBzdGF0ZVJlZHVjZXIoc3RhdGUsIG5leHRTdGF0ZSwgYWN0aW9uKTtcbiAgICB9XG4gICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBfX2NyZWF0ZVJlZHVjZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2xpYi9fX3JlZHVjZXJIZWxwZXJzL19fY3JlYXRlUmVkdWNlci5qc1xuICoqLyIsImltcG9ydCBCb25lIGZyb20gJy4vQm9uZSc7XG5pbXBvcnQgaXNBcnJheSBmcm9tICdsb2Rhc2gvaXNBcnJheSc7XG5pbXBvcnQgX19nZXRTeW5jQWN0aW9ucyBmcm9tICcuL19fZ2V0U3luY0FjdGlvbnMnO1xuXG5jb25zdCBTRVQgPSAnU0VUJztcbmNvbnN0IFNFVF9NT0RFTCA9ICdTRVRfTU9ERUwnO1xuXG5jb25zdCBfX2FjdGlvblNldCA9IGZ1bmN0aW9uKHN0YXRlLCByZXNldCA9IGZhbHNlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdGhpcy5UWVBFUy5TRVQsXG4gICAgc3RhdGUsIHJlc2V0XG4gIH1cbn1cblxuY29uc3QgX19pbml0aWFsU3RhdGUgPSB7XG4gIG1vZGVsczoge30sXG4gIGxpc3Q6IFtdLFxuICBjdXJyZW50TW9kZWw6IG51bGxcbn1cblxuY29uc3QgX19sb2FkTW9kZWwgPSBmdW5jdGlvbihpZCkge1xuICB0aGlzLnN5bmMoJ3JlYWQnLCB0aGlzLmFjdGlvbnMubW9kZWwubG9hZCwgeyB1cmw6IHRoaXMudXJsICsgaWQsIHN5bmM6IGZhbHNlIH0pXG59XG5cbmNsYXNzIENvbGxlY3Rpb24gZXh0ZW5kcyBCb25lIHtcbiAgc3RhdGljIGdldCBfX2RhbmdlckRvbnRVc2VUaGlzVHlwZSgpIHtcbiAgICByZXR1cm4gJ2NvbGxlY3Rpb24nXG4gIH1cbiAgc3RhdGljIGdldCBfX2RhbmdlckRvbnRVc2VUaGlzVHlwZXNMaXN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBGRVRDSDogJ0ZFVENIJyxcbiAgICAgIFNBVkVfQ1VSUkVOVF9NT0RFTDogJ1NBVkVfQ1VSUkVOVF9NT0RFTCcsXG4gICAgICBSRU1PVkVfTU9ERUw6ICdSRU1PVkVfTU9ERUwnLFxuICAgICAgTE9BRF9DVVJSRU5UX01PREVMOiAnTE9BRF9DVVJSRU5UX01PREVMJ1xuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IFRZUEVTKCkge1xuICAgIHJldHVybiB7XG4gICAgICBTRVQsXG4gICAgICBTRVRfTU9ERUxcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IGluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4gX19pbml0aWFsU3RhdGU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcihvcHRpb25zKTtcbiAgICBpZiAob3B0aW9ucy51cmwpIHRoaXMudXJsID0gb3B0aW9ucy51cmw7XG4gICAgaWYgKG9wdGlvbnMuaW5uZXJBdHRyaWJ1dGUpIHRoaXMuaW5uZXJBdHRyaWJ1dGUgPSBvcHRpb25zLmlubmVyQXR0cmlidXRlO1xuICAgIHRoaXMuYWRkQWN0aW9ucyh7XG4gICAgICBmZXRjaDogX19nZXRTeW5jQWN0aW9ucyh0aGlzLCAnRkVUQ0gnKSxcbiAgICAgIG1vZGVsOiB7XG4gICAgICAgIGxvYWRBc0N1cnJlbnQ6IF9fZ2V0U3luY0FjdGlvbnModGhpcywgJ0xPQURfQ1VSUkVOVF9NT0RFTCcpXG4gICAgICB9LFxuICAgICAgc2V0OiBfX2FjdGlvblNldC5iaW5kKHRoaXMpXG4gICAgfSk7XG4gICAgdGhpcy5tb2RlbCA9IHt9O1xuICAgIHRoaXMubW9kZWwubG9hZCA9IF9fbG9hZE1vZGVsLmJpbmQodGhpcyk7XG4gIH1cblxuICBnZXRSZWR1Y2VyT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBbdGhpcy5UWVBFUy5TWU5DXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAuLi50aGlzLl9fcGFyc2UoYWN0aW9uLmRhdGEpXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgW3RoaXMuVFlQRVMuTE9BRF9DVVJSRU5UX01PREVMX1JFUVVFU1RFRF06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgY3VycmVudE1vZGVsOiBhY3Rpb24uZGF0YVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW3RoaXMuVFlQRVMuUkVTRVRdOiAoKSA9PiBfX2luaXRpYWxTdGF0ZVxuICAgIH1cbiAgfVxuXG4gIGZldGNoKGRhdGEpIHtcbiAgICB0aGlzLnN5bmMoJ3JlYWQnLCB0aGlzLmFjdGlvbnMuZmV0Y2gsIHtkYXRhfSlcbiAgfVxuXG4gIHBhcnNlKGRhdGEpIHtcbiAgICBpZiAodGhpcy5pbm5lckF0dHJpYnV0ZSAmJiBkYXRhKSB7XG4gICAgICBkYXRhID0gZGF0YVt0aGlzLmlubmVyQXR0cmlidXRlXTtcbiAgICB9XG4gICAgY29uc3QgbW9kZWxzID0ge307XG4gICAgY29uc3QgbGlzdCA9IFtdO1xuICAgIGlmICghaXNBcnJheShkYXRhKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbW9kZWxzLFxuICAgICAgICBsaXN0XG4gICAgICB9O1xuICAgIH1cbiAgICBkYXRhLmZvckVhY2goKG1vZGVsKSA9PiB7XG4gICAgICBpZiAoIW1vZGVsW3RoaXMuaWRBdHRyaWJ1dGVdKSByZXR1cm47XG4gICAgICBtb2RlbHNbbW9kZWxbdGhpcy5pZEF0dHJpYnV0ZV1dID0gbW9kZWw7XG4gICAgICBsaXN0LnB1c2gobW9kZWxbdGhpcy5pZEF0dHJpYnV0ZV0pO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBtb2RlbHMsXG4gICAgICBsaXN0XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbGxlY3Rpb247XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2xpYi9Db2xsZWN0aW9uLmpzXG4gKiovIiwiY29uc3QgX19nZXRTeW5jQWN0aW9ucyA9IGZ1bmN0aW9uKGNvbnRleHQsIFBSRSkge1xuICBjb25zdCBfX3JlcXVlc3RpbmcgPSBmdW5jdGlvbihkYXRhID0gbnVsbCkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBjb250ZXh0LlRZUEVTW1BSRSArICdfUkVRVUVTVElORyddLFxuICAgICAgZGF0YVxuICAgIH1cbiAgfTtcbiAgY29uc3QgX19yZXF1ZXN0ZWQgPSBmdW5jdGlvbihkYXRhID0gbnVsbCkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBjb250ZXh0LlRZUEVTW1BSRSArICdfUkVRVUVTVEVEJ10sXG4gICAgICBkYXRhXG4gICAgfVxuICB9O1xuICBjb25zdCBfX2Vycm9yID0gZnVuY3Rpb24oZXJyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IGNvbnRleHQuVFlQRVNbUFJFICsgJ19FUlJPUiddLFxuICAgICAgZXJyXG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgcmVxdWVzdGluZzogX19yZXF1ZXN0aW5nLFxuICAgIHJlcXVlc3RlZDogX19yZXF1ZXN0ZWQsXG4gICAgZXJyb3I6IF9fZXJyb3JcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBfX2dldFN5bmNBY3Rpb25zO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9saWIvX19nZXRTeW5jQWN0aW9ucy5qc1xuICoqLyIsImltcG9ydCBfX3BhcnNlRmxvdyBmcm9tICcuL19fcGFyc2VGbG93JztcbmltcG9ydCBfX3Byb2Nlc3NGbG93IGZyb20gJy4vX19yZWR1Y2VySGVscGVycy9fX3Byb2Nlc3NGbG93JztcblxuY29uc3QgX19pbml0aWFsU3RhdGUgPSB7XG4gIHJvb3Q6IHt9XG59XG5cblxuXG5jb25zdCBfX3JlZHVjZXIgPSAoc3RhdGUgPSBfX2luaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGNvbnN0IGZsb3cgPSBfX3BhcnNlRmxvdyhhY3Rpb24pO1xuICBpZiAoIWZsb3cpIHJldHVybiBzdGF0ZTtcbiAgcmV0dXJuIF9fcHJvY2Vzc0Zsb3coc3RhdGUsIGFjdGlvbiwgZmxvdyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IF9fcmVkdWNlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbGliL19fcmVkdWNlci5qc1xuICoqLyIsImltcG9ydCBSZWRib25lRXJyb3IgZnJvbSAnLi4vUmVkYm9uZUVycm9yJztcbmltcG9ydCAqIGFzIF9fZmxvdyBmcm9tICcuLi9fX2NvbnRyb2xGbG93JztcbmltcG9ydCBfX2NyZWF0ZUJvbmUgZnJvbSAnLi9fX2NyZWF0ZUJvbmUnO1xuaW1wb3J0IF9fZGVzdHJveUJvbmUgZnJvbSAnLi9fX2Rlc3Ryb3lCb25lJztcblxuXG5jb25zdCBfX3Byb2Nlc3NGbG93ID0gKHN0YXRlLCBhY3Rpb24sIGZsb3cpID0+IHtcbiAgaWYgKCFmbG93KSB0aHJvdyBuZXcgUmVkYm9uZUVycm9yKCdGbG93IGlzIG5vdCBkZWZpbmVkJyk7XG4gIGNvbnN0IGJvbmUgPSBfX2Zsb3cuZ2V0KGZsb3cpO1xuICBpZiAoZmxvdy5hY3Rpb24gPT09ICdDUkVBVEUnKSB7XG4gICAgcmV0dXJuIF9fY3JlYXRlQm9uZShzdGF0ZSwgZmxvdywgYm9uZS5jb25zdHJ1Y3Rvci5pbml0aWFsU3RhdGUpO1xuICB9XG4gIGlmIChmbG93LmFjdGlvbiA9PT0gJ0RFU1RST1knKSB7XG4gICAgcmV0dXJuIF9fZGVzdHJveUJvbmUoc3RhdGUsIGZsb3cpO1xuICB9XG4gIGlmICghYm9uZSkgcmV0dXJuIHN0YXRlO1xuXG4gIGlmICghYm9uZS5UWVBFU1tmbG93LmFjdGlvbl0pIHJldHVybiBzdGF0ZTtcbiAgLy8gY29uc3QgZmFrZUFjdGlvbiA9IHtcbiAgLy8gICAuLi5hY3Rpb24sXG4gIC8vICAgdHlwZTogZmxvdy5hY3Rpb25cbiAgLy8gfTtcbiAgY29uc3QgZmFrZVN0YXRlID0gc3RhdGVbZmxvdy50eXBlXVtmbG93LmNsYXNzTmFtZV1bZmxvdy5waWRdO1xuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgW2Zsb3cudHlwZV06IHtcbiAgICAgIC4uLnN0YXRlW2Zsb3cudHlwZV0sXG4gICAgICBbZmxvdy5jbGFzc05hbWVdOiB7XG4gICAgICAgIC4uLnN0YXRlW2Zsb3cudHlwZV1bZmxvdy5jbGFzc05hbWVdLFxuICAgICAgICBbZmxvdy5waWRdOiBib25lLnJlZHVjZShmYWtlU3RhdGUsIGFjdGlvbilcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgX19wcm9jZXNzRmxvdztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbGliL19fcmVkdWNlckhlbHBlcnMvX19wcm9jZXNzRmxvdy5qc1xuICoqLyIsImltcG9ydCBSZWRib25lRXJyb3IgZnJvbSAnLi4vUmVkYm9uZUVycm9yJztcbmltcG9ydCB7X19ub25GbG93VHlwZSwgX19ub25GbG93Q2xhc3MsIF9fbm9uRmxvd1BpZH0gZnJvbSAnLi9fX25vbkZsb3cnO1xuXG5jb25zdCBfX2NyZWF0ZUJvbmUgPSAoc3RhdGUsIGZsb3csIGluaXRpYWxTdGF0ZSkgPT4ge1xuICBpZiAoIXN0YXRlW2Zsb3cudHlwZV0pIHtcbiAgICByZXR1cm4gX19ub25GbG93VHlwZShzdGF0ZSwgZmxvdywgaW5pdGlhbFN0YXRlKTtcbiAgfVxuICBpZiAoIXN0YXRlW2Zsb3cudHlwZV1bZmxvdy5jbGFzc05hbWVdKSB7XG4gICAgcmV0dXJuIF9fbm9uRmxvd0NsYXNzKHN0YXRlLCBmbG93LCBpbml0aWFsU3RhdGUpO1xuICB9XG4gIGlmICghc3RhdGVbZmxvdy50eXBlXVtmbG93LmNsYXNzTmFtZV1bZmxvdy5waWRdKSB7XG4gICAgcmV0dXJuIF9fbm9uRmxvd1BpZChzdGF0ZSwgZmxvdywgaW5pdGlhbFN0YXRlKTtcbiAgfSBlbHNlIHRocm93IG5ldyBSZWRib25lRXJyb3IoYCR7Zmxvdy50eXBlfS8ke2Zsb3cuY2xhc3NOYW1lfS8ke2Zsb3cucGlkfSBhbHJlYWR5IGluIHN0b3JlYCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IF9fY3JlYXRlQm9uZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbGliL19fcmVkdWNlckhlbHBlcnMvX19jcmVhdGVCb25lLmpzXG4gKiovIiwiZXhwb3J0IGNvbnN0IF9fbm9uRmxvd1R5cGUgPSAoc3RhdGUsIHt0eXBlLCBjbGFzc05hbWUsIHBpZH0sIGluaXRpYWxTdGF0ZSA9IHt9KSA9PiB7XG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgW3R5cGVdOiB7XG4gICAgICBbY2xhc3NOYW1lXToge1xuICAgICAgICBbcGlkXTogaW5pdGlhbFN0YXRlXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBfX25vbkZsb3dDbGFzcyA9IChzdGF0ZSwge3R5cGUsIGNsYXNzTmFtZSwgcGlkfSwgaW5pdGlhbFN0YXRlID0ge30pID0+IHtcbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBbdHlwZV06IHtcbiAgICAgIC4uLnN0YXRlW3R5cGVdLFxuICAgICAgW2NsYXNzTmFtZV06IHtcbiAgICAgICAgW3BpZF06IGluaXRpYWxTdGF0ZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgX19ub25GbG93UGlkID0gKHN0YXRlLCB7dHlwZSwgY2xhc3NOYW1lLCBwaWR9LCBpbml0aWFsU3RhdGUgPSB7fSkgPT4ge1xuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIFt0eXBlXToge1xuICAgICAgLi4uc3RhdGVbdHlwZV0sXG4gICAgICBbY2xhc3NOYW1lXToge1xuICAgICAgICAuLi5zdGF0ZVt0eXBlXVtjbGFzc05hbWVdLFxuICAgICAgICBbcGlkXTogaW5pdGlhbFN0YXRlXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2xpYi9fX3JlZHVjZXJIZWxwZXJzL19fbm9uRmxvdy5qc1xuICoqLyIsImNvbnN0IF9fZGVzdHJveUJvbmUgPSAoc3RhdGUsIHt0eXBlLCBjbGFzc05hbWUsIHBpZH0pID0+IHtcbiAgY29uc3Qgc3RhdGVDbGFzcyA9IHsgLi4uc3RhdGVbdHlwZV1bY2xhc3NOYW1lXSB9O1xuICBzdGF0ZUNsYXNzW3BpZF0gPSBudWxsO1xuICBkZWxldGUgc3RhdGVDbGFzc1twaWRdO1xuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIFt0eXBlXToge1xuICAgICAgLi4uc3RhdGVbdHlwZV0sXG4gICAgICBbY2xhc3NOYW1lXTogc3RhdGVDbGFzc1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBfX2Rlc3Ryb3lCb25lO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9saWIvX19yZWR1Y2VySGVscGVycy9fX2Rlc3Ryb3lCb25lLmpzXG4gKiovIiwiY29uc3QgX19yZWRib25lUHggPSAnQEByZWRib25lJztcbmNvbnN0IF9fcmVkYm9uZVB4TGVuID0gX19yZWRib25lUHgubGVuZ3RoO1xuXG5jb25zdCBfX3BhcnNlRmxvd1J1bGUgPSAvXkBAcmVkYm9uZVxcLyhbYS16XSs/KVxcLyhbYS16XzAtOV0rPylcXC8oW2Etel8wLTldKz8pXFwvKC4qKS9pO1xuXG5jb25zdCBfX3BhcnNlRmxvdyA9IChhY3Rpb24pID0+IHtcbiAgaWYgKGFjdGlvbi50eXBlLnNsaWNlKDAsIF9fcmVkYm9uZVB4TGVuKS50b0xvd2VyQ2FzZSgpICE9PSBfX3JlZGJvbmVQeCkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGZsb3dSdWxlID0gYWN0aW9uLnR5cGUubWF0Y2goX19wYXJzZUZsb3dSdWxlKTtcbiAgaWYgKCFmbG93UnVsZSkgcmV0dXJuIG51bGw7XG4gIHJldHVybiB7XG4gICAgYWN0aW9uOiBmbG93UnVsZVs0XSxcbiAgICBwaWQ6IGZsb3dSdWxlWzNdLFxuICAgIGNsYXNzTmFtZTogZmxvd1J1bGVbMl0sXG4gICAgdHlwZTogZmxvd1J1bGVbMV1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBfX3BhcnNlRmxvdztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbGliL19fcGFyc2VGbG93LmpzXG4gKiovIiwiaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnbG9kYXNoL2lzRnVuY3Rpb24nO1xuaW1wb3J0IF9fcGFyc2VGbG93IGZyb20gJy4vX19wYXJzZUZsb3cnO1xuaW1wb3J0IHtnZXR9IGZyb20gJy4vX19jb250cm9sRmxvdyc7XG5cblxuY29uc3QgX19taWRkbGV3YXJlID0gKHtkaXNwYXRjaCwgZ2V0U3RhdGV9KSA9PiB7XG4gIHJldHVybiBuZXh0ID0+IGFjdGlvbiA9PiB7XG4gICAgaWYgKCFhY3Rpb24udHlwZSkgcmV0dXJuIG5leHQoYWN0aW9uKTtcbiAgICBjb25zdCBmbG93ID0gX19wYXJzZUZsb3coYWN0aW9uKTtcbiAgICBpZiAoZmxvdyA9PT0gbnVsbCkgcmV0dXJuIG5leHQoYWN0aW9uKTtcbiAgICBjb25zdCBib25lID0gZ2V0KGZsb3cpO1xuICAgIGlmICghYm9uZSkgcmV0dXJuIG5leHQoYWN0aW9uKTtcbiAgICBjb25zdCBtaWRkbGV3YXJlT2JqZWN0ID0geyBkaXNwYXRjaCwgZ2V0U3RhdGUsIGFjdGlvbiwgZmxvdyB9O1xuICAgIGlmIChib25lLmJlZm9yZURpc3BhdGNoICYmIGlzRnVuY3Rpb24oYm9uZS5iZWZvcmVEaXNwYXRjaCkpIHtcbiAgICAgIG1pZGRsZXdhcmVPYmplY3QubmV4dCA9IChhY3Rpb24pID0+IHtcbiAgICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAgIG5leHQoYWN0aW9uKTtcbiAgICAgICAgICBpZiAoYm9uZS5hZnRlckRpc3BhdGNoICYmIGlzRnVuY3Rpb24oYm9uZS5hZnRlckRpc3BhdGNoKSkge1xuICAgICAgICAgICAgYm9uZS5hZnRlckRpc3BhdGNoKG1pZGRsZXdhcmVPYmplY3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9O1xuICAgICAgYm9uZS5iZWZvcmVEaXNwYXRjaChtaWRkbGV3YXJlT2JqZWN0KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbmV4dChhY3Rpb24pO1xuICAgIGlmIChib25lLmFmdGVyRGlzcGF0Y2ggJiYgaXNGdW5jdGlvbihib25lLmFmdGVyRGlzcGF0Y2gpKSB7XG4gICAgICBib25lLmFmdGVyRGlzcGF0Y2gobWlkZGxld2FyZU9iamVjdCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IF9fbWlkZGxld2FyZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbGliL19fbWlkZGxld2FyZS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=