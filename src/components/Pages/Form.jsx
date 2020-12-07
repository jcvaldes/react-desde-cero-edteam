import React, { Component } from 'react';

// class Formulario extends React.Component {
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      date: new Date()
    };
    this.changeName = this.changeName.bind(this);
    this.changeDate = this.changeDate.bind(this)
    // Logica antes de renderizar el componente se hace aca
    // Ya no se usa componentWillMount
  }
  changeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  changeDate() {
    this.setState({
      date: new Date()
    })
  }
  render() {
    // let elem = document.getElementById('elemento')
    // console.log(elem); // -->null
    return (
      <div className="ed-grid">
        <h4> Fecha actual: { Math.ceil(this.state.fecha / 1000 )} </h4>
        <h1>Formulario {this.props.name}</h1>
        <form id="form-element">
          <div className="ed-grid m-grid-3">
            <div className="form__item">
              <label>Nombre completo</label>
              <input type="text" onChange={this.changeName} />
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
        {`tu nombre es: ${this.state.name}`}
        <br />
        {`tu email es: ${this.state.email}`}
      </div>
    );
  }
  // Se ejecuta luego del render y se puede manipular el DOM
  componentDidMount() {
    // let elem = document.getElementById('form-element')
    // console.log(elem); // -->nul
    // console.log('Componente montado')
    this.intervaloFecha = setInterval(() => {
      this.changeDate()
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
export default Form;
