import EntityService from '../../services/EntityService';
import commentSchema from '../../database/mongoose/models/Comment';

const commentService = new EntityService(commentSchema, 'comment');

class Comment {
  constructor(comment) {
    this.id = comment._id;
    this.body = comment.body;
    this.postId = comment.postId;
    this.title = comment.title;
    this.userId = comment.userId;
  }

  static async getOne(id) {
    if (process.env.NODE_ENV === 'development') {
      console.log(`Comment: ${id}`);
    }

    try {
      const comment = await commentService.getById(id);
      return new Comment(comment);
    } catch (error) {
      return new Error(error);
    }
  }

  static async getAll() {
    if (process.env.NODE_ENV === 'development') {
      console.log(`Comment: *`);
    }

    try {
      const comments = await commentService.find();
      return comments.map(comment => new Comment(comment));
    } catch (error) {
      return new Error(error);
    }
  }

  static async getAllByPost(postId) {
    if (process.env.NODE_ENV === 'development') {
      console.log(`Comment: Post(${postId})`);
    }

    try {
      const filteredComments = commentService.find({ postId });
      return filteredComments.map(comment => new Comment(comment));
    } catch (error) {
      return new Error(error);
    }
  }
}

export default Comment;
