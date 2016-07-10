import Bone from './Bone';
import __getSyncActions from './__getSyncActions';

const __initialState = {
  attributes: {}
}

class Model extends Bone {
  static get __dangerDontUseThisType() {
    return 'model'
  }
  static get __dangerDontUseThisTypesList() {
    return {
      LOAD: 'LOAD',
      SAVE: 'SAVE',
      REMOVE: 'REMOVE'
    }
  }
  static get TYPES() {
    return {
      SET: 'SET'
    }
  }
  static get initialState() {
    return __initialState
  }
  constructor(options = {}) {
    super(options);
    if (options.url) this.url = options.url;
    this.addActions({
      load: __getSyncActions(this, 'LOAD'),
      save: __getSyncActions(this, 'SAVE'),
      remove: __getSyncActions(this, 'REMOVE'),
      set: (state, force) => {
        return { type: this.TYPES.SET, state, force }
      }
    });
  }

  parse(data) {
    return data;
  }

  getReducerObject() {
    return {
      [this.TYPES.SYNC]: (state, action) => {
        return {
          ...state,
          attributes: this.parse(action.data)
        };
      },
      [this.TYPES.SET]: (state, action) => {
        if (action.force) {
          return {
            ...state,
            attributes: action.state
          }
        }
        return {
          ...state,
          attributes: {
            ...state.attributes,
            ...action.state
          }
        }
      },
      [this.TYPES.RESET]: () => __initialState
    };
  }

  afterRequest(type, data) {
    if (type === 'read' || type === 'create' || type === 'update') {
      if (data && data[this.idAttribute]) {
        this.id = data[this.idAttribute];
      }
      this.isNew = false;
    }
  }

  load(id = null, url = null) {
    if (!id && this.id) id = this.id;
    if (!url) url = this.url;
    if (!id) id = '';
    this.sync('read', this.actions.load, { url: url + id });
  }

  save(id = null, url = null) {
    if (!id && this.id) id = this.id;
    if (!url) url = this.url;
    if (!id) {
      this.sync('create', this.actions.save, { url: url });
    } else {
      this.sync('update', this.actions.save, { url: url + id });
    }
  }

  remove(id = null, url = null) {
    if (!id && this.id) id = this.id;
    if (!url) url = this.url;
    if (!id) id = '';
    this.sync('remove', this.actions.remove, { url: url + id });
  }

  set(state, force = false) {
    this.dispatch(this.actions.set(state, force));
  }

  get() {
    const state = this.getState();
    return state[this.root][this.flow.type][this.flow.className][this.pid].attributes;
  }
}

export default Model;
