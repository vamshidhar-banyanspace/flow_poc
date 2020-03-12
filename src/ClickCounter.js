import React from 'react';
import UpdatedComponent from './withCounter'

class ClickComponent extends React.Component{
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
      <div>
        <button className="Button" onClick={this.incrementCounter}>{this.props.name}, you clicked it {this.state.count} times</button>
      </div>
    )
  }
}

export default UpdatedComponent(ClickComponent)
