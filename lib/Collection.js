import Bone from './Bone';
import isArray from 'lodash/isArray';
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

const __loadModel = function(id) {
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
    if (options.url) this.url = options.url;
    if (options.innerAttribute) this.innerAttribute = options.innerAttribute;
    this.addActions({
      fetch: __getSyncActions(this, 'FETCH'),
      model: {
        loadAsCurrent: __getSyncActions(this, 'LOAD_CURRENT_MODEL')
      },
      set: __actionSet.bind(this)
    });
    this.model = {};
    this.model.load = __loadModel.bind(this);
  }

  getReducerObject() {
    return {
      [this.TYPES.SYNC]: (state, action) => {
        return {
          ...state,
          ...this.__parse(action.data)
        };
      },
      [this.TYPES.LOAD_CURRENT_MODEL_REQUESTED]: (state, action) => {
        return {
          ...state,
          currentModel: action.data
        }
      },
      [this.TYPES.RESET]: () => __initialState
    }
  }

  fetch(data) {
    this.sync('read', this.actions.fetch, {data})
  }

  parse(data) {
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
      if (!model[this.idAttribute]) return;
      models[model[this.idAttribute]] = model;
      list.push(model[this.idAttribute]);
    });
    return {
      models,
      list
    }
  }
}

export default Collection;
