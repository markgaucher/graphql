class Comment {
  constructor(comment) {
    this.id = comment._id;
    this.body = comment.body;
    this.postId = comment.postId;
    this.title = comment.title;
    this.userId = comment.userId;
  }

  static async add(commentLoader, input) {
    try {
      const comment = await commentLoader.add(input);
      return new Comment(comment);
    } catch (error) {
      return new Error(error);
    }
  }

  static async getOne(commentLoader, id) {
    try {
      const comment = await commentLoader.load(id);
      return new Comment(comment);
    } catch (error) {
      return new Error(error);
    }
  }

  static async getAll(commentLoader) {
    try {
      const comments = await commentLoader.find();
      return comments.map(comment => new Comment(comment));
    } catch (error) {
      return new Error(error);
    }
  }

  static async getAllByPost(commentLoader, postId) {
    try {
      const filteredComments = commentLoader.find({ postId });
      return filteredComments.map(comment => new Comment(comment));
    } catch (error) {
      return new Error(error);
    }
  }
}

export default Comment;
