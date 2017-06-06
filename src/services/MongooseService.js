export default class MongooseService {
  constructor(schema, name) {
    this.schema = schema;
    this.name = name;
  }

  async add(input) {
    const result = await this.schema.create(input);

    if (!result) {
      throw `Unable to create ${this.name}.`;
    }

    return result;
  }

  async find(input) {
    const result = await this.schema.find(input);
    return result;
  }

  async findOne(input) {
    const result = await this.schema.findOne(input);

    if (!result) {
      throw `Unable to find item of type ${this.name}.`;
    }

    return result;
  }

  async remove(input) {
    const result = await this.schema.remove(input);
    return result;
  }
}
