import isObject from 'lodash/isObject';

const __createActions = (context) => {
  let actionsList = context.constructor.__dangerDontUseThisActionsList;
  if (!isObject(context.actions)) context.actions = {};
  if (!isObject(actionsList)) return;
  Object.keys(actionsList).forEach((key) => {
    context.actions[key] = actionsList[key].bind(this);
  });
}

export default __createActions;
