import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import {connect} from 'react-redux';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText
});

let mapDispatchToProps = (dispatch) => ({
  updateNewPostText: (text) => {
    dispatch(updateNewPostTextActionCreator(text))
  },
  addPost: (text) => dispatch(addPostActionCreator(text))
});

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
