import DataLoader from 'dataloader';

import mongooseLoader from './mongooseLoader';

export default class EntityLoader {
  constructor(model, name) {
    this.model = model;
    this.name = name;

    this.entityLoader = new DataLoader(ids => {
      console.log(`${this.model.modelName}: ${ids}`);
      return mongooseLoader.findMany(this.model, ids);
    });
  }

  async add(input) {
    const result = await mongooseLoader.create(this.model, input);

    if (!result) {
      throw `Unable to create entity: ${this.name}.`;
    }

    return result;
  }

  async load(id) {
    const result = await this.entityLoader.load(id);

    if (!result) {
      throw `Unable to find entity: ${this.name}(${id})`;
    }

    return result;
  }

  async loadMany(ids) {
    const result = await this.entityLoader.loadMany(ids);

    if (!result) {
      throw `Unable to find entity: ${this.name}([${ids.map(id => id)}])`;
    }

    return result;
  }

  async find(input) {
    const result = await mongooseLoader.find(this.model, input);
    return result;
  }

  async remove(input) {
    const result = await mongooseLoader.remove(this.model, input);
    return result;
  }
}
