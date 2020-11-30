import React, { Component } from 'react';

// class Formulario extends React.Component {
class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      email: '',
      fecha: new Date()
    };
    this.cambiarNombre = this.cambiarNombre.bind(this);
    this.cambiarFecha = this.cambiarFecha.bind(this)
    // Logica antes de renderizar el componente se hace aca
    // Ya no se usa componentWillMount
  }
  cambiarNombre(e) {
    this.setState({
      nombre: e.target.value,
    });
  }
  cambiarFecha() {
    this.setState({
      fecha: new Date()
    })
  }
  render() {
    // let elem = document.getElementById('elemento')
    // console.log(elem); // -->null
    return (
      <div className="ed-grid">
        <h4> Fecha actual: { Math.ceil(this.state.fecha / 1000 )} </h4>
        <h1>Formulario {this.props.name}</h1>
        <form id="elemento">
          <div className="ed-grid m-grid-3">
            <div className="form__item">
              <label>Nombre completo</label>
              <input type="text" onChange={this.cambiarNombre} />
            </div>
            <div className="form__item">
              <label>Email</label>
              <input
                type="text"
                onChange={(e) =>
                  this.setState({
                    email: e.target.value,
                  })
                }
              />
            </div>
            <div className="form__item">
              <input className="button full" type="submit" value="Enviar" />
            </div>
          </div>
        </form>
        {`tu nombre es: ${this.state.nombre}`}
        <br />
        {`tu email es: ${this.state.email}`}
      </div>
    );
  }
  // Se ejecuta luego del render y se puede manipular el DOM
  componentDidMount() {
    // let elem = document.getElementById('elemento')
    // console.log(elem); // -->nul
    // console.log('Componente montado')
    this.intervaloFecha = setInterval(() => {
      this.cambiarFecha()
      console.log(new Date());
    }, 1000)
  }
  // se actualiza cuando cambia el estado
  componentDidUpdate(prevProps, prevUpdate) {
    // console.log('componentDidUpdate');
    // console.log(prevProps);
    // console.log(prevUpdate);
  }

  // cuando el componente se desmonta
  componentWillUnmount() {
    clearInterval(this.intervaloFecha)
  }

}
export default Formulario;
