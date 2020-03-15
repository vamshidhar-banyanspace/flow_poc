import React from 'react';
import withComponent from './withCounter'

class HoverComponent extends React.Component{


  render(){
    const {name, count, increment} = this.props
    return(
      <h3 onMouseOver={increment}>{name}, you hovered {count} times</h3>
    )
  }
}

export default withComponent(HoverComponent, 5)
