import Bone from './Bone';
import Model from './Model';
import Collection from './Collection';
import __reducer from './__reducer';
import * as __flow from './__controlFlow';
import __createReducer from './__reducerHelpers/__createReducer';
import __middleware from './__middleware';

const toExport = {
  Model,
  Collection,
  initialize(store, root = 'redbone') {
    Bone.initialize(store, root);
  }
}

export default toExport;

export const reducer = __reducer;
export const flow = __flow;
export const createReducer = __createReducer;
export const middleware = __middleware;
