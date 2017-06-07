import mongooseLoader from './mongooseLoader';

export default class EntityService {
  constructor(schema, name) {
    this.schema = schema;
    this.name = name;
  }

  async add(input) {
    const result = await mongooseLoader.create(this.schema, input);

    if (!result) {
      throw `Unable to create entity: ${this.name}.`;
    }

    return result;
  }

  async getById(id) {
    const result = await mongooseLoader.findOne(this.schema, { _id: id });

    if (!result) {
      throw `Unable to find entity: ${this.name}(${id})`;
    }

    return result;
  }

  async find(input) {
    const result = await mongooseLoader.find(this.schema, input);
    return result;
  }

  async remove(input) {
    const result = await mongooseLoader.remove(this.schema, input);
    return result;
  }
}
