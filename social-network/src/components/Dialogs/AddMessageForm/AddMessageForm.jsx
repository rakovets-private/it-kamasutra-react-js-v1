import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validatos';
import {Textarea} from '../../common/FormControls/FormControls';

let maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
  return (<form onSubmit={props.handleSubmit}>
    <div><Field
      component={Textarea}
      name='newMessageText'
      placeholder='My new message'
      validate={[required, maxLength100]}/></div>
    <div><input type='submit' value='Add message'/></div>
  </form>);
}

export default reduxForm({form: 'dialogsAddMessageForm'})(AddMessageForm);
