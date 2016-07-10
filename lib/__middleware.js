import isFunction from 'lodash/isFunction';
import __parseFlow from './__parseFlow';
import {get} from './__controlFlow';


const __middleware = ({dispatch, getState}) => {
  return next => action => {
    if (!action.type) return next(action);
    const flow = __parseFlow(action);
    if (flow === null) return next(action);
    const bone = get(flow);
    if (!bone) return next(action);
    const middlewareObject = { dispatch, getState, action, flow };
    if (bone.beforeDispatch && isFunction(bone.beforeDispatch)) {
      middlewareObject.next = (action) => {
        if (action) {
          next(action);
          if (bone.afterDispatch && isFunction(bone.afterDispatch)) {
            bone.afterDispatch(middlewareObject);
          }
        }
        return;
      };
      bone.beforeDispatch(middlewareObject);
      return;
    }
    next(action);
    if (bone.afterDispatch && isFunction(bone.afterDispatch)) {
      bone.afterDispatch(middlewareObject);
    }
  }
}

export default __middleware;
