import __processFlow from './__reducerHelpers/__processFlow';

const __initialState = {
  root: {}
}

const __redbonePx = '@@redbone';
const __redbonePxLen = __redbonePx.length;

const __parseFlowRule = /^@@redbone\/([a-z]+?)\/([a-z_0-9]+?)\/([a-z_0-9]+?)\/(.*)/i;

const __reducer = (state = __initialState, action) => {
  if (action.type.slice(0, __redbonePxLen).toLowerCase() !== __redbonePx) return state;
  const flowRule = action.type.match(__parseFlowRule);
  if (!flowRule) return state;
  const flow = {
    action: flowRule[4],
    pid: flowRule[3],
    className: flowRule[2],
    type: flowRule[1]
  }
  return __processFlow(state, action, flow);
}

export default __reducer;
