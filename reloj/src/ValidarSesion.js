import React from 'react';

class ValidarSesion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      session: false
    };

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick() {
    this.setState({
      session: true
    });
  }

  handleLogoutClick() {
    this.setState({
      session: false
    });
  }

  render() {
    const session = this.state.session
    let button;
    if (session) {
      button = <ButtonLogout onClick={this.handleLogoutClick}/>
    } else {
      button = <ButtonLogin onClick={this.handleLoginClick}/>
    }
    return (
      <>
        <Validar session={session}/>
        {button}
      </>
    )
  }
}

function ButtonLogin(props) {
  return (
    <button onClick={props.onClick}>
      Iniciar Sesión
    </button>
  )
}

function ButtonLogout(props) {
  return (
    <button onClick={props.onClick}>
      Cerrar Sesión
    </button>
  )
}

function Validar(props) {
  const session = props.session;
  if (session) {
    return <IsLogged/>
  } else {
    return <NoLogged/>
  }
}

function IsLogged() {
  return <h1>Estas logueado!</h1>;
}

function NoLogged() {
  return <h1>Debe iniciar sesión para continuar!</h1>
}

export default ValidarSesion;
