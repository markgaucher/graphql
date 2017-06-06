import faker from 'faker';
import random from 'lodash/random';

import MongooseService from '../../services/MongooseService';

import commentSchema from './models/Comment';
import postSchema from './models/Post';
import userSchema from './models/User';

const commentService = new MongooseService(commentSchema, 'comment');
const postService = new MongooseService(postSchema, 'post');
const userService = new MongooseService(userSchema, 'user');

const generateData = async () => {
  await removeData();

  const users = await times(8, generateUser);
  const posts = await times(16, () => generatePost(users[random(0, users.length - 1)]));
  const comments = await times(64, () =>
    generateComment(posts[random(0, posts.length - 1)], users[random(0, users.length - 1)])
  );
};

const removeData = async () => {
  await commentService.remove({});
  await postService.remove({});
  await userService.remove({});
};

const generateUser = async () => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();

  const user = await userService.add({
    firstName,
    lastName,
    displayName: faker.internet.userName(firstName, lastName)
  });

  return user;
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

// an async times function
const times = async (x, callback) => {
  const result = [];
  for (let y = 0; y < x; ++y) {
    result.push(await callback());
  }
  return result;
};

export default generateData;
