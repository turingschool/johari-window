import React, { Component } from 'react';
import './_delete_group.sass';

class DeleteGroup extends Component {
  constructor(){
    super()
    this.delete = this.delete.bind(this)
  }

  delete(){
    this.props.delete();
  }
  
  render() {
    return (
      <a onClick={this.delete} className='DeleteGroup'>Delete</a>
    );
  }
}

export default DeleteGroup;
