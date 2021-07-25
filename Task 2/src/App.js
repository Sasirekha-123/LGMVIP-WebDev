import Users from "./Components/cards";
import "./styles.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users_data: [], loading: true };
    this.showUsers = this.showUsers.bind(this);
  }

  showUsers() {
    document.getElementById("main").style.display = "flex";
    const source = "https://reqres.in/api/users?page=1";
    fetch(source)
      .then((response) => response.json())
      .then((users) => {
        this.setState({ users_data: users.data, loading: false });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark  m-3">
          <div className="container-fluid">
            <center>
              <h3>SSR</h3>
            </center>
            <center>
              <button onClick={this.showUsers}>Get Users</button>
            </center>
          </div>
        </nav>

        <Users loading={this.state.loading} users={this.state.users_data} />
      </>
    );
  }
}

export default App;
