import RedboneError from '../RedboneError';
import * as __flow from '../__controlFlow';
import __createBone from './__createBone';
import __destroyBone from './__destroyBone';


const __processFlow = (state, action, flow) => {
  if (!flow) throw new RedboneError('Flow is not defined');
  const bone = __flow.get(flow);
  if (flow.action === 'CREATE') {
    return __createBone(state, flow, bone.constructor.initialState);
  }
  if (flow.action === 'DESTROY') {
    return __destroyBone(state, flow);
  }
  if (!bone) return state;

  if (!bone.TYPES[flow.action]) return state;
  // const fakeAction = {
  //   ...action,
  //   type: flow.action
  // };
  const fakeState = state[flow.type][flow.className][flow.pid];

  return {
    ...state,
    [flow.type]: {
      ...state[flow.type],
      [flow.className]: {
        ...state[flow.type][flow.className],
        [flow.pid]: bone.reduce(fakeState, action)
      }
    }
  }
}

export default __processFlow;
