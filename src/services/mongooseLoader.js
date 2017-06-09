export const create = (model, input) => {
  return model.create(input);
};

export const find = (model, input) => {
  return model.find(input);
};

export const findOne = (model, id) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`${model.modelName}: ${id}`);
  }

  return model.findOne({ _id: id });
};

export const findMany = async (model, ids) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`${model.modelName}: [${ids.join(', ')}]`);
  }

  const values = await model.find({ _id: { $in: ids } });
  return normalizeValues(ids, '_id', key => key.toString())(values);
};

export const remove = (model, input) => {
  return model.remove(input);
};

const indexValues = (values, index, cacheKeyFunction = key => key) => {
  const indexedValues = new Map();
  values.forEach(value => {
    indexedValues.set(cacheKeyFunction(value[index]), value);
  });
  return indexedValues;
};

const normalizeValues = (ids, index, cacheKeyFunction = key => key) => {
  return values => {
    const indexedValues = indexValues(values, index, cacheKeyFunction);
    return ids.map(id => indexedValues.get(cacheKeyFunction(id)) || new Error(`Invalid ID: ${id}`));
  };
};

export default {
  create,
  find,
  findOne,
  findMany,
  remove
};
