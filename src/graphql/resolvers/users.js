import users from '../../database/mock/users';

class User {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
  }

  static getOne(id) {
    const user = users.find(user => user.id === id);
    return new User(user);
  }

  static getAll() {
    return users.map(user => new User(user));
  }
}

export default User;
