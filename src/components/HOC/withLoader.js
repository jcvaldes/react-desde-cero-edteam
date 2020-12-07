import React, { Component } from "react"
// funcion que devuelve otra funcion
// const withLoader = (propValue, WrappedComponent) => {
  const withLoader = (propValue) => (WrappedComponent) => {
    return class WithLoader extends Component {

        render() {
            return  this.props[propValue].length === 0
            ? <h1>Cargando ...</h1>
            : <WrappedComponent {...this.props} />
        }

    }
}

export default withLoader
