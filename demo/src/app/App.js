import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      _id: "",
      nombre: "",
      apellido: "",
      saldo: "",
      empresa: "",
      clientes: [],
      mensaje: false,
      message: "",
    };
    this.sendClient = this.sendClient.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.timeMesagge = null;
    this.closeMessage = this.closeMessage.bind(this);
  }

  // Al montarse el componente se solicitan los registros de clientes en la DB
  componentDidMount() {
    this.getCustomers();
  }

  // Reinicia configuración de mensajes
  closeMessage() {
    clearInterval(this.timeMesagge);
    this.setState({ mensaje: false, message: "" });
  }

  // Envio de los datos del cliente
  sendClient(e) {
    e.preventDefault();

    // Si el ID de cliente existe, entonces se hace una actualización del registro
    if (this.state._id) {
      fetch(`/api/${this.state._id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
      })
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            _id: "",
            nombre: "",
            apellido: "",
            saldo: "",
            empresa: "",
            mensaje: true,
            message: "El cliente se actualizo!",
          });
          this.getCustomers(); // Se actualiza la tabla de clientes
          this.timeMesagge = setInterval(this.closeMessage, 3000); // Muestra el mensane durante 3 segundos
        })
        .catch((err) => console.log(err));
    }

    // Si el ID no existe, entonces se inserta en la DB un nuevo cliente
    else {
      fetch("/api", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
      })
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            nombre: "",
            apellido: "",
            saldo: "",
            empresa: "",
            mensaje: true,
            message: "El cliente se almaceno!",
          });
          this.getCustomers();
          this.timeMesagge = setInterval(this.closeMessage, 3000);
        })
        .catch((err) => console.log(err));
    }
  }

  // Escucha los cambios sobre los input
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  // Obtiene todos los registros de clientes en la DB
  getCustomers() {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ clientes: data.clientes });
      })
      .catch((err) => console.log(err));
  }

  // Actualiza los valores del formulario realizando una consulta a la DB con el id recibido
  editClient(id) {
    fetch(`/api/${id}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          _id: data.cliente._id,
          nombre: data.cliente.nombre,
          apellido: data.cliente.apellido,
          saldo: data.cliente.saldo,
          empresa: data.cliente.empresa,
        });
      });
  }

  // Elimina el cliente cuyo ID coincide
  deleteClient(id) {
    fetch(`/api/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          mensaje: true,
          message: 'El cliente se elimino!'
        })
        this.getCustomers();
        this.timeMesagge = setInterval(this.closeMessage, 3000);
      });
  }

  render() {
    return (
      <div>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a href="/" className="navbar-brand">
              Proyecto Demo - W09 - Clientes
            </a>
          </div>
        </nav>

        <div className="container">
          {/* Mensaje */}
          <div className="row">
            <div className="col-12">
              {this.state.mensaje ? (
                <div className="alert alert-success" role="alert">
                  <p className="mb-0">{this.state.message}</p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="row">
            {/* Formulario Cliente */}
            <div className="col-4">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Cliente</h4>
                  <form onSubmit={this.sendClient}>
                    <div className="row">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="nombre"
                          value={this.state.nombre}
                          onChange={this.handleChange}
                          placeholder="Nombre"
                        ></input>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="apellido"
                          value={this.state.apellido}
                          onChange={this.handleChange}
                          placeholder="Apellido"
                        ></input>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="number"
                          name="saldo"
                          value={this.state.saldo}
                          onChange={this.handleChange}
                          placeholder="$"
                        ></input>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="empresa"
                          value={this.state.empresa}
                          onChange={this.handleChange}
                          placeholder="Empresa"
                        ></input>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn-success form-control"
                        >
                          Guardar
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Tabla Clientes */}
            <div className="col-8">
              <table className="table">
                <thead>
                  <tr>
                    <td>Nombre</td>
                    <td>Apellido</td>
                    <td>Saldo</td>
                    <td>Empresa</td>
                    <td>Opciones</td>
                  </tr>
                </thead>
                <tbody>
                  {this.state.clientes.map((cliente) => {
                    return (
                      <tr key={cliente._id}>
                        <td>{cliente.nombre}</td>
                        <td>{cliente.apellido}</td>
                        <td>{cliente.saldo}</td>
                        <td>{cliente.empresa}</td>
                        <td>
                          <button
                            className="btn btn-info"
                            onClick={() => this.editClient(cliente._id)}
                          >
                            <i className="small material-icons">edit</i>
                          </button>
                          <button
                            className="btn btn-danger ml-3"
                            onClick={() => this.deleteClient(cliente._id)}
                          >
                            <i className="small material-icons">delete</i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
