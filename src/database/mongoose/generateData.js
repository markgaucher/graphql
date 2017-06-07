import faker from 'faker';
import random from 'lodash/random';

import EntityService from '../../services/EntityService';

import commentSchema from './models/Comment';
import postSchema from './models/Post';
import userSchema from './models/User';

const commentService = new EntityService(commentSchema, 'comment');
const postService = new EntityService(postSchema, 'post');
const userService = new EntityService(userSchema, 'user');

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

// an async times function
const times = async (x, callback) => {
  const result = [];
  for (let y = 0; y < x; ++y) {
    result.push(await callback());
  }
  return result;
};

export default generateData;
