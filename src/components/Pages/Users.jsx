import React, { Component } from 'react';
import { UserCard } from '../Molecules/UserCard';
import axios from 'axios';

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
    return (
      <div className="ed-grid">
        <h1>Usuarios</h1>
        <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
          {users.map((u) => (
            <UserCard
              key={u.id}
              name={u.name}
              username={u.name}
              email={u.email}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Users;
