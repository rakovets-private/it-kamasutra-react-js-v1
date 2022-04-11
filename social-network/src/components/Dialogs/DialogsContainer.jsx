import {connect} from 'react-redux';
import {compose} from 'redux';
import Dialogs from './Dialogs';
import {addMessageActionCreator} from '../../redux/dialogs-reducer';
import withAuthRedirect from '../../hoc/withAuthRedirect';

let mapStateToProps = (state) => ({
  dialogs: state.dialogsPage.dialogs,
  messages: state.dialogsPage.messages,
  newMessageText: state.dialogsPage.newMessageText,
  isAuth: state.auth.isAuth
});

let mapDispatchToProps = (dispatch) => ({
  addMessage: (newMessageTest) => dispatch(addMessageActionCreator(newMessageTest))
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
