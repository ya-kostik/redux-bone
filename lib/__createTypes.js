import isString from 'lodash/isString';
import isObject from 'lodash/isPlainObject';

const __createTypes = (context, prefix, typesAdd) => {
  const classType = context.constructor.__dangerDontUseThisType;
  const classTypesList = context.constructor.__dangerDontUseThisTypesList;
  if (isString(prefix)) {
    context.PREFIX = prefix;
  } else {
    context.PREFIX = '@@Redbone/' + classType +
      '/' + context.constructor.name + '/';
  }
  if (context.pid) {
    context.PREFIX += context.pid + '/';
  }
  let types = {};
  Object.keys(classTypesList).forEach((key) => {
    const type = key.toUpperCase() + '_';
    types[type + 'REQUESTING'] = context.PREFIX + type + 'REQUESTING';
    types[type + 'REQUESTED'] = context.PREFIX + type + 'REQUESTED';
    types[type + 'ERROR'] = context.PREFIX + type + 'ERROR';
  });
  context.TYPES = types;
  if (isObject(typesAdd)) {
    context.addTypes(typesAdd, true);
  }
  if (context.constructor.TYPES) {
    context.addTypes(context.constructor.TYPES, true);
  }
}

export default __createTypes;
