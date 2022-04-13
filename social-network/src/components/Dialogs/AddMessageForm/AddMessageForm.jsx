import {maxLengthCreator, required} from '../../../utils/validatos';
import {Field, reduxForm} from 'redux-form';
import {Textarea} from '../../common/FormControls/FormControls';
import React from 'react';

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
