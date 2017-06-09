class User {
  constructor(user) {
    this.id = user._id;
    this.displayName = user.displayName;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
  }

  static async add(userLoader, input) {
    try {
      const user = await userLoader.add(input);
      return new User(user);
    } catch (error) {
      return new Error(error);
    }
  }

  static async getOne(userLoader, id) {
    try {
      const user = await userLoader.load(id);
      return new User(user);
    } catch (error) {
      return new Error(error);
    }
  }

  static async getAll(userLoader) {
    try {
      const users = await userLoader.find();
      return users.map(user => new User(user));
    } catch (error) {
      return new Error(error);
    }
  }
}

export default User;
