import React from 'react';

// Componente de Clase
class Clase extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    }

    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    this.setState(state => ({
      contador: state.contador + 1
    }))
  }

  render() {
    return (
      <>
        <h3>Valor del contador {this.state.contador}</h3>
        <button onClick={this.handleClick}>
          +
        </button>
      </>
    )
  }
}

export default Clase;
