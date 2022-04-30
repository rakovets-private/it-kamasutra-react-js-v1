import {addPostActionCreator, profileReducer, removePostActionCreator} from './profile-reducer';

it('length of posts should be incremented', () => {
  // GIVEN
  let action = addPostActionCreator("test post");
  let state = {
    postCounter: 10,
    posts: [
      {id: 1, message: "Hi, how are you?", countLike: 1},
      {id: 2, message: "It's my first post", countLike: 2},
      {id: 3, message: "WTF?!", countLike: 3},
      {id: 4, message: "Oops!", countLike: 7},
    ],
  }
  
  // WHEN
  let outputState = profileReducer(state, action);
  
  // THEN
  expect(outputState.posts.length).toBe(5);
})

it('after deleting length of posts should be decrement', () => {
  // GIVEN
  let action = removePostActionCreator(4);
  let inputState = {
    posts: [
      {id: 1, message: "Hi, how are you?", countLike: 1},
      {id: 2, message: "It's my first post", countLike: 2},
      {id: 3, message: "WTF?!", countLike: 3},
      {id: 4, message: "Oops!", countLike: 7},
    ],
  }
  
  // WHEN
  let outputState = profileReducer(inputState, action);
  
  // THEN
  expect(outputState.posts.length).toBe(3);
})
