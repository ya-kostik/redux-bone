import Bone from './Bone';
import isArray from 'lodash/isArray';
import isFunction from 'lodash/isFunction';
import __createReducer from './__reducerHelpers/__createReducer';
import __getSyncActions from './__getSyncActions';

const SET = 'SET';
const SET_MODEL = 'SET_MODEL';

const __actionSet = function(state, reset = false) {
  return {
    type: this.TYPES.SET,
    state, reset
  }
}

const __initialState = {
  models: {},
  list: [],
  currentModel: null
}

const __loadModel = function(id/*,  current = true */) {
  this.sync('read', this.actions.model.load, { url: this.url + id, sync: false })
}

class Collection extends Bone {
  static get __dangerDontUseThisType() {
    return 'collection'
  }
  static get __dangerDontUseThisTypesList() {
    return {
      FETCH: 'FETCH',
      SAVE_CURRENT_MODEL: 'SAVE_CURRENT_MODEL',
      REMOVE_MODEL: 'REMOVE_MODEL',
      LOAD_CURRENT_MODEL: 'LOAD_CURRENT_MODEL'
    };
  }

  static get TYPES() {
    return {
      SET,
      SET_MODEL
    }
  }

  static get initialState() {
    return __initialState;
  }

  constructor(options = {}) {
    super(options);
    this.url = options.url;
    this.parse = options.parse || null;
    this.idAttribute = options.idAttribute || null;
    this.innerAttribute = options.innerAttribute || null;
    this.addActions({
      fetch: __getSyncActions(this, 'FETCH'),
      model: {
        load: __getSyncActions(this, 'LOAD_CURRENT_MODEL')
      },
      set: __actionSet.bind(this)
    });
    this.model = {};
    this.model.load = __loadModel.bind(this);
  }

  __createReducer() {
    this.__reducer = __createReducer({
      [this.TYPES.SYNC]: (state, action) => {
        return {
          ...state,
          ...this.__parse(action.data)
        };
      },
      [this.TYPES.LOAD_CURRENT_MODEL_REQUESTED]: (state, action) => {
        console.log(action);
        return {
          ...state,
          currentModel: action.data
        }
      }
    }, __initialState);
  }

  reduce(state, action) {
    if (!this.__reducer) this.__createReducer();
    return this.__reducer(state, action);
  }

  fetch(data) {
    this.sync('read', this.actions.fetch, {data})
  }

  __parse(data) {
    if (isFunction(this.parse)) return this.parse(data);
    const id = this.idAttribute || 'id';
    if (this.innerAttribute && data) {
      data = data[this.innerAttribute];
    }
    const models = {};
    const list = [];
    if (!isArray(data)) {
      return {
        models,
        list
      };
    }
    data.forEach((model) => {
      if (!model[id]) return;
      models[model[id]] = model;
      list.push(model[id]);
    });
    return {
      models,
      list
    }
  }
}

export default Collection;
