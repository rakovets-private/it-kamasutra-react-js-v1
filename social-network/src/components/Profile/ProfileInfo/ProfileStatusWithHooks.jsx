import React, {useState} from 'react';

const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.userStatus);

  const activateEditMode = () => {
    setEditMode(true);
  }
  
  const deactivateEditMode = () => {
    setEditMode(false);
    props.setUserStatusTrunkCreator(status);
  }

  const onChangeUserStatus = (e) => {
    setStatus(e.currentTarget.value);
  }
  
  return (
    <div>
      {editMode
        ? <div><input type="text" value={status}
                      autoFocus={true}
          onBlur={deactivateEditMode}
          onChange={onChangeUserStatus}
        /></div>
        : <div><span
          onDoubleClick={activateEditMode}
        >{status || '...'}</span></div>
      }
    </div>
  )
}

export default ProfileStatusWithHooks;
