import Bone from './Bone';
import Model from './Model';
import Collection from './Collection';
import __reducer from './__reducer';
import * as __flow from './__controlFlow';
import __createReducer from './__reducerHelpers/__createReducer';


class Redbone {
  static get Model() {
    return Model;
  }

  static get Collection() {
    return Collection;
  }

  static initialize(store) {
    Bone.initialize(store);
  }
}

export default Redbone;

export const reducer = __reducer;
export const flow = __flow;
export const createReducer = __createReducer;
