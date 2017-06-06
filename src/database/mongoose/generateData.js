import faker from 'faker';
import random from 'lodash/random';
import times from 'lodash/times';

import MongooseService from '../../services/MongooseService';

import commentSchema from './models/Comment';
import postSchema from './models/Post';
import userSchema from './models/User';

const commentService = new MongooseService(commentSchema, 'comment');
const postService = new MongooseService(postSchema, 'post');
const userService = new MongooseService(userSchema, 'user');

const users = [];

const generateData = async () => {
  commentService.remove({});
  postService.remove({});
  userService.remove({});

  times(4, async () => {
    const user = await generateUser();

    times(random(2, 6), async () => {
      const post = await generatePost(user);

      times(random(2, 6), async () => {
        const comment = await generateComment(post, user);
      });
    });
  });
};

const generateUser = () => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();

  return userService.add({
    firstName,
    lastName,
    displayName: faker.internet.userName(firstName, lastName)
  });
};

const generatePost = user => {
  return postService.add({
    title: faker.lorem.words(6),
    body: `<p>${faker.lorem.paragraph()}</p>`,
    userId: user._id
  });
};

const generateComment = (post, user) => {
  return commentService.add({
    title: faker.lorem.words(6),
    body: `<p>${faker.lorem.paragraph()}</p>`,
    userId: user._id,
    postId: post._id
  });
};

export default generateData;
