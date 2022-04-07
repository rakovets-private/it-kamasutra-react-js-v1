import React from 'react';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    userStatus: this.props.userStatus
  }

  toggleEditMode = () => {
    if (this.state.editMode) {
      this.setState({editMode: false});
      this.props.setUserStatusTrunkCreator(this.state.userStatus);
    } else {
      this.setState({editMode: true});
    }
  }

  onChangeUserStatus = (e) => {
    this.setState({userStatus: e.currentTarget.value});
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.userStatus !== this.props.userStatus) {
      this.setState({userStatus: this.props.userStatus});
    }
  }

  render() {
    return (
      <div>
        {this.state.editMode
          ? <div><input type="text" value={this.state.userStatus}
                        autoFocus={true}
                        onBlur={this.toggleEditMode}
                        onChange={this.onChangeUserStatus}
          /></div>
          : <div><span onDoubleClick={this.toggleEditMode}>{this.props.userStatus || '...'}</span></div>
        }
      </div>
    )
  }
}

export default ProfileStatus;
