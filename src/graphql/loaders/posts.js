class Post {
  constructor(post) {
    this.id = post._id;
    this.body = post.body;
    this.title = post.title;
    this.userId = post.userId;
  }

  static async add(postLoader, input) {
    try {
      const post = await postLoader.add(input);
      return new Post(post);
    } catch (error) {
      return new Error(error);
    }
  }

  static async getOne(postLoader, id) {
    try {
      const post = await postLoader.load(id);
      return new Post(post);
    } catch (error) {
      return new Error(error);
    }
  }

  static async getAll(postLoader) {
    try {
      const posts = await postLoader.find();
      return posts.map(post => new Post(post));
    } catch (error) {
      return new Error(error);
    }
  }

  static async getAllByUser(postLoader, userId) {
    try {
      const filteredPosts = postLoader.find({ userId });
      return filteredPosts.map(post => new Post(post));
    } catch (error) {
      return new Error(error);
    }
  }
}

export default Post;
