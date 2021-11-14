import React from 'react';

class Switch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isSwitchOn: false
    };

    this.handleClick = this.handleClick.bind(this);
  };

  // De esta forma no se necesita hacer el bind. Experimental!
  // handleClick = () => {
  //   this.setState(prevState => ({
  //     isSwitchOn: !prevState.isSwitchOn
  //   }))
  // }

  handleClick() {
    this.setState(prevState => ({
      isSwitchOn: !prevState.isSwitchOn
    }))
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isSwitchOn ? 'ENCENDIDO' : 'APAGADO'}
      </button>
    )
  }
};

export default Switch;
