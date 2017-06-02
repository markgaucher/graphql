import posts from '../../database/mock/posts';

class Post {
  constructor(post) {
    this.id = post.id;
    this.title = post.title;
    this.userId = post.userId;
  }

  static getOne(id) {
    const post = posts.find(post => post.id === id);
    return new Post(post);
  }

  static getAll() {
    return posts.map(post => new Post(post));
  }

  static getAllByUser(userId) {
    const filteredPosts = posts.filter(post => post.userId === userId);
    return filteredPosts.map(post => new Post(post));
  }
}

export default Post;
