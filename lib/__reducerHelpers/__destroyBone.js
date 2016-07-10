const __destroyBone = (state, {type, className, pid}) => {
  const stateClass = { ...state[type][className] };
  stateClass[pid] = null;
  delete stateClass[pid];
  return {
    ...state,
    [type]: {
      ...state[type],
      [className]: stateClass
    }
  }
}

export default __destroyBone;
