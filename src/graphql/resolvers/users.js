import MongooseService from '../../services/MongooseService';
import userSchema from '../../database/mongoose/models/User';

const userService = new MongooseService(userSchema, 'user');

class User {
  constructor(user) {
    this.id = user._id;
    this.displayName = user.displayName;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
  }

  static async getOne(id) {
    if (process.env.NODE_ENV === 'development') {
      console.log(`User: ${id}`);
    }

    try {
      const user = await userService.findOne({ _id: id });
      return new User(user);
    } catch (error) {
      return new Error(error);
    }
  }

  static async getAll() {
    if (process.env.NODE_ENV === 'development') {
      console.log(`User: *`);
    }

    try {
      const users = await userService.find();
      return users.map(user => new User(user));
    } catch (error) {
      return new Error(error);
    }
  }
}

export default User;
