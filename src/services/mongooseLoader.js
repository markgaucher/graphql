export const create = (Schema, input) => {
  return Schema.create(input);
};

export const find = (Schema, input) => {
  return Schema.find(input);
};

export const findOne = (Schema, input) => {
  return Schema.findOne(input);
};

export const remove = (Schema, input) => {
  return Schema.remove(input);
};

export default {
  create,
  find,
  findOne,
  remove
};
