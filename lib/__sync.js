import isFunction from 'lodash/isFunction';
import RedboneError from './RedboneError';

export const __methodMap = {
  'create': 'POST',
  'update': 'PUT',
  'patch': 'PATCH',
  'delete': 'DELETE',
  'read': 'GET'
};

export const PREFIX = '@@Redbone/ajax/';
export const REQUESTING = PREFIX + 'REQUESTING';
export const REQUESTED = PREFIX + 'REQUESTED';
export const ERROR = PREFIX + 'ERROR';

const __sync = function(method, actions, options) {
  if (!window.jQuery) throw RedboneError('jQuery not defined');
  const $ = window.jQuery;
  options.sync = (options.sync === false ? false : true);
  const type = __methodMap[method];
  let url;
  if (options.url) {
    url = (isFunction(options.url) ? options.url.bind(this) : options.url);
  } else {
    url = this.url;
    if (!this.isNew) url += this.id;
  }
  let data = null;
  if (options.data) {
    data = options.data;
  } else if (this.get && isFunction(this.get)) {
    data = this.get();
  }
  let processData = true;
  if (data && type !== 'GET' && type !== 'get') {
    data = JSON.stringify(data);
    processData = false;
  }
  this.dispatch({ type: REQUESTING });
  this.dispatch(actions.requesting());

  const success = function(data) {
    this.id = data[this.idAttribute] || null;
    this.isNew = false;
    this.dispatch({ type: REQUESTED });
    if (options.sync) {
      this.dispatch(actions.requested());
      this.dispatch(this.actions.sync(data));
    } else {
      this.dispatch(actions.requested(data));
    }
    if (options.success && isFunction(options.success)) {
      options.success(data);
    }
    if (this.afterRequest && isFunction(this.afterRequest)) {
      this.afterRequest(method, data);
    }
  }

  const error = function(err) {
    this.dispatch({ type: ERROR, err });
    this.dispatch(actions.error(err));
    if (options.error && isFunction(options.error)) {
      options.error(data);
    }
  }

  $.ajax({
    type,
    url,
    data,
    dataType: 'json',
    contentType: 'application/json',
    processData,
    success: success.bind(this),
    error: error.bind(this)
  });
}

export default __sync;
