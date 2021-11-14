import React from "react";

// V1
// function reloj() {
//   const hora = (
//     <div>
//       <h1>
//         Son las {new Date().toLocaleTimeString()}
//       </h1>
//     </div>
//   );
//   ReactDOM.render(hora, document.getElementById('root'));
// }

// setInterval(reloj, 1000)

// V2
// function Reloj(props) {
//   return (
//     <div>
//       <h1>
//         Son las {props.fecha.toLocaleTimeString()}
//       </h1>
//     </div>
//   );
// }

// function temporizador() {
//   ReactDOM.render(
//     <Reloj fecha={new Date()}/>,
//     document.getElementById('root')
//   )
// }

// setInterval(temporizador, 1000);

// V3.1
// class Reloj extends React.Component {

//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <h1>
//           Son las {this.props.fecha.toLocaleTimeString()}
//         </h1>
//       </div>
//     );
//   }
// }

// function temporizador() {
//   ReactDOM.render(
//     <Reloj fecha={new Date()}/>,
//     document.getElementById('root')
//   )
// }

// setInterval(temporizador, 1000);

// V3.2
class Reloj extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fecha: new Date()
    };
  }

  // Metodo de ciclo de vida: Se ejecuta inmediatamente despues de la renderización inicial del componente
  componentDidMount() {
    this.timer = setInterval(
      () => this.temporizador(),
      1000
    )
  }

  // Metodo de ciclo de vida: Se ejecuta antes de desmontar y dustruir el componente
  componentWillUnmount() {
    clearInterval(this.timer)
  }

  // Este metodo actualiza mediante un temporizador el estado de fecha por la fecha actual
  temporizador() {
    this.setState({
      fecha: new Date()
    });
  }

  render() {
    return (
      <>
        <h1>
          <Fecha fecha={this.state.fecha}/>
          <br/>
          {this.state.fecha.toLocaleTimeString()}
        </h1>
      </>
    );
  }
}

function Fecha (props) {
  return (
    <>
      {props.fecha.toLocaleDateString()}
    </>
  )
}

export default Reloj;
