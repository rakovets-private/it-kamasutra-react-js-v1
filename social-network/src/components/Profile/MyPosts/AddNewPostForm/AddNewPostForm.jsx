import React from "react";
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../../utils/validatos';
import {Textarea} from '../../../common/FormControls/FormControls';

let maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return (<form onSubmit={props.handleSubmit}>
    <div className={"sender"}>
      <div><Field component={Textarea} name='newPost' placeholder='My new post' validate={[required, maxLength10]}/>
      </div>
      <div><input type='submit' value='Add post'/></div>
    </div>
  </form>);
}

export default reduxForm({form: 'myPostAddPostForm'})(AddNewPostForm);
