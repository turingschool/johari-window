import React, { Component } from 'react';
import './_group_list.sass';
import Group from './Group/Group';
import PostGroups from './PostGroups/PostGroups';

class GroupList extends Component {
  constructor(){
    super();
    this.delete = this.delete.bind(this);
    this.eachGroup = this.eachGroup.bind(this);
    this.post = this.post.bind(this);
  }

  post(){
    this.props.post();
  }

  delete(group){
    this.props.delete(group);
  }

  eachGroup(group, i){
    return <Group key={i} students={group} delete={this.delete} />
  }

  render() {
    return (
      <div className='GroupList'>
        <h1>Groups</h1>
        { this.props.groups.map(this.eachGroup) }
        <PostGroups post={this.post}/>
      </div>
    );
  }
}

export default GroupList;
