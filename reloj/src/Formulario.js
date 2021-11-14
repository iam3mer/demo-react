import React from 'react';

class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valorInput: '',
      valorTextarea: '',
      valorSelect: 'bogota',
      valorMultipleSelect: [],
      auxVMSelect: 'gato'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    // console.log(e);
    console.log(`El input recibido es: ${this.state.valorInput}`);
    console.log(`La información de la caja de texto es: ${this.state.valorTextarea}`);
    console.log(`Valor del selector: ${this.state.valorSelect}`);
    console.log(`Valor del selector multiple: ${this.state.valorMultipleSelect}`);
    e.preventDefault();
  }

  handleChange(e) {
    if (e.target.name === 'campo') {
      this.setState({
        valorInput: e.target.value
      });
    };
    if (e.target.name === 'caja') {
      this.setState({
        valorTextarea: e.target.value
      });
    };
    if (e.target.name === 'selector') {
      this.setState({
        valorSelect: e.target.value
      });
    };
    if (e.target.name === 'selectorMultiple') {
      this.setState(state => {
        state.auxVMSelect = e.target.value;
        const valorMultipleSelect = state.valorMultipleSelect.concat(e.target.value);
        return {
          valorMultipleSelect,
          auxVMSelect: '',
        }
      })
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Input </label>
        <input type="text" name="campo" value={this.state.valorInput} onChange={this.handleChange}/>
        <br/>
        <label>textarea </label>
        <textarea name="caja" value={this.state.valorTextarea} onChange={this.handleChange}></textarea>
        <br/>
        <label>Selector Simple </label>
        <select name="selector" value={this.state.valorSelect} onChange={this.handleChange}>
          <option value="pereira">Pereira</option>
          <option value="manizales">Manizales</option>
          <option value="armenia">Armenia</option>
          <option value="bogota">Bogotá</option>
        </select>
        <br/>
        <label>Selector Multiple</label>
        <select name="selectorMultiple" multiple={true} value={this.valorMultipleSelect} onChange={this.handleChange}>
          <option value="gato">Gato</option>
          <option value="perro">Perro</option>
          <option value="conejo">Conejo</option>
        </select>
        <br/>
        <button type="submit">Enviar</button>
      </form>
    )
  }
}

export default Formulario;
