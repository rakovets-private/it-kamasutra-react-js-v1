import React from 'react';

class ProfileStatus extends React.Component {
  state = {
    editMode: false
  }

  toggleEditMode = () => {
    (this.state.editMode)
      ? this.setState({editMode: false})
      : this.setState({editMode: true})
  }

  render() {
    return (
      <div>
        {this.state.editMode
          ? <div><input type="text" onBlur={this.toggleEditMode} autoFocus={true} value={this.props.status}/></div>
          : <div><span onDoubleClick={this.toggleEditMode}>{this.props.status}</span></div>
        }
      </div>
    )
  }
}

export default ProfileStatus;
