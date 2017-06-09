import { GraphQLNonNull, GraphQLObjectType } from 'graphql';

import commentTypes from '../types/Comment';
import postTypes from '../types/Post';
import userTypes from '../types/User';

import comments from '../loaders/comments';
import posts from '../loaders/posts';
import users from '../loaders/users';

const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    addComment: {
      type: commentTypes.AddCommentPayload,
      description: 'Add a comment.',
      args: {
        input: {
          type: new GraphQLNonNull(commentTypes.AddCommentInput)
        }
      },
      resolve: (source, args, context, info) => {
        return comments.add(context.loaders.commentLoader, args.input);
      }
    },
    addPost: {
      type: postTypes.AddPostPayload,
      description: 'Add a post.',
      args: {
        input: {
          type: new GraphQLNonNull(postTypes.AddPostInput)
        }
      },
      resolve: (source, args, context, info) => {
        return posts.add(context.loaders.postLoader, args.input);
      }
    },
    addUser: {
      type: userTypes.AddUserPayload,
      description: 'Add a user.',
      args: {
        input: {
          type: new GraphQLNonNull(userTypes.AddUserInput)
        }
      },
      resolve: (source, args, context, info) => {
        return users.add(context.loaders.userLoader, args.input);
      }
    }
  })
});

export default mutationType;
