import {renderEntireTree} from '../render';

let state = {
  profilePage: {
    newPostText: '',
    posts: [
      {id: 1, message: "Hi, how are you?", countLike: 1},
      {id: 2, message: "It's my first post", countLike: 2},
      {id: 3, message: "WTF?!", countLike: 3},
      {id: 4, message: "Oops!", countLike: 7},
    ],
  },
  dialogsPage: {
    dialogs: [
      {id: 1, name: "Ivan"},
      {id: 2, name: "Daniel"},
      {id: 3, name: "Viktor"},
      {id: 4, name: "Valentina"},
    ],
    messages: [
      {id: 1, message: "Hi"},
      {id: 2, message: "Hello"},
      {id: 3, message: "It's me!"},
      {id: 4, message: "Cool"},
    ]
  }
}

let counter = 10;

export let addPost = (post) => {
  counter++;
  let newPost = {
    id: counter,
    message: post,
    countLike: 0
  }
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  render();
}

export let updateNewPostText = (text) => {
  state.profilePage.newPostText = text;
  render();
}

let render = () => {
  renderEntireTree(state, addPost, updateNewPostText)
}

export default state;
