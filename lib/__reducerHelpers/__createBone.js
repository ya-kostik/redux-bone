import RedboneError from '../RedboneError';
import {__nonFlowType, __nonFlowClass, __nonFlowPid} from './__nonFlow';

const __createBone = (state, flow, initialState) => {
  if (!state[flow.type]) {
    return __nonFlowType(state, flow, initialState);
  }
  if (!state[flow.type][flow.className]) {
    return __nonFlowClass(state, flow, initialState);
  }
  if (!state[flow.type][flow.className][flow.pid]) {
    return __nonFlowPid(state, flow, initialState);
  } else throw new RedboneError(`${flow.type}/${flow.className}/${flow.pid} already in store`);
}

export default __createBone;
