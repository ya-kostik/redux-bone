const __redbonePx = '@@redbone';
const __redbonePxLen = __redbonePx.length;

const __parseFlowRule = /^@@redbone\/([a-z]+?)\/([a-z_0-9]+?)\/([a-z_0-9]+?)\/(.*)/i;

const __parseFlow = (action) => {
  if (action.type.slice(0, __redbonePxLen).toLowerCase() !== __redbonePx) return null;
  const flowRule = action.type.match(__parseFlowRule);
  if (!flowRule) return null;
  return {
    action: flowRule[4],
    pid: flowRule[3],
    className: flowRule[2],
    type: flowRule[1]
  }
}

export default __parseFlow;
