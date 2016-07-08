import Bone from './Bone';
import isFunction from 'lodash/isFunction';
import isObject from 'lodash/isObject';
import { __methodMap } from './__sync';

class Model extends Bone {
  static get __dangerDontUseThisType() {
    return 'model'
  }
  static get __dangerDontUseThisTypesList() {
    return __methodMap;
  }
  static get TYPES() {
    return {
      SET: 'SET',
      MARK_AS_CURRENT: 'MARK_AS_CURRENT'
    }
  }
  constructor(options = {}) {
    super(options);
  }

  set(state) {
    if (isFunction(this.beforeSet)) {
      state = this.beforeSet(state);
    }
    this.dispatch({
      type: this.TYPES.SET,
      state
    });
  }

  save(state) {
    if (isObject(state)) {
      this.set(state);
    }
    let type = 'create';
    if (!this.isNew) type = 'update';
    if (isFunction(this.beforeSave)) {
      state = this.beforeSave(type);
    }
    this.dispatch(this.actions[type].requesting())
  }
}

export default Model;
