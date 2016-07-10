import RedboneError from './RedboneError';

const __controlFlow = {};

const __init = (bone) => {
  const type = bone.constructor.__dangerDontUseThisType;
  const className = bone.constructor.name;
  if (!__controlFlow[type]) {
    __controlFlow[type] = {};
  }
  if (!__controlFlow[type][className]) {
    __controlFlow[type][className] = {};
  }
  if (!__controlFlow[type][className][bone.pid]) {
    __controlFlow[type][className][bone.pid] = bone;
  } else {
    throw new RedboneError(`${type}/${className}/${bone.pid} is already exists`);
  }
  return {
    type, className, pid: bone.pid
  }
}

export const set = (bone) => {
  return __init(bone);
}

export const get = (flow) => {
  if (flow) {
    const {type, className, pid} = flow;
    if (__controlFlow[type] &&
                            __controlFlow[type][className] &&
                            __controlFlow[type][className][pid]) {
      return __controlFlow[type][className][pid];
    }
    return null;
  }
  return __controlFlow;
}

export const remove = ({type, className, pid}) => {
  __controlFlow[type][className][pid] = null;
  delete __controlFlow[type][className][pid];
}
