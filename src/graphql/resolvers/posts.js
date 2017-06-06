import MongooseService from '../../services/MongooseService';
import postSchema from '../../database/mongoose/models/Post';

const postService = new MongooseService(postSchema, 'post');

class Post {
  constructor(post) {
    this.id = post._id;
    this.body = post.body;
    this.title = post.title;
    this.userId = post.userId;
  }

  static async getOne(id) {
    if (process.env.NODE_ENV === 'development') {
      console.log(`Post: ${id}`);
    }

    try {
      const post = await postService.findOne({ _id: id });
      return new Post(post);
    } catch (error) {
      return new Error(error);
    }
  }

  static async getAll() {
    if (process.env.NODE_ENV === 'development') {
      console.log(`Post: *`);
    }

    try {
      const posts = await postService.find();
      return posts.map(post => new Post(post));
    } catch (error) {
      return new Error(error);
    }
  }

  static async getAllByUser(userId) {
    if (process.env.NODE_ENV === 'development') {
      console.log(`Post: User(${userId})`);
    }

    try {
      const filteredPosts = postService.find({ userId });
      return filteredPosts.map(post => new Post(post));
    } catch (error) {
      return new Error(error);
    }
  }
}

export default Post;
