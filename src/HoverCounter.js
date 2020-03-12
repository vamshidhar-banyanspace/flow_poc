import React from 'react';
import UpdatedComponent from './withCounter'

class HoverComponent extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      count: 0
    }
  }

  incrementCounter = () => {
    this.setState(prevState => {
      return {count: prevState.count + 1}
    })
  }

  render(){
    return(
      <h3 onMouseOver={this.incrementCounter}>{this.props.name}, you hovered {this.state.count} times</h3>
    )
  }
}

export default UpdatedComponent(HoverComponent)
