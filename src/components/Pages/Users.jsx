import React, { Component } from 'react';
import axios from 'axios'
import UserGrid from '../Organisms/UserGrid'
class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  // cuando el componente este montado
  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users', { method: 'get'} )
  //     .then(response => {
  //       return response.json()
  //     }).then(data => {
  //       this.setState({users: data})
  //     }).catch(err => {
  //       console.log(err)
  //     })
  // }
  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((resp) => this.setState({users: resp.data}))
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { users } = this.state;
    return (<UserGrid users={users} /> );
  }
}

export default Users;
