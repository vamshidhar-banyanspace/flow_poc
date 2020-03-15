import React from 'react';
import withComponent from './withCounter'

class ClickComponent extends React.Component{

  render(){
    const {name, count, increment} = this.props
    return(
      <div>
        <button className="Button" onClick={increment}>{this.props.name}, you clicked it {count} times</button>
      </div>
    )
  }
}

export default withComponent(ClickComponent, 10)
