import isFunction from 'lodash/isFunction';
import isObject from 'lodash/isPlainObject';
import RedboneError from './RedboneError';

import __createTypes from './__createTypes';
import __sync from './__sync';
import {set as __addToFlow} from './__controlFlow';

let __dispatch, __getState;
let __lastPid = 0;

const __actionSync = function(data) {
  return {
    type: this.TYPES.SYNC,
    data
  }
}

class Bone {
  static initialize({dispatch, getState}) {
    __dispatch = dispatch;
    __getState = getState;
  }

  static get newPid() {
    return ++__lastPid;
  }

  static get __dangerDontUseThisType() {
    return 'root'
  }

  static get __dangerDontUseThisTypesList() {
    return {};
  }

  constructor(options = {}) {
    if (options.sync && isFunction(options.sync)) {
      this.sync = options.sync.bind(this);
    } else {
      this.sync = __sync.bind(this);
    }
    this.dispatch = __dispatch;
    this.getState = __getState;
    this.isNew = (options.isNew ? !!options.isNew : true);
    if (options.pid) {
      if (isFunction(options.pid)) this.pid = options.pid.bind(this)();
      else this.pid = options.pid;
    }
    else this.pid = 'redbonePid' + Bone.newPid;
    __createTypes(this, options.prefix, { SYNC: 'SYNC', CREATE: 'CREATE' });
    this.actions = {
      sync: __actionSync.bind(this)
    }
    if (!options.noFlow) {
      __addToFlow(this);
      this.dispatch({ type: this.TYPES.CREATE });
    }
  }

  addTypes(types, addPrefix = false) {
    if (!isObject(types)) throw new RedboneError('Types is not an object');
    if (addPrefix) {
      Object.keys(types).forEach((type) => {
        types[type] = this.PREFIX + types[type];
      });
    }
    this.TYPES = { ...this.TYPES, ...types }
    return;
  }
  addActions(actions) {
    this.actions = {
      ...this.actions,
      ...actions
    }
  }
  reduce(state) {
    return state;
  }
}

export default Bone;
