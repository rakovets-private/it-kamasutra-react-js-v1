import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import {connect} from 'react-redux';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
});

let mapDispatchToProps = (dispatch) => ({
  addPost: (text) => dispatch(addPostActionCreator(text))
});

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
