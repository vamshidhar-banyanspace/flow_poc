import React from 'react';

const withComponent = (WrapperComponent, incrNumber) => {
  class NewComponent extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        count: 0
      }

      this.increment = this.increment.bind(this)
    }

    increment = () => {
      this.setState(prevState => {
        return {count: prevState.count + incrNumber}
      })
    }

    render(){
      console.log(this.props.name);
      return <WrapperComponent
                name='Vamshidhar'
                count={this.state.count}
                increment={this.increment}
                {...this.props} />
    }
  }
  return NewComponent
}

export default withComponent
