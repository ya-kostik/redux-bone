import __parseFlow from './__parseFlow';
import __processFlow from './__reducerHelpers/__processFlow';

const __initialState = {
  root: {}
}



const __reducer = (state = __initialState, action) => {
  const flow = __parseFlow(action);
  if (!flow) return state;
  return __processFlow(state, action, flow);
}

export default __reducer;
