const __getSyncActions = function(context, PRE) {
  const __requesting = function(data) {
    return {
      type: context.TYPES[PRE + '_REQUESTING'],
      data
    }
  };
  const __requested = function(data) {
    return {
      type: context.TYPES[PRE + '_REQUESTED'],
      data
    }
  };
  const __error = function(err) {
    return {
      type: context.TYPES[PRE + '_ERROR'],
      err
    }
  }
  return {
    requesting: __requesting,
    requested: __requested,
    error: __error
  }
}

export default __getSyncActions;
