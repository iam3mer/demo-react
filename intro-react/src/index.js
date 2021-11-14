import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import logo from './logo.svg';

// const saludo = <h1>Hola Tripulantes!</h1>;

class Saludo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    };
  }

  contar() {
    this.setState(state => ({
      contador: state.contador + 5
    }));
  }

  componentDidMount() {
    setInterval(() => this.contar(), 1000);
  }

  render() {
    return React.createElement(
      "div",
      null,
      this.props.saludo
      // <div>
      //   {this.props.saludo}
      //   {this.state.contador}
      // </div>
    );
  }
}

// JSX
const image = React.createElement(
  "img",
  {
    src: logo,
    className: "icon-image",
  } 
  );

const container = React.createElement(
  "div",
  {
    className: "icon-contanier",
  },
  image
)

const icon = React.createElement(
  "icon",
  {
    className: "avatarContainer",
  },
  container
)

/*
<icon class="avatarContainer">
  <div class="icon-contanier">
    <img src="/static/media/logo.6ce24c58.svg" class="icon-image">
  </div>
</icon>
*/

const Icon = (
  <div className="icon-contanier">
    <img src={logo} className="icon-image" />
  </div>
)

ReactDOM.render(
  React.createElement(Saludo, {saludo: saludo}),
  document.getElementById('root')
);
// ReactDOM.render(
//   <React.StrictMode>
//     <Saludo saludo={saludo}/>
//     {Icon}
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
