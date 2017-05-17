import React, { Component } from 'react';
import './_my_window_adjective.sass';

class MyWindowAdjective extends Component {

  render() {
    const opacity = (this.props.frequency/2) + .5
    const style = { opacity: opacity }
    return (
      <div className='MyWindowAdjective'>
        <li className='johari-window-adjective' style={ style }>{ this.props.name }</li>
      </div>
    )
  }

}

export default MyWindowAdjective;
