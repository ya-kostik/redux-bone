import RedboneError from '../RedboneError';
import isFunction from 'lodash/isFunction';

const __createReducer = (switches, initialState = null, stateReducer = null) => {
  return function(state = initialState, action) {
    let nextState = state;
    if (switches[action.type]) {
      if (!isFunction(switches[action.type])) {
        throw new RedboneError('createReducer switcher is not a function');
      }
      nextState = switches[action.type](state, action);
    }
    if (isFunction(stateReducer)) {
      return stateReducer(state, nextState, action);
    }
    return nextState;
  }
}

export default __createReducer;
