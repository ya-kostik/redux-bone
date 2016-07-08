export const __nonFlowType = (state, {type, className, pid}, initialState = {}) => {
  return {
    ...state,
    [type]: {
      [className]: {
        [pid]: initialState
      }
    }
  }
}

export const __nonFlowClass = (state, {type, className, pid}, initialState = {}) => {
  return {
    ...state,
    [type]: {
      ...state[type],
      [className]: {
        [pid]: initialState
      }
    }
  }
}

export const __nonFlowPid = (state, {type, className, pid}, initialState = {}) => {
  return {
    ...state,
    [type]: {
      ...state[type],
      [className]: {
        ...state[type][className],
        [pid]: initialState
      }
    }
  }
}
