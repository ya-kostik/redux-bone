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
	exports.createReducer = exports.flow = exports.reducer = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Bone = __webpack_require__(2);
	
	var _Bone2 = _interopRequireDefault(_Bone);
	
	var _Model = __webpack_require__(15);
	
	var _Model2 = _interopRequireDefault(_Model);
	
	var _Collection = __webpack_require__(16);
	
	var _Collection2 = _interopRequireDefault(_Collection);
	
	var _reducer = __webpack_require__(18);
	
	var _reducer2 = _interopRequireDefault(_reducer);
	
	var _controlFlow = __webpack_require__(14);
	
	var __flow = _interopRequireWildcard(_controlFlow);
	
	var _createReducer = __webpack_require__(17);
	
	var _createReducer2 = _interopRequireDefault(_createReducer);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Redbone = function () {
	  function Redbone() {
	    _classCallCheck(this, Redbone);
	  }
	
	  _createClass(Redbone, null, [{
	    key: 'initialize',
	    value: function initialize(store) {
	      _Bone2.default.initialize(store);
	    }
	  }, {
	    key: 'Model',
	    get: function get() {
	      return _Model2.default;
	    }
	  }, {
	    key: 'Collection',
	    get: function get() {
	      return _Collection2.default;
	    }
	  }]);
	
	  return Redbone;
	}();
	
	exports.default = Redbone;
	var reducer = exports.reducer = _reducer2.default;
	var flow = exports.flow = __flow;
	var createReducer = exports.createReducer = _createReducer2.default;

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
	
	var _createTypes = __webpack_require__(10);
	
	var _createTypes2 = _interopRequireDefault(_createTypes);
	
	var _sync = __webpack_require__(13);
	
	var _sync2 = _interopRequireDefault(_sync);
	
	var _controlFlow = __webpack_require__(14);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var __dispatch = void 0,
	    __getState = void 0;
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
	    value: function initialize(_ref) {
	      var dispatch = _ref.dispatch;
	      var getState = _ref.getState;
	
	      __dispatch = dispatch;
	      __getState = getState;
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
	    this.isNew = options.isNew ? !!options.isNew : true;
	    if (options.pid) {
	      if ((0, _isFunction2.default)(options.pid)) this.pid = options.pid.bind(this)();else this.pid = options.pid;
	    } else this.pid = 'redbonePid' + Bone.newPid;
	    (0, _createTypes2.default)(this, options.prefix, { SYNC: 'SYNC', CREATE: 'CREATE' });
	    this.actions = {
	      sync: __actionSync.bind(this)
	    };
	    if (!options.noFlow) {
	      (0, _controlFlow.set)(this);
	      this.dispatch({ type: this.TYPES.CREATE });
	    }
	  }
	
	  _createClass(Bone, [{
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
	    value: function reduce(state) {
	      return state;
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
	    if ((0, _isFunction2.default)(this.afterRequest)) {
	      this.afterRequest(method, data);
	    }
	  };
	
	  var error = function error(err) {
	    this.dispatch({ type: ERROR, err: err });
	    this.dispatch(actions.error(err));
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
	exports.get = exports.set = undefined;
	
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
	    type: type, className: className
	  };
	};
	
	var set = exports.set = function set(bone) {
	  __init(bone);
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

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Bone2 = __webpack_require__(2);
	
	var _Bone3 = _interopRequireDefault(_Bone2);
	
	var _isFunction = __webpack_require__(3);
	
	var _isFunction2 = _interopRequireDefault(_isFunction);
	
	var _isObject = __webpack_require__(4);
	
	var _isObject2 = _interopRequireDefault(_isObject);
	
	var _sync = __webpack_require__(13);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
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
	      return _sync.__methodMap;
	    }
	  }, {
	    key: 'TYPES',
	    get: function get() {
	      return {
	        SET: 'SET',
	        MARK_AS_CURRENT: 'MARK_AS_CURRENT'
	      };
	    }
	  }]);
	
	  function Model() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    _classCallCheck(this, Model);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Model).call(this, options));
	  }
	
	  _createClass(Model, [{
	    key: 'set',
	    value: function set(state) {
	      if ((0, _isFunction2.default)(this.beforeSet)) {
	        state = this.beforeSet(state);
	      }
	      this.dispatch({
	        type: this.TYPES.SET,
	        state: state
	      });
	    }
	  }, {
	    key: 'save',
	    value: function save(state) {
	      if ((0, _isObject2.default)(state)) {
	        this.set(state);
	      }
	      var type = 'create';
	      if (!this.isNew) type = 'update';
	      if ((0, _isFunction2.default)(this.beforeSave)) {
	        state = this.beforeSave(type);
	      }
	      this.dispatch(this.actions[type].requesting());
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
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Bone2 = __webpack_require__(2);
	
	var _Bone3 = _interopRequireDefault(_Bone2);
	
	var _isArray = __webpack_require__(12);
	
	var _isArray2 = _interopRequireDefault(_isArray);
	
	var _isFunction = __webpack_require__(3);
	
	var _isFunction2 = _interopRequireDefault(_isFunction);
	
	var _createReducer3 = __webpack_require__(17);
	
	var _createReducer4 = _interopRequireDefault(_createReducer3);
	
	var _getSyncActions = __webpack_require__(22);
	
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
	
	var __loadModel = function __loadModel(id /*,  current = true */) {
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
	
	    _this.url = options.url;
	    _this.parse = options.parse || null;
	    _this.idAttribute = options.idAttribute || null;
	    _this.innerAttribute = options.innerAttribute || null;
	    _this.addActions({
	      fetch: (0, _getSyncActions2.default)(_this, 'FETCH'),
	      model: {
	        load: (0, _getSyncActions2.default)(_this, 'LOAD_CURRENT_MODEL')
	      },
	      set: __actionSet.bind(_this)
	    });
	    _this.model = {};
	    _this.model.load = __loadModel.bind(_this);
	    return _this;
	  }
	
	  _createClass(Collection, [{
	    key: '__createReducer',
	    value: function __createReducer() {
	      var _this2 = this,
	          _createReducer2;
	
	      this.__reducer = (0, _createReducer4.default)((_createReducer2 = {}, _defineProperty(_createReducer2, this.TYPES.SYNC, function (state, action) {
	        return _extends({}, state, _this2.__parse(action.data));
	      }), _defineProperty(_createReducer2, this.TYPES.LOAD_CURRENT_MODEL_REQUESTED, function (state, action) {
	        console.log(action);
	        return _extends({}, state, {
	          currentModel: action.data
	        });
	      }), _createReducer2), __initialState);
	    }
	  }, {
	    key: 'reduce',
	    value: function reduce(state, action) {
	      if (!this.__reducer) this.__createReducer();
	      return this.__reducer(state, action);
	    }
	  }, {
	    key: 'fetch',
	    value: function fetch(data) {
	      this.sync('read', this.actions.fetch, { data: data });
	    }
	  }, {
	    key: '__parse',
	    value: function __parse(data) {
	      if ((0, _isFunction2.default)(this.parse)) return this.parse(data);
	      var id = this.idAttribute || 'id';
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
	        if (!model[id]) return;
	        models[model[id]] = model;
	        list.push(model[id]);
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
/* 17 */
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _processFlow = __webpack_require__(19);
	
	var _processFlow2 = _interopRequireDefault(_processFlow);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var __initialState = {
	  root: {}
	};
	
	var __redbonePx = '@@redbone';
	var __redbonePxLen = __redbonePx.length;
	
	var __parseFlowRule = /^@@redbone\/([a-z]+?)\/([a-z_0-9]+?)\/([a-z_0-9]+?)\/(.*)/i;
	
	var __reducer = function __reducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? __initialState : arguments[0];
	  var action = arguments[1];
	
	  if (action.type.slice(0, __redbonePxLen).toLowerCase() !== __redbonePx) return state;
	  var flowRule = action.type.match(__parseFlowRule);
	  if (!flowRule) return state;
	  var flow = {
	    action: flowRule[4],
	    pid: flowRule[3],
	    className: flowRule[2],
	    type: flowRule[1]
	  };
	  return (0, _processFlow2.default)(state, action, flow);
	};
	
	exports.default = __reducer;

/***/ },
/* 19 */
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
	
	var _createBone = __webpack_require__(20);
	
	var _createBone2 = _interopRequireDefault(_createBone);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var __processFlow = function __processFlow(state, action, flow) {
	  if (!flow) throw new _RedboneError2.default('Flow is not defined');
	  var bone = __flow.get(flow);
	  if (flow.action === 'CREATE') {
	    return (0, _createBone2.default)(state, flow, bone.constructor.initialState);
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _RedboneError = __webpack_require__(9);
	
	var _RedboneError2 = _interopRequireDefault(_RedboneError);
	
	var _nonFlow = __webpack_require__(21);
	
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
/* 21 */
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
/* 22 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var __getSyncActions = function __getSyncActions(context, PRE) {
	  var __requesting = function __requesting(data) {
	    return {
	      type: context.TYPES[PRE + '_REQUESTING'],
	      data: data
	    };
	  };
	  var __requested = function __requested(data) {
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

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyZTQ4N2IyYmQxM2RiNWVkMzdhNiIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0JvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc1BsYWluT2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzSG9zdE9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL1JlZGJvbmVFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvX19jcmVhdGVUeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovLy8uL2xpYi9fX3N5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL19fY29udHJvbEZsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL01vZGVsLmpzIiwid2VicGFjazovLy8uL2xpYi9Db2xsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL2xpYi9fX3JlZHVjZXJIZWxwZXJzL19fY3JlYXRlUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvX19yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2xpYi9fX3JlZHVjZXJIZWxwZXJzL19fcHJvY2Vzc0Zsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL19fcmVkdWNlckhlbHBlcnMvX19jcmVhdGVCb25lLmpzIiwid2VicGFjazovLy8uL2xpYi9fX3JlZHVjZXJIZWxwZXJzL19fbm9uRmxvdy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvX19nZXRTeW5jQWN0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0tBQVksTTs7QUFDWjs7Ozs7Ozs7OztLQUdNLE87Ozs7Ozs7Z0NBU2MsSyxFQUFPO0FBQ3ZCLHNCQUFLLFVBQUwsQ0FBZ0IsS0FBaEI7QUFDRDs7O3lCQVZrQjtBQUNqQjtBQUNEOzs7eUJBRXVCO0FBQ3RCO0FBQ0Q7Ozs7OzttQkFPWSxPO0FBRVIsS0FBTSw2Q0FBTjtBQUNBLEtBQU0sc0JBQU8sTUFBYjtBQUNBLEtBQU0sK0RBQU4sQzs7Ozs7Ozs7Ozs7Ozs7OztBQzFCUDs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLEtBQUksbUJBQUo7QUFBQSxLQUFnQixtQkFBaEI7QUFDQSxLQUFJLFlBQVksQ0FBaEI7O0FBRUEsS0FBTSxlQUFlLFNBQWYsWUFBZSxDQUFTLElBQVQsRUFBZTtBQUNsQyxVQUFPO0FBQ0wsV0FBTSxLQUFLLEtBQUwsQ0FBVyxJQURaO0FBRUw7QUFGSyxJQUFQO0FBSUQsRUFMRDs7S0FPTSxJOzs7c0NBQ29DO0FBQUEsV0FBckIsUUFBcUIsUUFBckIsUUFBcUI7QUFBQSxXQUFYLFFBQVcsUUFBWCxRQUFXOztBQUN0QyxvQkFBYSxRQUFiO0FBQ0Esb0JBQWEsUUFBYjtBQUNEOzs7eUJBRW1CO0FBQ2xCLGNBQU8sRUFBRSxTQUFUO0FBQ0Q7Ozt5QkFFb0M7QUFDbkMsY0FBTyxNQUFQO0FBQ0Q7Ozt5QkFFeUM7QUFDeEMsY0FBTyxFQUFQO0FBQ0Q7OztBQUVELG1CQUEwQjtBQUFBLFNBQWQsT0FBYyx5REFBSixFQUFJOztBQUFBOztBQUN4QixTQUFJLFFBQVEsSUFBUixJQUFnQiwwQkFBVyxRQUFRLElBQW5CLENBQXBCLEVBQThDO0FBQzVDLFlBQUssSUFBTCxHQUFZLFFBQVEsSUFBUixDQUFhLElBQWIsQ0FBa0IsSUFBbEIsQ0FBWjtBQUNELE1BRkQsTUFFTztBQUNMLFlBQUssSUFBTCxHQUFZLGVBQU8sSUFBUCxDQUFZLElBQVosQ0FBWjtBQUNEO0FBQ0QsVUFBSyxRQUFMLEdBQWdCLFVBQWhCO0FBQ0EsVUFBSyxRQUFMLEdBQWdCLFVBQWhCO0FBQ0EsVUFBSyxLQUFMLEdBQWMsUUFBUSxLQUFSLEdBQWdCLENBQUMsQ0FBQyxRQUFRLEtBQTFCLEdBQWtDLElBQWhEO0FBQ0EsU0FBSSxRQUFRLEdBQVosRUFBaUI7QUFDZixXQUFJLDBCQUFXLFFBQVEsR0FBbkIsQ0FBSixFQUE2QixLQUFLLEdBQUwsR0FBVyxRQUFRLEdBQVIsQ0FBWSxJQUFaLENBQWlCLElBQWpCLEdBQVgsQ0FBN0IsS0FDSyxLQUFLLEdBQUwsR0FBVyxRQUFRLEdBQW5CO0FBQ04sTUFIRCxNQUlLLEtBQUssR0FBTCxHQUFXLGVBQWUsS0FBSyxNQUEvQjtBQUNMLGdDQUFjLElBQWQsRUFBb0IsUUFBUSxNQUE1QixFQUFvQyxFQUFFLE1BQU0sTUFBUixFQUFnQixRQUFRLFFBQXhCLEVBQXBDO0FBQ0EsVUFBSyxPQUFMLEdBQWU7QUFDYixhQUFNLGFBQWEsSUFBYixDQUFrQixJQUFsQjtBQURPLE1BQWY7QUFHQSxTQUFJLENBQUMsUUFBUSxNQUFiLEVBQXFCO0FBQ25CLDZCQUFZLElBQVo7QUFDQSxZQUFLLFFBQUwsQ0FBYyxFQUFFLE1BQU0sS0FBSyxLQUFMLENBQVcsTUFBbkIsRUFBZDtBQUNEO0FBQ0Y7Ozs7OEJBRVEsSyxFQUEwQjtBQUFBOztBQUFBLFdBQW5CLFNBQW1CLHlEQUFQLEtBQU87O0FBQ2pDLFdBQUksQ0FBQyw2QkFBUyxLQUFULENBQUwsRUFBc0IsTUFBTSwyQkFBaUIsd0JBQWpCLENBQU47QUFDdEIsV0FBSSxTQUFKLEVBQWU7QUFDYixnQkFBTyxJQUFQLENBQVksS0FBWixFQUFtQixPQUFuQixDQUEyQixVQUFDLElBQUQsRUFBVTtBQUNuQyxpQkFBTSxJQUFOLElBQWMsTUFBSyxNQUFMLEdBQWMsTUFBTSxJQUFOLENBQTVCO0FBQ0QsVUFGRDtBQUdEO0FBQ0QsWUFBSyxLQUFMLGdCQUFrQixLQUFLLEtBQXZCLEVBQWlDLEtBQWpDO0FBQ0E7QUFDRDs7O2dDQUNVLE8sRUFBUztBQUNsQixZQUFLLE9BQUwsZ0JBQ0ssS0FBSyxPQURWLEVBRUssT0FGTDtBQUlEOzs7NEJBQ00sSyxFQUFPO0FBQ1osY0FBTyxLQUFQO0FBQ0Q7Ozs7OzttQkFHWSxJOzs7Ozs7QUNqRmY7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsY0FBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsRUFBRTtBQUNiLGNBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsY0FBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNyRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsRUFBRTtBQUNiLGNBQWEsWUFBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsY0FBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLEVBQUU7QUFDYixjQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBLHFCQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tDNUJNLFk7OztBQUNKLDJCQUFjO0FBQUE7O0FBQUEsNkZBQ0gsU0FERztBQUViOzs7R0FId0IsT0FBTyxLOzttQkFLbkIsWTs7Ozs7Ozs7Ozs7O0FDTGY7Ozs7QUFDQTs7Ozs7O0FBRUEsS0FBTSxnQkFBZ0IsU0FBaEIsYUFBZ0IsQ0FBQyxPQUFELEVBQVUsTUFBVixFQUFrQixRQUFsQixFQUErQjtBQUNuRCxPQUFNLFlBQVksUUFBUSxXQUFSLENBQW9CLHVCQUF0QztBQUNBLE9BQU0saUJBQWlCLFFBQVEsV0FBUixDQUFvQiw0QkFBM0M7QUFDQSxPQUFJLHdCQUFTLE1BQVQsQ0FBSixFQUFzQjtBQUNwQixhQUFRLE1BQVIsR0FBaUIsTUFBakI7QUFDRCxJQUZELE1BRU87QUFDTCxhQUFRLE1BQVIsR0FBaUIsZUFBZSxTQUFmLEdBQ2YsR0FEZSxHQUNULFFBQVEsV0FBUixDQUFvQixJQURYLEdBQ2tCLEdBRG5DO0FBRUQ7QUFDRCxPQUFJLFFBQVEsR0FBWixFQUFpQjtBQUNmLGFBQVEsTUFBUixJQUFrQixRQUFRLEdBQVIsR0FBYyxHQUFoQztBQUNEO0FBQ0QsT0FBSSxRQUFRLEVBQVo7QUFDQSxVQUFPLElBQVAsQ0FBWSxjQUFaLEVBQTRCLE9BQTVCLENBQW9DLFVBQUMsR0FBRCxFQUFTO0FBQzNDLFNBQU0sT0FBTyxJQUFJLFdBQUosS0FBb0IsR0FBakM7QUFDQSxXQUFNLE9BQU8sWUFBYixJQUE2QixRQUFRLE1BQVIsR0FBaUIsSUFBakIsR0FBd0IsWUFBckQ7QUFDQSxXQUFNLE9BQU8sV0FBYixJQUE0QixRQUFRLE1BQVIsR0FBaUIsSUFBakIsR0FBd0IsV0FBcEQ7QUFDQSxXQUFNLE9BQU8sT0FBYixJQUF3QixRQUFRLE1BQVIsR0FBaUIsSUFBakIsR0FBd0IsT0FBaEQ7QUFDRCxJQUxEO0FBTUEsV0FBUSxLQUFSLEdBQWdCLEtBQWhCO0FBQ0EsT0FBSSw2QkFBUyxRQUFULENBQUosRUFBd0I7QUFDdEIsYUFBUSxRQUFSLENBQWlCLFFBQWpCLEVBQTJCLElBQTNCO0FBQ0Q7QUFDRCxPQUFJLFFBQVEsV0FBUixDQUFvQixLQUF4QixFQUErQjtBQUM3QixhQUFRLFFBQVIsQ0FBaUIsUUFBUSxXQUFSLENBQW9CLEtBQXJDLEVBQTRDLElBQTVDO0FBQ0Q7QUFDRixFQTFCRDs7bUJBNEJlLGE7Ozs7OztBQy9CZjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLEVBQUU7QUFDYixjQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVTtBQUNWO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsY0FBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQzNCQTs7OztBQUNBOzs7Ozs7QUFFTyxLQUFNLG9DQUFjO0FBQ3pCLGFBQVUsTUFEZTtBQUV6QixhQUFVLEtBRmU7QUFHekIsWUFBUyxPQUhnQjtBQUl6QixhQUFVLFFBSmU7QUFLekIsV0FBUTtBQUxpQixFQUFwQjs7QUFRQSxLQUFNLDBCQUFTLGlCQUFmO0FBQ0EsS0FBTSxrQ0FBYSxTQUFTLFlBQTVCO0FBQ0EsS0FBTSxnQ0FBWSxTQUFTLFdBQTNCO0FBQ0EsS0FBTSx3QkFBUSxTQUFTLE9BQXZCOztBQUVQLEtBQU0sU0FBUyxTQUFULE1BQVMsQ0FBUyxNQUFULEVBQWlCLE9BQWpCLEVBQTBCLE9BQTFCLEVBQW1DO0FBQ2hELE9BQUksQ0FBQyxPQUFPLE1BQVosRUFBb0IsTUFBTSw0QkFBYSxvQkFBYixDQUFOO0FBQ3BCLE9BQU0sSUFBSSxPQUFPLE1BQWpCO0FBQ0EsV0FBUSxJQUFSLEdBQWdCLFFBQVEsSUFBUixLQUFpQixLQUFqQixHQUF5QixLQUF6QixHQUFpQyxJQUFqRDtBQUNBLE9BQU0sT0FBTyxZQUFZLE1BQVosQ0FBYjtBQUNBLE9BQUksWUFBSjtBQUNBLE9BQUksUUFBUSxHQUFaLEVBQWlCO0FBQ2YsV0FBTywwQkFBVyxRQUFRLEdBQW5CLElBQTBCLFFBQVEsR0FBUixDQUFZLElBQVosQ0FBaUIsSUFBakIsQ0FBMUIsR0FBbUQsUUFBUSxHQUFsRTtBQUNELElBRkQsTUFFTztBQUNMLFdBQU0sS0FBSyxHQUFYO0FBQ0EsU0FBSSxDQUFDLEtBQUssS0FBVixFQUFpQixPQUFPLEtBQUssRUFBWjtBQUNsQjtBQUNELE9BQUksT0FBTyxJQUFYO0FBQ0EsT0FBSSxRQUFRLElBQVosRUFBa0I7QUFDaEIsWUFBTyxRQUFRLElBQWY7QUFDRDtBQUNELE9BQUksY0FBYyxJQUFsQjtBQUNBLE9BQUksUUFBUSxTQUFTLEtBQWpCLElBQTBCLFNBQVMsS0FBdkMsRUFBOEM7QUFDNUMsWUFBTyxLQUFLLFNBQUwsQ0FBZSxJQUFmLENBQVA7QUFDQSxtQkFBYyxLQUFkO0FBQ0Q7QUFDRCxRQUFLLFFBQUwsQ0FBYyxFQUFFLE1BQU0sVUFBUixFQUFkO0FBQ0EsUUFBSyxRQUFMLENBQWMsUUFBUSxVQUFSLEVBQWQ7O0FBRUEsT0FBTSxVQUFVLFNBQVYsT0FBVSxDQUFTLElBQVQsRUFBZTtBQUM3QixVQUFLLEVBQUwsR0FBVSxLQUFLLEtBQUssV0FBVixLQUEwQixJQUFwQztBQUNBLFVBQUssS0FBTCxHQUFhLEtBQWI7QUFDQSxVQUFLLFFBQUwsQ0FBYyxFQUFFLE1BQU0sU0FBUixFQUFkO0FBQ0EsU0FBSSxRQUFRLElBQVosRUFBa0I7QUFDaEIsWUFBSyxRQUFMLENBQWMsUUFBUSxTQUFSLEVBQWQ7QUFDQSxZQUFLLFFBQUwsQ0FBYyxLQUFLLE9BQUwsQ0FBYSxJQUFiLENBQWtCLElBQWxCLENBQWQ7QUFDRCxNQUhELE1BR087QUFDTCxZQUFLLFFBQUwsQ0FBYyxRQUFRLFNBQVIsQ0FBa0IsSUFBbEIsQ0FBZDtBQUNEO0FBQ0QsU0FBSSwwQkFBVyxLQUFLLFlBQWhCLENBQUosRUFBbUM7QUFDakMsWUFBSyxZQUFMLENBQWtCLE1BQWxCLEVBQTBCLElBQTFCO0FBQ0Q7QUFDRixJQWJEOztBQWVBLE9BQU0sUUFBUSxTQUFSLEtBQVEsQ0FBUyxHQUFULEVBQWM7QUFDMUIsVUFBSyxRQUFMLENBQWMsRUFBRSxNQUFNLEtBQVIsRUFBZSxRQUFmLEVBQWQ7QUFDQSxVQUFLLFFBQUwsQ0FBYyxRQUFRLEtBQVIsQ0FBYyxHQUFkLENBQWQ7QUFDRCxJQUhEOztBQUtBLEtBQUUsSUFBRixDQUFPO0FBQ0wsZUFESztBQUVMLGFBRks7QUFHTCxlQUhLO0FBSUwsZUFBVSxNQUpMO0FBS0wsa0JBQWEsa0JBTFI7QUFNTCw2QkFOSztBQU9MLGNBQVMsUUFBUSxJQUFSLENBQWEsSUFBYixDQVBKO0FBUUwsWUFBTyxNQUFNLElBQU4sQ0FBVyxJQUFYO0FBUkYsSUFBUDtBQVVELEVBdEREOzttQkF3RGUsTTs7Ozs7Ozs7Ozs7OztBQ3hFZjs7Ozs7O0FBRUEsS0FBTSxnQkFBZ0IsRUFBdEI7O0FBRUEsS0FBTSxTQUFTLFNBQVQsTUFBUyxDQUFDLElBQUQsRUFBVTtBQUN2QixPQUFNLE9BQU8sS0FBSyxXQUFMLENBQWlCLHVCQUE5QjtBQUNBLE9BQU0sWUFBWSxLQUFLLFdBQUwsQ0FBaUIsSUFBbkM7QUFDQSxPQUFJLENBQUMsY0FBYyxJQUFkLENBQUwsRUFBMEI7QUFDeEIsbUJBQWMsSUFBZCxJQUFzQixFQUF0QjtBQUNEO0FBQ0QsT0FBSSxDQUFDLGNBQWMsSUFBZCxFQUFvQixTQUFwQixDQUFMLEVBQXFDO0FBQ25DLG1CQUFjLElBQWQsRUFBb0IsU0FBcEIsSUFBaUMsRUFBakM7QUFDRDtBQUNELE9BQUksQ0FBQyxjQUFjLElBQWQsRUFBb0IsU0FBcEIsRUFBK0IsS0FBSyxHQUFwQyxDQUFMLEVBQStDO0FBQzdDLG1CQUFjLElBQWQsRUFBb0IsU0FBcEIsRUFBK0IsS0FBSyxHQUFwQyxJQUEyQyxJQUEzQztBQUNELElBRkQsTUFFTztBQUNMLFdBQU0sMkJBQW9CLElBQXBCLFNBQTRCLFNBQTVCLFNBQXlDLEtBQUssR0FBOUMsd0JBQU47QUFDRDtBQUNELFVBQU87QUFDTCxlQURLLEVBQ0M7QUFERCxJQUFQO0FBR0QsRUFqQkQ7O0FBbUJPLEtBQU0sb0JBQU0sU0FBTixHQUFNLENBQUMsSUFBRCxFQUFVO0FBQzNCLFVBQU8sSUFBUDtBQUNELEVBRk07O0FBSUEsS0FBTSxvQkFBTSxTQUFOLEdBQU0sQ0FBQyxJQUFELEVBQVU7QUFDM0IsT0FBSSxJQUFKLEVBQVU7QUFBQSxTQUNELElBREMsR0FDdUIsSUFEdkIsQ0FDRCxJQURDO0FBQUEsU0FDSyxTQURMLEdBQ3VCLElBRHZCLENBQ0ssU0FETDtBQUFBLFNBQ2dCLEdBRGhCLEdBQ3VCLElBRHZCLENBQ2dCLEdBRGhCOztBQUVSLFNBQUksY0FBYyxJQUFkLEtBQ29CLGNBQWMsSUFBZCxFQUFvQixTQUFwQixDQURwQixJQUVvQixjQUFjLElBQWQsRUFBb0IsU0FBcEIsRUFBK0IsR0FBL0IsQ0FGeEIsRUFFNkQ7QUFDM0QsY0FBTyxjQUFjLElBQWQsRUFBb0IsU0FBcEIsRUFBK0IsR0FBL0IsQ0FBUDtBQUNEO0FBQ0QsWUFBTyxJQUFQO0FBQ0Q7QUFDRCxVQUFPLGFBQVA7QUFDRCxFQVhNLEM7Ozs7Ozs7Ozs7Ozs7O0FDM0JQOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0tBRU0sSzs7Ozs7eUJBQ2lDO0FBQ25DLGNBQU8sT0FBUDtBQUNEOzs7eUJBQ3lDO0FBQ3hDO0FBQ0Q7Ozt5QkFDa0I7QUFDakIsY0FBTztBQUNMLGNBQUssS0FEQTtBQUVMLDBCQUFpQjtBQUZaLFFBQVA7QUFJRDs7O0FBQ0Qsb0JBQTBCO0FBQUEsU0FBZCxPQUFjLHlEQUFKLEVBQUk7O0FBQUE7O0FBQUEscUZBQ2xCLE9BRGtCO0FBRXpCOzs7O3lCQUVHLEssRUFBTztBQUNULFdBQUksMEJBQVcsS0FBSyxTQUFoQixDQUFKLEVBQWdDO0FBQzlCLGlCQUFRLEtBQUssU0FBTCxDQUFlLEtBQWYsQ0FBUjtBQUNEO0FBQ0QsWUFBSyxRQUFMLENBQWM7QUFDWixlQUFNLEtBQUssS0FBTCxDQUFXLEdBREw7QUFFWjtBQUZZLFFBQWQ7QUFJRDs7OzBCQUVJLEssRUFBTztBQUNWLFdBQUksd0JBQVMsS0FBVCxDQUFKLEVBQXFCO0FBQ25CLGNBQUssR0FBTCxDQUFTLEtBQVQ7QUFDRDtBQUNELFdBQUksT0FBTyxRQUFYO0FBQ0EsV0FBSSxDQUFDLEtBQUssS0FBVixFQUFpQixPQUFPLFFBQVA7QUFDakIsV0FBSSwwQkFBVyxLQUFLLFVBQWhCLENBQUosRUFBaUM7QUFDL0IsaUJBQVEsS0FBSyxVQUFMLENBQWdCLElBQWhCLENBQVI7QUFDRDtBQUNELFlBQUssUUFBTCxDQUFjLEtBQUssT0FBTCxDQUFhLElBQWIsRUFBbUIsVUFBbkIsRUFBZDtBQUNEOzs7Ozs7bUJBR1ksSzs7Ozs7Ozs7Ozs7Ozs7OztBQzdDZjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLEtBQU0sTUFBTSxLQUFaO0FBQ0EsS0FBTSxZQUFZLFdBQWxCOztBQUVBLEtBQU0sY0FBYyxTQUFkLFdBQWMsQ0FBUyxLQUFULEVBQStCO0FBQUEsT0FBZixLQUFlLHlEQUFQLEtBQU87O0FBQ2pELFVBQU87QUFDTCxXQUFNLEtBQUssS0FBTCxDQUFXLEdBRFo7QUFFTCxpQkFGSyxFQUVFO0FBRkYsSUFBUDtBQUlELEVBTEQ7O0FBT0EsS0FBTSxpQkFBaUI7QUFDckIsV0FBUSxFQURhO0FBRXJCLFNBQU0sRUFGZTtBQUdyQixpQkFBYztBQUhPLEVBQXZCOztBQU1BLEtBQU0sY0FBYyxTQUFkLFdBQWMsQ0FBUyxFLHVCQUFULEVBQW1DO0FBQ3JELFFBQUssSUFBTCxDQUFVLE1BQVYsRUFBa0IsS0FBSyxPQUFMLENBQWEsS0FBYixDQUFtQixJQUFyQyxFQUEyQyxFQUFFLEtBQUssS0FBSyxHQUFMLEdBQVcsRUFBbEIsRUFBc0IsTUFBTSxLQUE1QixFQUEzQztBQUNELEVBRkQ7O0tBSU0sVTs7Ozs7eUJBQ2lDO0FBQ25DLGNBQU8sWUFBUDtBQUNEOzs7eUJBQ3lDO0FBQ3hDLGNBQU87QUFDTCxnQkFBTyxPQURGO0FBRUwsNkJBQW9CLG9CQUZmO0FBR0wsdUJBQWMsY0FIVDtBQUlMLDZCQUFvQjtBQUpmLFFBQVA7QUFNRDs7O3lCQUVrQjtBQUNqQixjQUFPO0FBQ0wsaUJBREs7QUFFTDtBQUZLLFFBQVA7QUFJRDs7O3lCQUV5QjtBQUN4QixjQUFPLGNBQVA7QUFDRDs7O0FBRUQseUJBQTBCO0FBQUEsU0FBZCxPQUFjLHlEQUFKLEVBQUk7O0FBQUE7O0FBQUEsK0ZBQ2xCLE9BRGtCOztBQUV4QixXQUFLLEdBQUwsR0FBVyxRQUFRLEdBQW5CO0FBQ0EsV0FBSyxLQUFMLEdBQWEsUUFBUSxLQUFSLElBQWlCLElBQTlCO0FBQ0EsV0FBSyxXQUFMLEdBQW1CLFFBQVEsV0FBUixJQUF1QixJQUExQztBQUNBLFdBQUssY0FBTCxHQUFzQixRQUFRLGNBQVIsSUFBMEIsSUFBaEQ7QUFDQSxXQUFLLFVBQUwsQ0FBZ0I7QUFDZCxjQUFPLHFDQUF1QixPQUF2QixDQURPO0FBRWQsY0FBTztBQUNMLGVBQU0scUNBQXVCLG9CQUF2QjtBQURELFFBRk87QUFLZCxZQUFLLFlBQVksSUFBWjtBQUxTLE1BQWhCO0FBT0EsV0FBSyxLQUFMLEdBQWEsRUFBYjtBQUNBLFdBQUssS0FBTCxDQUFXLElBQVgsR0FBa0IsWUFBWSxJQUFaLE9BQWxCO0FBZHdCO0FBZXpCOzs7O3VDQUVpQjtBQUFBO0FBQUE7O0FBQ2hCLFlBQUssU0FBTCxHQUFpQixxRkFDZCxLQUFLLEtBQUwsQ0FBVyxJQURHLEVBQ0ksVUFBQyxLQUFELEVBQVEsTUFBUixFQUFtQjtBQUNwQyw2QkFDSyxLQURMLEVBRUssT0FBSyxPQUFMLENBQWEsT0FBTyxJQUFwQixDQUZMO0FBSUQsUUFOYyxvQ0FPZCxLQUFLLEtBQUwsQ0FBVyw0QkFQRyxFQU80QixVQUFDLEtBQUQsRUFBUSxNQUFSLEVBQW1CO0FBQzVELGlCQUFRLEdBQVIsQ0FBWSxNQUFaO0FBQ0EsNkJBQ0ssS0FETDtBQUVFLHlCQUFjLE9BQU87QUFGdkI7QUFJRCxRQWJjLHFCQWNkLGNBZGMsQ0FBakI7QUFlRDs7OzRCQUVNLEssRUFBTyxNLEVBQVE7QUFDcEIsV0FBSSxDQUFDLEtBQUssU0FBVixFQUFxQixLQUFLLGVBQUw7QUFDckIsY0FBTyxLQUFLLFNBQUwsQ0FBZSxLQUFmLEVBQXNCLE1BQXRCLENBQVA7QUFDRDs7OzJCQUVLLEksRUFBTTtBQUNWLFlBQUssSUFBTCxDQUFVLE1BQVYsRUFBa0IsS0FBSyxPQUFMLENBQWEsS0FBL0IsRUFBc0MsRUFBQyxVQUFELEVBQXRDO0FBQ0Q7Ozs2QkFFTyxJLEVBQU07QUFDWixXQUFJLDBCQUFXLEtBQUssS0FBaEIsQ0FBSixFQUE0QixPQUFPLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBUDtBQUM1QixXQUFNLEtBQUssS0FBSyxXQUFMLElBQW9CLElBQS9CO0FBQ0EsV0FBSSxLQUFLLGNBQUwsSUFBdUIsSUFBM0IsRUFBaUM7QUFDL0IsZ0JBQU8sS0FBSyxLQUFLLGNBQVYsQ0FBUDtBQUNEO0FBQ0QsV0FBTSxTQUFTLEVBQWY7QUFDQSxXQUFNLE9BQU8sRUFBYjtBQUNBLFdBQUksQ0FBQyx1QkFBUSxJQUFSLENBQUwsRUFBb0I7QUFDbEIsZ0JBQU87QUFDTCx5QkFESztBQUVMO0FBRkssVUFBUDtBQUlEO0FBQ0QsWUFBSyxPQUFMLENBQWEsVUFBQyxLQUFELEVBQVc7QUFDdEIsYUFBSSxDQUFDLE1BQU0sRUFBTixDQUFMLEVBQWdCO0FBQ2hCLGdCQUFPLE1BQU0sRUFBTixDQUFQLElBQW9CLEtBQXBCO0FBQ0EsY0FBSyxJQUFMLENBQVUsTUFBTSxFQUFOLENBQVY7QUFDRCxRQUpEO0FBS0EsY0FBTztBQUNMLHVCQURLO0FBRUw7QUFGSyxRQUFQO0FBSUQ7Ozs7OzttQkFHWSxVOzs7Ozs7Ozs7Ozs7QUN4SGY7Ozs7QUFDQTs7Ozs7O0FBRUEsS0FBTSxrQkFBa0IsU0FBbEIsZUFBa0IsQ0FBQyxRQUFELEVBQXdEO0FBQUEsT0FBN0MsWUFBNkMseURBQTlCLElBQThCO0FBQUEsT0FBeEIsWUFBd0IseURBQVQsSUFBUzs7QUFDOUUsVUFBTyxZQUF1QztBQUFBLFNBQTlCLEtBQThCLHlEQUF0QixZQUFzQjtBQUFBLFNBQVIsTUFBUTs7QUFDNUMsU0FBSSxZQUFZLEtBQWhCO0FBQ0EsU0FBSSxTQUFTLE9BQU8sSUFBaEIsQ0FBSixFQUEyQjtBQUN6QixXQUFJLENBQUMsMEJBQVcsU0FBUyxPQUFPLElBQWhCLENBQVgsQ0FBTCxFQUF3QztBQUN0QyxlQUFNLDJCQUFpQiwwQ0FBakIsQ0FBTjtBQUNEO0FBQ0QsbUJBQVksU0FBUyxPQUFPLElBQWhCLEVBQXNCLEtBQXRCLEVBQTZCLE1BQTdCLENBQVo7QUFDRDtBQUNELFNBQUksMEJBQVcsWUFBWCxDQUFKLEVBQThCO0FBQzVCLGNBQU8sYUFBYSxLQUFiLEVBQW9CLFNBQXBCLEVBQStCLE1BQS9CLENBQVA7QUFDRDtBQUNELFlBQU8sU0FBUDtBQUNELElBWkQ7QUFhRCxFQWREOzttQkFnQmUsZTs7Ozs7Ozs7Ozs7O0FDbkJmOzs7Ozs7QUFFQSxLQUFNLGlCQUFpQjtBQUNyQixTQUFNO0FBRGUsRUFBdkI7O0FBSUEsS0FBTSxjQUFjLFdBQXBCO0FBQ0EsS0FBTSxpQkFBaUIsWUFBWSxNQUFuQzs7QUFFQSxLQUFNLGtCQUFrQiw0REFBeEI7O0FBRUEsS0FBTSxZQUFZLFNBQVosU0FBWSxHQUFvQztBQUFBLE9BQW5DLEtBQW1DLHlEQUEzQixjQUEyQjtBQUFBLE9BQVgsTUFBVzs7QUFDcEQsT0FBSSxPQUFPLElBQVAsQ0FBWSxLQUFaLENBQWtCLENBQWxCLEVBQXFCLGNBQXJCLEVBQXFDLFdBQXJDLE9BQXVELFdBQTNELEVBQXdFLE9BQU8sS0FBUDtBQUN4RSxPQUFNLFdBQVcsT0FBTyxJQUFQLENBQVksS0FBWixDQUFrQixlQUFsQixDQUFqQjtBQUNBLE9BQUksQ0FBQyxRQUFMLEVBQWUsT0FBTyxLQUFQO0FBQ2YsT0FBTSxPQUFPO0FBQ1gsYUFBUSxTQUFTLENBQVQsQ0FERztBQUVYLFVBQUssU0FBUyxDQUFULENBRk07QUFHWCxnQkFBVyxTQUFTLENBQVQsQ0FIQTtBQUlYLFdBQU0sU0FBUyxDQUFUO0FBSkssSUFBYjtBQU1BLFVBQU8sMkJBQWMsS0FBZCxFQUFxQixNQUFyQixFQUE2QixJQUE3QixDQUFQO0FBQ0QsRUFYRDs7bUJBYWUsUzs7Ozs7Ozs7Ozs7Ozs7QUN4QmY7Ozs7QUFDQTs7S0FBWSxNOztBQUNaOzs7Ozs7Ozs7O0FBRUEsS0FBTSxnQkFBZ0IsU0FBaEIsYUFBZ0IsQ0FBQyxLQUFELEVBQVEsTUFBUixFQUFnQixJQUFoQixFQUF5QjtBQUM3QyxPQUFJLENBQUMsSUFBTCxFQUFXLE1BQU0sMkJBQWlCLHFCQUFqQixDQUFOO0FBQ1gsT0FBTSxPQUFPLE9BQU8sR0FBUCxDQUFXLElBQVgsQ0FBYjtBQUNBLE9BQUksS0FBSyxNQUFMLEtBQWdCLFFBQXBCLEVBQThCO0FBQzVCLFlBQU8sMEJBQWEsS0FBYixFQUFvQixJQUFwQixFQUEwQixLQUFLLFdBQUwsQ0FBaUIsWUFBM0MsQ0FBUDtBQUNEO0FBQ0QsT0FBSSxDQUFDLElBQUwsRUFBVyxPQUFPLEtBQVA7O0FBRVgsT0FBSSxDQUFDLEtBQUssS0FBTCxDQUFXLEtBQUssTUFBaEIsQ0FBTCxFQUE4QixPQUFPLEtBQVA7Ozs7O0FBSzlCLE9BQU0sWUFBWSxNQUFNLEtBQUssSUFBWCxFQUFpQixLQUFLLFNBQXRCLEVBQWlDLEtBQUssR0FBdEMsQ0FBbEI7O0FBRUEsdUJBQ0ssS0FETCxzQkFFRyxLQUFLLElBRlIsZUFHTyxNQUFNLEtBQUssSUFBWCxDQUhQLHNCQUlLLEtBQUssU0FKVixlQUtTLE1BQU0sS0FBSyxJQUFYLEVBQWlCLEtBQUssU0FBdEIsQ0FMVCxzQkFNTyxLQUFLLEdBTlosRUFNa0IsS0FBSyxNQUFMLENBQVksU0FBWixFQUF1QixNQUF2QixDQU5sQjtBQVVELEVBekJEOzttQkEyQmUsYTs7Ozs7Ozs7Ozs7O0FDL0JmOzs7O0FBQ0E7Ozs7QUFFQSxLQUFNLGVBQWUsU0FBZixZQUFlLENBQUMsS0FBRCxFQUFRLElBQVIsRUFBYyxZQUFkLEVBQStCO0FBQ2xELE9BQUksQ0FBQyxNQUFNLEtBQUssSUFBWCxDQUFMLEVBQXVCO0FBQ3JCLFlBQU8sNEJBQWMsS0FBZCxFQUFxQixJQUFyQixFQUEyQixZQUEzQixDQUFQO0FBQ0Q7QUFDRCxPQUFJLENBQUMsTUFBTSxLQUFLLElBQVgsRUFBaUIsS0FBSyxTQUF0QixDQUFMLEVBQXVDO0FBQ3JDLFlBQU8sNkJBQWUsS0FBZixFQUFzQixJQUF0QixFQUE0QixZQUE1QixDQUFQO0FBQ0Q7QUFDRCxPQUFJLENBQUMsTUFBTSxLQUFLLElBQVgsRUFBaUIsS0FBSyxTQUF0QixFQUFpQyxLQUFLLEdBQXRDLENBQUwsRUFBaUQ7QUFDL0MsWUFBTywyQkFBYSxLQUFiLEVBQW9CLElBQXBCLEVBQTBCLFlBQTFCLENBQVA7QUFDRCxJQUZELE1BRU8sTUFBTSwyQkFBb0IsS0FBSyxJQUF6QixTQUFpQyxLQUFLLFNBQXRDLFNBQW1ELEtBQUssR0FBeEQsdUJBQU47QUFDUixFQVZEOzttQkFZZSxZOzs7Ozs7Ozs7Ozs7Ozs7O0FDZlIsS0FBTSx3Q0FBZ0IsU0FBaEIsYUFBZ0IsQ0FBQyxLQUFELFFBQXNEO0FBQUEsT0FBN0MsSUFBNkMsUUFBN0MsSUFBNkM7QUFBQSxPQUF2QyxTQUF1QyxRQUF2QyxTQUF1QztBQUFBLE9BQTVCLEdBQTRCLFFBQTVCLEdBQTRCO0FBQUEsT0FBdEIsWUFBc0IseURBQVAsRUFBTzs7QUFDakYsdUJBQ0ssS0FETCxzQkFFRyxJQUZILHNCQUdLLFNBSEwsc0JBSU8sR0FKUCxFQUlhLFlBSmI7QUFRRCxFQVRNOztBQVdBLEtBQU0sMENBQWlCLFNBQWpCLGNBQWlCLENBQUMsS0FBRCxTQUFzRDtBQUFBLE9BQTdDLElBQTZDLFNBQTdDLElBQTZDO0FBQUEsT0FBdkMsU0FBdUMsU0FBdkMsU0FBdUM7QUFBQSxPQUE1QixHQUE0QixTQUE1QixHQUE0QjtBQUFBLE9BQXRCLFlBQXNCLHlEQUFQLEVBQU87O0FBQ2xGLHVCQUNLLEtBREwsc0JBRUcsSUFGSCxlQUdPLE1BQU0sSUFBTixDQUhQLHNCQUlLLFNBSkwsc0JBS08sR0FMUCxFQUthLFlBTGI7QUFTRCxFQVZNOztBQVlBLEtBQU0sc0NBQWUsU0FBZixZQUFlLENBQUMsS0FBRCxTQUFzRDtBQUFBLE9BQTdDLElBQTZDLFNBQTdDLElBQTZDO0FBQUEsT0FBdkMsU0FBdUMsU0FBdkMsU0FBdUM7QUFBQSxPQUE1QixHQUE0QixTQUE1QixHQUE0QjtBQUFBLE9BQXRCLFlBQXNCLHlEQUFQLEVBQU87O0FBQ2hGLHVCQUNLLEtBREwsc0JBRUcsSUFGSCxlQUdPLE1BQU0sSUFBTixDQUhQLHNCQUlLLFNBSkwsZUFLUyxNQUFNLElBQU4sRUFBWSxTQUFaLENBTFQsc0JBTU8sR0FOUCxFQU1hLFlBTmI7QUFVRCxFQVhNLEM7Ozs7Ozs7Ozs7O0FDdkJQLEtBQU0sbUJBQW1CLFNBQW5CLGdCQUFtQixDQUFTLE9BQVQsRUFBa0IsR0FBbEIsRUFBdUI7QUFDOUMsT0FBTSxlQUFlLFNBQWYsWUFBZSxDQUFTLElBQVQsRUFBZTtBQUNsQyxZQUFPO0FBQ0wsYUFBTSxRQUFRLEtBQVIsQ0FBYyxNQUFNLGFBQXBCLENBREQ7QUFFTDtBQUZLLE1BQVA7QUFJRCxJQUxEO0FBTUEsT0FBTSxjQUFjLFNBQWQsV0FBYyxDQUFTLElBQVQsRUFBZTtBQUNqQyxZQUFPO0FBQ0wsYUFBTSxRQUFRLEtBQVIsQ0FBYyxNQUFNLFlBQXBCLENBREQ7QUFFTDtBQUZLLE1BQVA7QUFJRCxJQUxEO0FBTUEsT0FBTSxVQUFVLFNBQVYsT0FBVSxDQUFTLEdBQVQsRUFBYztBQUM1QixZQUFPO0FBQ0wsYUFBTSxRQUFRLEtBQVIsQ0FBYyxNQUFNLFFBQXBCLENBREQ7QUFFTDtBQUZLLE1BQVA7QUFJRCxJQUxEO0FBTUEsVUFBTztBQUNMLGlCQUFZLFlBRFA7QUFFTCxnQkFBVyxXQUZOO0FBR0wsWUFBTztBQUhGLElBQVA7QUFLRCxFQXhCRDs7bUJBMEJlLGdCIiwiZmlsZSI6ImluZGV4LmpzPzJlNDg3YjJiZDEzZGI1ZWQzN2E2Iiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMmU0ODdiMmJkMTNkYjVlZDM3YTZcbiAqKi8iLCJpbXBvcnQgQm9uZSBmcm9tICcuL0JvbmUnO1xuaW1wb3J0IE1vZGVsIGZyb20gJy4vTW9kZWwnO1xuaW1wb3J0IENvbGxlY3Rpb24gZnJvbSAnLi9Db2xsZWN0aW9uJztcbmltcG9ydCBfX3JlZHVjZXIgZnJvbSAnLi9fX3JlZHVjZXInO1xuaW1wb3J0ICogYXMgX19mbG93IGZyb20gJy4vX19jb250cm9sRmxvdyc7XG5pbXBvcnQgX19jcmVhdGVSZWR1Y2VyIGZyb20gJy4vX19yZWR1Y2VySGVscGVycy9fX2NyZWF0ZVJlZHVjZXInO1xuXG5cbmNsYXNzIFJlZGJvbmUge1xuICBzdGF0aWMgZ2V0IE1vZGVsKCkge1xuICAgIHJldHVybiBNb2RlbDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgQ29sbGVjdGlvbigpIHtcbiAgICByZXR1cm4gQ29sbGVjdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBpbml0aWFsaXplKHN0b3JlKSB7XG4gICAgQm9uZS5pbml0aWFsaXplKHN0b3JlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWRib25lO1xuXG5leHBvcnQgY29uc3QgcmVkdWNlciA9IF9fcmVkdWNlcjtcbmV4cG9ydCBjb25zdCBmbG93ID0gX19mbG93O1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVJlZHVjZXIgPSBfX2NyZWF0ZVJlZHVjZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2xpYi9pbmRleC5qc1xuICoqLyIsImltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJ2xvZGFzaC9pc0Z1bmN0aW9uJztcbmltcG9ydCBpc09iamVjdCBmcm9tICdsb2Rhc2gvaXNQbGFpbk9iamVjdCc7XG5pbXBvcnQgUmVkYm9uZUVycm9yIGZyb20gJy4vUmVkYm9uZUVycm9yJztcblxuaW1wb3J0IF9fY3JlYXRlVHlwZXMgZnJvbSAnLi9fX2NyZWF0ZVR5cGVzJztcbmltcG9ydCBfX3N5bmMgZnJvbSAnLi9fX3N5bmMnO1xuaW1wb3J0IHtzZXQgYXMgX19hZGRUb0Zsb3d9IGZyb20gJy4vX19jb250cm9sRmxvdyc7XG5cbmxldCBfX2Rpc3BhdGNoLCBfX2dldFN0YXRlO1xubGV0IF9fbGFzdFBpZCA9IDA7XG5cbmNvbnN0IF9fYWN0aW9uU3luYyA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0aGlzLlRZUEVTLlNZTkMsXG4gICAgZGF0YVxuICB9XG59XG5cbmNsYXNzIEJvbmUge1xuICBzdGF0aWMgaW5pdGlhbGl6ZSh7ZGlzcGF0Y2gsIGdldFN0YXRlfSkge1xuICAgIF9fZGlzcGF0Y2ggPSBkaXNwYXRjaDtcbiAgICBfX2dldFN0YXRlID0gZ2V0U3RhdGU7XG4gIH1cblxuICBzdGF0aWMgZ2V0IG5ld1BpZCgpIHtcbiAgICByZXR1cm4gKytfX2xhc3RQaWQ7XG4gIH1cblxuICBzdGF0aWMgZ2V0IF9fZGFuZ2VyRG9udFVzZVRoaXNUeXBlKCkge1xuICAgIHJldHVybiAncm9vdCdcbiAgfVxuXG4gIHN0YXRpYyBnZXQgX19kYW5nZXJEb250VXNlVGhpc1R5cGVzTGlzdCgpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICBpZiAob3B0aW9ucy5zeW5jICYmIGlzRnVuY3Rpb24ob3B0aW9ucy5zeW5jKSkge1xuICAgICAgdGhpcy5zeW5jID0gb3B0aW9ucy5zeW5jLmJpbmQodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3luYyA9IF9fc3luYy5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICB0aGlzLmRpc3BhdGNoID0gX19kaXNwYXRjaDtcbiAgICB0aGlzLmdldFN0YXRlID0gX19nZXRTdGF0ZTtcbiAgICB0aGlzLmlzTmV3ID0gKG9wdGlvbnMuaXNOZXcgPyAhIW9wdGlvbnMuaXNOZXcgOiB0cnVlKTtcbiAgICBpZiAob3B0aW9ucy5waWQpIHtcbiAgICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMucGlkKSkgdGhpcy5waWQgPSBvcHRpb25zLnBpZC5iaW5kKHRoaXMpKCk7XG4gICAgICBlbHNlIHRoaXMucGlkID0gb3B0aW9ucy5waWQ7XG4gICAgfVxuICAgIGVsc2UgdGhpcy5waWQgPSAncmVkYm9uZVBpZCcgKyBCb25lLm5ld1BpZDtcbiAgICBfX2NyZWF0ZVR5cGVzKHRoaXMsIG9wdGlvbnMucHJlZml4LCB7IFNZTkM6ICdTWU5DJywgQ1JFQVRFOiAnQ1JFQVRFJyB9KTtcbiAgICB0aGlzLmFjdGlvbnMgPSB7XG4gICAgICBzeW5jOiBfX2FjdGlvblN5bmMuYmluZCh0aGlzKVxuICAgIH1cbiAgICBpZiAoIW9wdGlvbnMubm9GbG93KSB7XG4gICAgICBfX2FkZFRvRmxvdyh0aGlzKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2goeyB0eXBlOiB0aGlzLlRZUEVTLkNSRUFURSB9KTtcbiAgICB9XG4gIH1cblxuICBhZGRUeXBlcyh0eXBlcywgYWRkUHJlZml4ID0gZmFsc2UpIHtcbiAgICBpZiAoIWlzT2JqZWN0KHR5cGVzKSkgdGhyb3cgbmV3IFJlZGJvbmVFcnJvcignVHlwZXMgaXMgbm90IGFuIG9iamVjdCcpO1xuICAgIGlmIChhZGRQcmVmaXgpIHtcbiAgICAgIE9iamVjdC5rZXlzKHR5cGVzKS5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgIHR5cGVzW3R5cGVdID0gdGhpcy5QUkVGSVggKyB0eXBlc1t0eXBlXTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLlRZUEVTID0geyAuLi50aGlzLlRZUEVTLCAuLi50eXBlcyB9XG4gICAgcmV0dXJuO1xuICB9XG4gIGFkZEFjdGlvbnMoYWN0aW9ucykge1xuICAgIHRoaXMuYWN0aW9ucyA9IHtcbiAgICAgIC4uLnRoaXMuYWN0aW9ucyxcbiAgICAgIC4uLmFjdGlvbnNcbiAgICB9XG4gIH1cbiAgcmVkdWNlKHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvbmU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2xpYi9Cb25lLmpzXG4gKiovIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGNvcnJlY3RseSBjbGFzc2lmaWVkLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOCB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheSBhbmQgd2VhayBtYXAgY29uc3RydWN0b3JzLFxuICAvLyBhbmQgUGhhbnRvbUpTIDEuOSB3aGljaCByZXR1cm5zICdmdW5jdGlvbicgZm9yIGBOb2RlTGlzdGAgaW5zdGFuY2VzLlxuICB2YXIgdGFnID0gaXNPYmplY3QodmFsdWUpID8gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pc0Z1bmN0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaXNPYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZ2V0UHJvdG90eXBlID0gcmVxdWlyZSgnLi9fZ2V0UHJvdG90eXBlJyksXG4gICAgaXNIb3N0T2JqZWN0ID0gcmVxdWlyZSgnLi9faXNIb3N0T2JqZWN0JyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBpbmZlciB0aGUgYE9iamVjdGAgY29uc3RydWN0b3IuICovXG52YXIgb2JqZWN0Q3RvclN0cmluZyA9IGZ1bmNUb1N0cmluZy5jYWxsKE9iamVjdCk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LCB0aGF0IGlzLCBhbiBvYmplY3QgY3JlYXRlZCBieSB0aGVcbiAqIGBPYmplY3RgIGNvbnN0cnVjdG9yIG9yIG9uZSB3aXRoIGEgYFtbUHJvdG90eXBlXV1gIG9mIGBudWxsYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuOC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqIH1cbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QobmV3IEZvbyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoeyAneCc6IDAsICd5JzogMCB9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoT2JqZWN0LmNyZWF0ZShudWxsKSk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdExpa2UodmFsdWUpIHx8XG4gICAgICBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSAhPSBvYmplY3RUYWcgfHwgaXNIb3N0T2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcHJvdG8gPSBnZXRQcm90b3R5cGUodmFsdWUpO1xuICBpZiAocHJvdG8gPT09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgQ3RvciA9IGhhc093blByb3BlcnR5LmNhbGwocHJvdG8sICdjb25zdHJ1Y3RvcicpICYmIHByb3RvLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiZcbiAgICBDdG9yIGluc3RhbmNlb2YgQ3RvciAmJiBmdW5jVG9TdHJpbmcuY2FsbChDdG9yKSA9PSBvYmplY3RDdG9yU3RyaW5nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1BsYWluT2JqZWN0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2lzUGxhaW5PYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0UHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG4vKipcbiAqIEdldHMgdGhlIGBbW1Byb3RvdHlwZV1dYCBvZiBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtudWxsfE9iamVjdH0gUmV0dXJucyB0aGUgYFtbUHJvdG90eXBlXV1gLlxuICovXG5mdW5jdGlvbiBnZXRQcm90b3R5cGUodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZUdldFByb3RvdHlwZShPYmplY3QodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRQcm90b3R5cGU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvX2dldFByb3RvdHlwZS5qc1xuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBob3N0IG9iamVjdCBpbiBJRSA8IDkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBob3N0IG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0hvc3RPYmplY3QodmFsdWUpIHtcbiAgLy8gTWFueSBob3N0IG9iamVjdHMgYXJlIGBPYmplY3RgIG9iamVjdHMgdGhhdCBjYW4gY29lcmNlIHRvIHN0cmluZ3NcbiAgLy8gZGVzcGl0ZSBoYXZpbmcgaW1wcm9wZXJseSBkZWZpbmVkIGB0b1N0cmluZ2AgbWV0aG9kcy5cbiAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICBpZiAodmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUudG9TdHJpbmcgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSAhISh2YWx1ZSArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNIb3N0T2JqZWN0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL19pc0hvc3RPYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiY2xhc3MgUmVkYm9uZUVycm9yIGV4dGVuZHMgd2luZG93LkVycm9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUmVkYm9uZUVycm9yO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9saWIvUmVkYm9uZUVycm9yLmpzXG4gKiovIiwiaW1wb3J0IGlzU3RyaW5nIGZyb20gJ2xvZGFzaC9pc1N0cmluZyc7XG5pbXBvcnQgaXNPYmplY3QgZnJvbSAnbG9kYXNoL2lzUGxhaW5PYmplY3QnO1xuXG5jb25zdCBfX2NyZWF0ZVR5cGVzID0gKGNvbnRleHQsIHByZWZpeCwgdHlwZXNBZGQpID0+IHtcbiAgY29uc3QgY2xhc3NUeXBlID0gY29udGV4dC5jb25zdHJ1Y3Rvci5fX2RhbmdlckRvbnRVc2VUaGlzVHlwZTtcbiAgY29uc3QgY2xhc3NUeXBlc0xpc3QgPSBjb250ZXh0LmNvbnN0cnVjdG9yLl9fZGFuZ2VyRG9udFVzZVRoaXNUeXBlc0xpc3Q7XG4gIGlmIChpc1N0cmluZyhwcmVmaXgpKSB7XG4gICAgY29udGV4dC5QUkVGSVggPSBwcmVmaXg7XG4gIH0gZWxzZSB7XG4gICAgY29udGV4dC5QUkVGSVggPSAnQEBSZWRib25lLycgKyBjbGFzc1R5cGUgK1xuICAgICAgJy8nICsgY29udGV4dC5jb25zdHJ1Y3Rvci5uYW1lICsgJy8nO1xuICB9XG4gIGlmIChjb250ZXh0LnBpZCkge1xuICAgIGNvbnRleHQuUFJFRklYICs9IGNvbnRleHQucGlkICsgJy8nO1xuICB9XG4gIGxldCB0eXBlcyA9IHt9O1xuICBPYmplY3Qua2V5cyhjbGFzc1R5cGVzTGlzdCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgY29uc3QgdHlwZSA9IGtleS50b1VwcGVyQ2FzZSgpICsgJ18nO1xuICAgIHR5cGVzW3R5cGUgKyAnUkVRVUVTVElORyddID0gY29udGV4dC5QUkVGSVggKyB0eXBlICsgJ1JFUVVFU1RJTkcnO1xuICAgIHR5cGVzW3R5cGUgKyAnUkVRVUVTVEVEJ10gPSBjb250ZXh0LlBSRUZJWCArIHR5cGUgKyAnUkVRVUVTVEVEJztcbiAgICB0eXBlc1t0eXBlICsgJ0VSUk9SJ10gPSBjb250ZXh0LlBSRUZJWCArIHR5cGUgKyAnRVJST1InO1xuICB9KTtcbiAgY29udGV4dC5UWVBFUyA9IHR5cGVzO1xuICBpZiAoaXNPYmplY3QodHlwZXNBZGQpKSB7XG4gICAgY29udGV4dC5hZGRUeXBlcyh0eXBlc0FkZCwgdHJ1ZSk7XG4gIH1cbiAgaWYgKGNvbnRleHQuY29uc3RydWN0b3IuVFlQRVMpIHtcbiAgICBjb250ZXh0LmFkZFR5cGVzKGNvbnRleHQuY29uc3RydWN0b3IuVFlQRVMsIHRydWUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IF9fY3JlYXRlVHlwZXM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2xpYi9fX2NyZWF0ZVR5cGVzLmpzXG4gKiovIiwidmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3RyaW5nYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGNvcnJlY3RseSBjbGFzc2lmaWVkLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N0cmluZygnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N0cmluZygxKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycgfHxcbiAgICAoIWlzQXJyYXkodmFsdWUpICYmIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gc3RyaW5nVGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N0cmluZztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pc1N0cmluZy5qc1xuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQHR5cGUge0Z1bmN0aW9ufVxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgY29ycmVjdGx5IGNsYXNzaWZpZWQsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaXNBcnJheS5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgaXNGdW5jdGlvbiBmcm9tICdsb2Rhc2gvaXNGdW5jdGlvbic7XG5pbXBvcnQgUmVkYm9uZUVycm9yIGZyb20gJy4vUmVkYm9uZUVycm9yJztcblxuZXhwb3J0IGNvbnN0IF9fbWV0aG9kTWFwID0ge1xuICAnY3JlYXRlJzogJ1BPU1QnLFxuICAndXBkYXRlJzogJ1BVVCcsXG4gICdwYXRjaCc6ICdQQVRDSCcsXG4gICdkZWxldGUnOiAnREVMRVRFJyxcbiAgJ3JlYWQnOiAnR0VUJ1xufTtcblxuZXhwb3J0IGNvbnN0IFBSRUZJWCA9ICdAQFJlZGJvbmUvYWpheC8nO1xuZXhwb3J0IGNvbnN0IFJFUVVFU1RJTkcgPSBQUkVGSVggKyAnUkVRVUVTVElORyc7XG5leHBvcnQgY29uc3QgUkVRVUVTVEVEID0gUFJFRklYICsgJ1JFUVVFU1RFRCc7XG5leHBvcnQgY29uc3QgRVJST1IgPSBQUkVGSVggKyAnRVJST1InO1xuXG5jb25zdCBfX3N5bmMgPSBmdW5jdGlvbihtZXRob2QsIGFjdGlvbnMsIG9wdGlvbnMpIHtcbiAgaWYgKCF3aW5kb3cualF1ZXJ5KSB0aHJvdyBSZWRib25lRXJyb3IoJ2pRdWVyeSBub3QgZGVmaW5lZCcpO1xuICBjb25zdCAkID0gd2luZG93LmpRdWVyeTtcbiAgb3B0aW9ucy5zeW5jID0gKG9wdGlvbnMuc3luYyA9PT0gZmFsc2UgPyBmYWxzZSA6IHRydWUpO1xuICBjb25zdCB0eXBlID0gX19tZXRob2RNYXBbbWV0aG9kXTtcbiAgbGV0IHVybDtcbiAgaWYgKG9wdGlvbnMudXJsKSB7XG4gICAgdXJsID0gKGlzRnVuY3Rpb24ob3B0aW9ucy51cmwpID8gb3B0aW9ucy51cmwuYmluZCh0aGlzKSA6IG9wdGlvbnMudXJsKTtcbiAgfSBlbHNlIHtcbiAgICB1cmwgPSB0aGlzLnVybDtcbiAgICBpZiAoIXRoaXMuaXNOZXcpIHVybCArPSB0aGlzLmlkO1xuICB9XG4gIGxldCBkYXRhID0gbnVsbDtcbiAgaWYgKG9wdGlvbnMuZGF0YSkge1xuICAgIGRhdGEgPSBvcHRpb25zLmRhdGE7XG4gIH1cbiAgbGV0IHByb2Nlc3NEYXRhID0gdHJ1ZTtcbiAgaWYgKGRhdGEgJiYgdHlwZSAhPT0gJ0dFVCcgJiYgdHlwZSAhPT0gJ2dldCcpIHtcbiAgICBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgcHJvY2Vzc0RhdGEgPSBmYWxzZTtcbiAgfVxuICB0aGlzLmRpc3BhdGNoKHsgdHlwZTogUkVRVUVTVElORyB9KTtcbiAgdGhpcy5kaXNwYXRjaChhY3Rpb25zLnJlcXVlc3RpbmcoKSk7XG5cbiAgY29uc3Qgc3VjY2VzcyA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB0aGlzLmlkID0gZGF0YVt0aGlzLmlkQXR0cmlidXRlXSB8fCBudWxsO1xuICAgIHRoaXMuaXNOZXcgPSBmYWxzZTtcbiAgICB0aGlzLmRpc3BhdGNoKHsgdHlwZTogUkVRVUVTVEVEIH0pO1xuICAgIGlmIChvcHRpb25zLnN5bmMpIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2goYWN0aW9ucy5yZXF1ZXN0ZWQoKSk7XG4gICAgICB0aGlzLmRpc3BhdGNoKHRoaXMuYWN0aW9ucy5zeW5jKGRhdGEpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNwYXRjaChhY3Rpb25zLnJlcXVlc3RlZChkYXRhKSk7XG4gICAgfVxuICAgIGlmIChpc0Z1bmN0aW9uKHRoaXMuYWZ0ZXJSZXF1ZXN0KSkge1xuICAgICAgdGhpcy5hZnRlclJlcXVlc3QobWV0aG9kLCBkYXRhKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBlcnJvciA9IGZ1bmN0aW9uKGVycikge1xuICAgIHRoaXMuZGlzcGF0Y2goeyB0eXBlOiBFUlJPUiwgZXJyIH0pO1xuICAgIHRoaXMuZGlzcGF0Y2goYWN0aW9ucy5lcnJvcihlcnIpKTtcbiAgfVxuXG4gICQuYWpheCh7XG4gICAgdHlwZSxcbiAgICB1cmwsXG4gICAgZGF0YSxcbiAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgcHJvY2Vzc0RhdGEsXG4gICAgc3VjY2Vzczogc3VjY2Vzcy5iaW5kKHRoaXMpLFxuICAgIGVycm9yOiBlcnJvci5iaW5kKHRoaXMpXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBfX3N5bmM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2xpYi9fX3N5bmMuanNcbiAqKi8iLCJpbXBvcnQgUmVkYm9uZUVycm9yIGZyb20gJy4vUmVkYm9uZUVycm9yJztcblxuY29uc3QgX19jb250cm9sRmxvdyA9IHt9O1xuXG5jb25zdCBfX2luaXQgPSAoYm9uZSkgPT4ge1xuICBjb25zdCB0eXBlID0gYm9uZS5jb25zdHJ1Y3Rvci5fX2RhbmdlckRvbnRVc2VUaGlzVHlwZTtcbiAgY29uc3QgY2xhc3NOYW1lID0gYm9uZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAoIV9fY29udHJvbEZsb3dbdHlwZV0pIHtcbiAgICBfX2NvbnRyb2xGbG93W3R5cGVdID0ge307XG4gIH1cbiAgaWYgKCFfX2NvbnRyb2xGbG93W3R5cGVdW2NsYXNzTmFtZV0pIHtcbiAgICBfX2NvbnRyb2xGbG93W3R5cGVdW2NsYXNzTmFtZV0gPSB7fTtcbiAgfVxuICBpZiAoIV9fY29udHJvbEZsb3dbdHlwZV1bY2xhc3NOYW1lXVtib25lLnBpZF0pIHtcbiAgICBfX2NvbnRyb2xGbG93W3R5cGVdW2NsYXNzTmFtZV1bYm9uZS5waWRdID0gYm9uZTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgUmVkYm9uZUVycm9yKGAke3R5cGV9LyR7Y2xhc3NOYW1lfS8ke2JvbmUucGlkfSBpcyBhbHJlYWR5IGV4aXN0c2ApO1xuICB9XG4gIHJldHVybiB7XG4gICAgdHlwZSwgY2xhc3NOYW1lXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNldCA9IChib25lKSA9PiB7XG4gIF9faW5pdChib25lKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldCA9IChmbG93KSA9PiB7XG4gIGlmIChmbG93KSB7XG4gICAgY29uc3Qge3R5cGUsIGNsYXNzTmFtZSwgcGlkfSA9IGZsb3c7XG4gICAgaWYgKF9fY29udHJvbEZsb3dbdHlwZV0gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX2NvbnRyb2xGbG93W3R5cGVdW2NsYXNzTmFtZV0gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX2NvbnRyb2xGbG93W3R5cGVdW2NsYXNzTmFtZV1bcGlkXSkge1xuICAgICAgcmV0dXJuIF9fY29udHJvbEZsb3dbdHlwZV1bY2xhc3NOYW1lXVtwaWRdO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gX19jb250cm9sRmxvdztcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbGliL19fY29udHJvbEZsb3cuanNcbiAqKi8iLCJpbXBvcnQgQm9uZSBmcm9tICcuL0JvbmUnO1xuaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnbG9kYXNoL2lzRnVuY3Rpb24nO1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJ2xvZGFzaC9pc09iamVjdCc7XG5pbXBvcnQgeyBfX21ldGhvZE1hcCB9IGZyb20gJy4vX19zeW5jJztcblxuY2xhc3MgTW9kZWwgZXh0ZW5kcyBCb25lIHtcbiAgc3RhdGljIGdldCBfX2RhbmdlckRvbnRVc2VUaGlzVHlwZSgpIHtcbiAgICByZXR1cm4gJ21vZGVsJ1xuICB9XG4gIHN0YXRpYyBnZXQgX19kYW5nZXJEb250VXNlVGhpc1R5cGVzTGlzdCgpIHtcbiAgICByZXR1cm4gX19tZXRob2RNYXA7XG4gIH1cbiAgc3RhdGljIGdldCBUWVBFUygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgU0VUOiAnU0VUJyxcbiAgICAgIE1BUktfQVNfQ1VSUkVOVDogJ01BUktfQVNfQ1VSUkVOVCdcbiAgICB9XG4gIH1cbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIob3B0aW9ucyk7XG4gIH1cblxuICBzZXQoc3RhdGUpIHtcbiAgICBpZiAoaXNGdW5jdGlvbih0aGlzLmJlZm9yZVNldCkpIHtcbiAgICAgIHN0YXRlID0gdGhpcy5iZWZvcmVTZXQoc3RhdGUpO1xuICAgIH1cbiAgICB0aGlzLmRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IHRoaXMuVFlQRVMuU0VULFxuICAgICAgc3RhdGVcbiAgICB9KTtcbiAgfVxuXG4gIHNhdmUoc3RhdGUpIHtcbiAgICBpZiAoaXNPYmplY3Qoc3RhdGUpKSB7XG4gICAgICB0aGlzLnNldChzdGF0ZSk7XG4gICAgfVxuICAgIGxldCB0eXBlID0gJ2NyZWF0ZSc7XG4gICAgaWYgKCF0aGlzLmlzTmV3KSB0eXBlID0gJ3VwZGF0ZSc7XG4gICAgaWYgKGlzRnVuY3Rpb24odGhpcy5iZWZvcmVTYXZlKSkge1xuICAgICAgc3RhdGUgPSB0aGlzLmJlZm9yZVNhdmUodHlwZSk7XG4gICAgfVxuICAgIHRoaXMuZGlzcGF0Y2godGhpcy5hY3Rpb25zW3R5cGVdLnJlcXVlc3RpbmcoKSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RlbDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbGliL01vZGVsLmpzXG4gKiovIiwiaW1wb3J0IEJvbmUgZnJvbSAnLi9Cb25lJztcbmltcG9ydCBpc0FycmF5IGZyb20gJ2xvZGFzaC9pc0FycmF5JztcbmltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJ2xvZGFzaC9pc0Z1bmN0aW9uJztcbmltcG9ydCBfX2NyZWF0ZVJlZHVjZXIgZnJvbSAnLi9fX3JlZHVjZXJIZWxwZXJzL19fY3JlYXRlUmVkdWNlcic7XG5pbXBvcnQgX19nZXRTeW5jQWN0aW9ucyBmcm9tICcuL19fZ2V0U3luY0FjdGlvbnMnO1xuXG5jb25zdCBTRVQgPSAnU0VUJztcbmNvbnN0IFNFVF9NT0RFTCA9ICdTRVRfTU9ERUwnO1xuXG5jb25zdCBfX2FjdGlvblNldCA9IGZ1bmN0aW9uKHN0YXRlLCByZXNldCA9IGZhbHNlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdGhpcy5UWVBFUy5TRVQsXG4gICAgc3RhdGUsIHJlc2V0XG4gIH1cbn1cblxuY29uc3QgX19pbml0aWFsU3RhdGUgPSB7XG4gIG1vZGVsczoge30sXG4gIGxpc3Q6IFtdLFxuICBjdXJyZW50TW9kZWw6IG51bGxcbn1cblxuY29uc3QgX19sb2FkTW9kZWwgPSBmdW5jdGlvbihpZC8qLCAgY3VycmVudCA9IHRydWUgKi8pIHtcbiAgdGhpcy5zeW5jKCdyZWFkJywgdGhpcy5hY3Rpb25zLm1vZGVsLmxvYWQsIHsgdXJsOiB0aGlzLnVybCArIGlkLCBzeW5jOiBmYWxzZSB9KVxufVxuXG5jbGFzcyBDb2xsZWN0aW9uIGV4dGVuZHMgQm9uZSB7XG4gIHN0YXRpYyBnZXQgX19kYW5nZXJEb250VXNlVGhpc1R5cGUoKSB7XG4gICAgcmV0dXJuICdjb2xsZWN0aW9uJ1xuICB9XG4gIHN0YXRpYyBnZXQgX19kYW5nZXJEb250VXNlVGhpc1R5cGVzTGlzdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgRkVUQ0g6ICdGRVRDSCcsXG4gICAgICBTQVZFX0NVUlJFTlRfTU9ERUw6ICdTQVZFX0NVUlJFTlRfTU9ERUwnLFxuICAgICAgUkVNT1ZFX01PREVMOiAnUkVNT1ZFX01PREVMJyxcbiAgICAgIExPQURfQ1VSUkVOVF9NT0RFTDogJ0xPQURfQ1VSUkVOVF9NT0RFTCdcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBUWVBFUygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgU0VULFxuICAgICAgU0VUX01PREVMXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBpbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIF9faW5pdGlhbFN0YXRlO1xuICB9XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIob3B0aW9ucyk7XG4gICAgdGhpcy51cmwgPSBvcHRpb25zLnVybDtcbiAgICB0aGlzLnBhcnNlID0gb3B0aW9ucy5wYXJzZSB8fCBudWxsO1xuICAgIHRoaXMuaWRBdHRyaWJ1dGUgPSBvcHRpb25zLmlkQXR0cmlidXRlIHx8IG51bGw7XG4gICAgdGhpcy5pbm5lckF0dHJpYnV0ZSA9IG9wdGlvbnMuaW5uZXJBdHRyaWJ1dGUgfHwgbnVsbDtcbiAgICB0aGlzLmFkZEFjdGlvbnMoe1xuICAgICAgZmV0Y2g6IF9fZ2V0U3luY0FjdGlvbnModGhpcywgJ0ZFVENIJyksXG4gICAgICBtb2RlbDoge1xuICAgICAgICBsb2FkOiBfX2dldFN5bmNBY3Rpb25zKHRoaXMsICdMT0FEX0NVUlJFTlRfTU9ERUwnKVxuICAgICAgfSxcbiAgICAgIHNldDogX19hY3Rpb25TZXQuYmluZCh0aGlzKVxuICAgIH0pO1xuICAgIHRoaXMubW9kZWwgPSB7fTtcbiAgICB0aGlzLm1vZGVsLmxvYWQgPSBfX2xvYWRNb2RlbC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgX19jcmVhdGVSZWR1Y2VyKCkge1xuICAgIHRoaXMuX19yZWR1Y2VyID0gX19jcmVhdGVSZWR1Y2VyKHtcbiAgICAgIFt0aGlzLlRZUEVTLlNZTkNdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIC4uLnRoaXMuX19wYXJzZShhY3Rpb24uZGF0YSlcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBbdGhpcy5UWVBFUy5MT0FEX0NVUlJFTlRfTU9ERUxfUkVRVUVTVEVEXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYWN0aW9uKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBjdXJyZW50TW9kZWw6IGFjdGlvbi5kYXRhXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfX2luaXRpYWxTdGF0ZSk7XG4gIH1cblxuICByZWR1Y2Uoc3RhdGUsIGFjdGlvbikge1xuICAgIGlmICghdGhpcy5fX3JlZHVjZXIpIHRoaXMuX19jcmVhdGVSZWR1Y2VyKCk7XG4gICAgcmV0dXJuIHRoaXMuX19yZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICB9XG5cbiAgZmV0Y2goZGF0YSkge1xuICAgIHRoaXMuc3luYygncmVhZCcsIHRoaXMuYWN0aW9ucy5mZXRjaCwge2RhdGF9KVxuICB9XG5cbiAgX19wYXJzZShkYXRhKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24odGhpcy5wYXJzZSkpIHJldHVybiB0aGlzLnBhcnNlKGRhdGEpO1xuICAgIGNvbnN0IGlkID0gdGhpcy5pZEF0dHJpYnV0ZSB8fCAnaWQnO1xuICAgIGlmICh0aGlzLmlubmVyQXR0cmlidXRlICYmIGRhdGEpIHtcbiAgICAgIGRhdGEgPSBkYXRhW3RoaXMuaW5uZXJBdHRyaWJ1dGVdO1xuICAgIH1cbiAgICBjb25zdCBtb2RlbHMgPSB7fTtcbiAgICBjb25zdCBsaXN0ID0gW107XG4gICAgaWYgKCFpc0FycmF5KGRhdGEpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtb2RlbHMsXG4gICAgICAgIGxpc3RcbiAgICAgIH07XG4gICAgfVxuICAgIGRhdGEuZm9yRWFjaCgobW9kZWwpID0+IHtcbiAgICAgIGlmICghbW9kZWxbaWRdKSByZXR1cm47XG4gICAgICBtb2RlbHNbbW9kZWxbaWRdXSA9IG1vZGVsO1xuICAgICAgbGlzdC5wdXNoKG1vZGVsW2lkXSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1vZGVscyxcbiAgICAgIGxpc3RcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29sbGVjdGlvbjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbGliL0NvbGxlY3Rpb24uanNcbiAqKi8iLCJpbXBvcnQgUmVkYm9uZUVycm9yIGZyb20gJy4uL1JlZGJvbmVFcnJvcic7XG5pbXBvcnQgaXNGdW5jdGlvbiBmcm9tICdsb2Rhc2gvaXNGdW5jdGlvbic7XG5cbmNvbnN0IF9fY3JlYXRlUmVkdWNlciA9IChzd2l0Y2hlcywgaW5pdGlhbFN0YXRlID0gbnVsbCwgc3RhdGVSZWR1Y2VyID0gbnVsbCkgPT4ge1xuICByZXR1cm4gZnVuY3Rpb24oc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICAgIGxldCBuZXh0U3RhdGUgPSBzdGF0ZTtcbiAgICBpZiAoc3dpdGNoZXNbYWN0aW9uLnR5cGVdKSB7XG4gICAgICBpZiAoIWlzRnVuY3Rpb24oc3dpdGNoZXNbYWN0aW9uLnR5cGVdKSkge1xuICAgICAgICB0aHJvdyBuZXcgUmVkYm9uZUVycm9yKCdjcmVhdGVSZWR1Y2VyIHN3aXRjaGVyIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gICAgICB9XG4gICAgICBuZXh0U3RhdGUgPSBzd2l0Y2hlc1thY3Rpb24udHlwZV0oc3RhdGUsIGFjdGlvbik7XG4gICAgfVxuICAgIGlmIChpc0Z1bmN0aW9uKHN0YXRlUmVkdWNlcikpIHtcbiAgICAgIHJldHVybiBzdGF0ZVJlZHVjZXIoc3RhdGUsIG5leHRTdGF0ZSwgYWN0aW9uKTtcbiAgICB9XG4gICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBfX2NyZWF0ZVJlZHVjZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2xpYi9fX3JlZHVjZXJIZWxwZXJzL19fY3JlYXRlUmVkdWNlci5qc1xuICoqLyIsImltcG9ydCBfX3Byb2Nlc3NGbG93IGZyb20gJy4vX19yZWR1Y2VySGVscGVycy9fX3Byb2Nlc3NGbG93JztcblxuY29uc3QgX19pbml0aWFsU3RhdGUgPSB7XG4gIHJvb3Q6IHt9XG59XG5cbmNvbnN0IF9fcmVkYm9uZVB4ID0gJ0BAcmVkYm9uZSc7XG5jb25zdCBfX3JlZGJvbmVQeExlbiA9IF9fcmVkYm9uZVB4Lmxlbmd0aDtcblxuY29uc3QgX19wYXJzZUZsb3dSdWxlID0gL15AQHJlZGJvbmVcXC8oW2Etel0rPylcXC8oW2Etel8wLTldKz8pXFwvKFthLXpfMC05XSs/KVxcLyguKikvaTtcblxuY29uc3QgX19yZWR1Y2VyID0gKHN0YXRlID0gX19pbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBpZiAoYWN0aW9uLnR5cGUuc2xpY2UoMCwgX19yZWRib25lUHhMZW4pLnRvTG93ZXJDYXNlKCkgIT09IF9fcmVkYm9uZVB4KSByZXR1cm4gc3RhdGU7XG4gIGNvbnN0IGZsb3dSdWxlID0gYWN0aW9uLnR5cGUubWF0Y2goX19wYXJzZUZsb3dSdWxlKTtcbiAgaWYgKCFmbG93UnVsZSkgcmV0dXJuIHN0YXRlO1xuICBjb25zdCBmbG93ID0ge1xuICAgIGFjdGlvbjogZmxvd1J1bGVbNF0sXG4gICAgcGlkOiBmbG93UnVsZVszXSxcbiAgICBjbGFzc05hbWU6IGZsb3dSdWxlWzJdLFxuICAgIHR5cGU6IGZsb3dSdWxlWzFdXG4gIH1cbiAgcmV0dXJuIF9fcHJvY2Vzc0Zsb3coc3RhdGUsIGFjdGlvbiwgZmxvdyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IF9fcmVkdWNlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbGliL19fcmVkdWNlci5qc1xuICoqLyIsImltcG9ydCBSZWRib25lRXJyb3IgZnJvbSAnLi4vUmVkYm9uZUVycm9yJztcbmltcG9ydCAqIGFzIF9fZmxvdyBmcm9tICcuLi9fX2NvbnRyb2xGbG93JztcbmltcG9ydCBfX2NyZWF0ZUJvbmUgZnJvbSAnLi9fX2NyZWF0ZUJvbmUnO1xuXG5jb25zdCBfX3Byb2Nlc3NGbG93ID0gKHN0YXRlLCBhY3Rpb24sIGZsb3cpID0+IHtcbiAgaWYgKCFmbG93KSB0aHJvdyBuZXcgUmVkYm9uZUVycm9yKCdGbG93IGlzIG5vdCBkZWZpbmVkJyk7XG4gIGNvbnN0IGJvbmUgPSBfX2Zsb3cuZ2V0KGZsb3cpO1xuICBpZiAoZmxvdy5hY3Rpb24gPT09ICdDUkVBVEUnKSB7XG4gICAgcmV0dXJuIF9fY3JlYXRlQm9uZShzdGF0ZSwgZmxvdywgYm9uZS5jb25zdHJ1Y3Rvci5pbml0aWFsU3RhdGUpO1xuICB9XG4gIGlmICghYm9uZSkgcmV0dXJuIHN0YXRlO1xuXG4gIGlmICghYm9uZS5UWVBFU1tmbG93LmFjdGlvbl0pIHJldHVybiBzdGF0ZTtcbiAgLy8gY29uc3QgZmFrZUFjdGlvbiA9IHtcbiAgLy8gICAuLi5hY3Rpb24sXG4gIC8vICAgdHlwZTogZmxvdy5hY3Rpb25cbiAgLy8gfTtcbiAgY29uc3QgZmFrZVN0YXRlID0gc3RhdGVbZmxvdy50eXBlXVtmbG93LmNsYXNzTmFtZV1bZmxvdy5waWRdO1xuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgW2Zsb3cudHlwZV06IHtcbiAgICAgIC4uLnN0YXRlW2Zsb3cudHlwZV0sXG4gICAgICBbZmxvdy5jbGFzc05hbWVdOiB7XG4gICAgICAgIC4uLnN0YXRlW2Zsb3cudHlwZV1bZmxvdy5jbGFzc05hbWVdLFxuICAgICAgICBbZmxvdy5waWRdOiBib25lLnJlZHVjZShmYWtlU3RhdGUsIGFjdGlvbilcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgX19wcm9jZXNzRmxvdztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbGliL19fcmVkdWNlckhlbHBlcnMvX19wcm9jZXNzRmxvdy5qc1xuICoqLyIsImltcG9ydCBSZWRib25lRXJyb3IgZnJvbSAnLi4vUmVkYm9uZUVycm9yJztcbmltcG9ydCB7X19ub25GbG93VHlwZSwgX19ub25GbG93Q2xhc3MsIF9fbm9uRmxvd1BpZH0gZnJvbSAnLi9fX25vbkZsb3cnO1xuXG5jb25zdCBfX2NyZWF0ZUJvbmUgPSAoc3RhdGUsIGZsb3csIGluaXRpYWxTdGF0ZSkgPT4ge1xuICBpZiAoIXN0YXRlW2Zsb3cudHlwZV0pIHtcbiAgICByZXR1cm4gX19ub25GbG93VHlwZShzdGF0ZSwgZmxvdywgaW5pdGlhbFN0YXRlKTtcbiAgfVxuICBpZiAoIXN0YXRlW2Zsb3cudHlwZV1bZmxvdy5jbGFzc05hbWVdKSB7XG4gICAgcmV0dXJuIF9fbm9uRmxvd0NsYXNzKHN0YXRlLCBmbG93LCBpbml0aWFsU3RhdGUpO1xuICB9XG4gIGlmICghc3RhdGVbZmxvdy50eXBlXVtmbG93LmNsYXNzTmFtZV1bZmxvdy5waWRdKSB7XG4gICAgcmV0dXJuIF9fbm9uRmxvd1BpZChzdGF0ZSwgZmxvdywgaW5pdGlhbFN0YXRlKTtcbiAgfSBlbHNlIHRocm93IG5ldyBSZWRib25lRXJyb3IoYCR7Zmxvdy50eXBlfS8ke2Zsb3cuY2xhc3NOYW1lfS8ke2Zsb3cucGlkfSBhbHJlYWR5IGluIHN0b3JlYCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IF9fY3JlYXRlQm9uZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbGliL19fcmVkdWNlckhlbHBlcnMvX19jcmVhdGVCb25lLmpzXG4gKiovIiwiZXhwb3J0IGNvbnN0IF9fbm9uRmxvd1R5cGUgPSAoc3RhdGUsIHt0eXBlLCBjbGFzc05hbWUsIHBpZH0sIGluaXRpYWxTdGF0ZSA9IHt9KSA9PiB7XG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgW3R5cGVdOiB7XG4gICAgICBbY2xhc3NOYW1lXToge1xuICAgICAgICBbcGlkXTogaW5pdGlhbFN0YXRlXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBfX25vbkZsb3dDbGFzcyA9IChzdGF0ZSwge3R5cGUsIGNsYXNzTmFtZSwgcGlkfSwgaW5pdGlhbFN0YXRlID0ge30pID0+IHtcbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBbdHlwZV06IHtcbiAgICAgIC4uLnN0YXRlW3R5cGVdLFxuICAgICAgW2NsYXNzTmFtZV06IHtcbiAgICAgICAgW3BpZF06IGluaXRpYWxTdGF0ZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgX19ub25GbG93UGlkID0gKHN0YXRlLCB7dHlwZSwgY2xhc3NOYW1lLCBwaWR9LCBpbml0aWFsU3RhdGUgPSB7fSkgPT4ge1xuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIFt0eXBlXToge1xuICAgICAgLi4uc3RhdGVbdHlwZV0sXG4gICAgICBbY2xhc3NOYW1lXToge1xuICAgICAgICAuLi5zdGF0ZVt0eXBlXVtjbGFzc05hbWVdLFxuICAgICAgICBbcGlkXTogaW5pdGlhbFN0YXRlXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2xpYi9fX3JlZHVjZXJIZWxwZXJzL19fbm9uRmxvdy5qc1xuICoqLyIsImNvbnN0IF9fZ2V0U3luY0FjdGlvbnMgPSBmdW5jdGlvbihjb250ZXh0LCBQUkUpIHtcbiAgY29uc3QgX19yZXF1ZXN0aW5nID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBjb250ZXh0LlRZUEVTW1BSRSArICdfUkVRVUVTVElORyddLFxuICAgICAgZGF0YVxuICAgIH1cbiAgfTtcbiAgY29uc3QgX19yZXF1ZXN0ZWQgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IGNvbnRleHQuVFlQRVNbUFJFICsgJ19SRVFVRVNURUQnXSxcbiAgICAgIGRhdGFcbiAgICB9XG4gIH07XG4gIGNvbnN0IF9fZXJyb3IgPSBmdW5jdGlvbihlcnIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogY29udGV4dC5UWVBFU1tQUkUgKyAnX0VSUk9SJ10sXG4gICAgICBlcnJcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICByZXF1ZXN0aW5nOiBfX3JlcXVlc3RpbmcsXG4gICAgcmVxdWVzdGVkOiBfX3JlcXVlc3RlZCxcbiAgICBlcnJvcjogX19lcnJvclxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IF9fZ2V0U3luY0FjdGlvbnM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2xpYi9fX2dldFN5bmNBY3Rpb25zLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==