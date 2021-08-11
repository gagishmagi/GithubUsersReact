import React from "react";
import axios from "axios";
import "./App.css";
import User from "./components/User/User";
import InputForm from "./components/InputForm/InputForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      names: ["Sparco7", "gagishmagi", "ShaniBel", "leib-ran", "shaharbest"],
      users: [],
      inputUser: "",
    };
  }

  componentDidMount() {
    this.state.names.map((name, i) => {
      return this.FetchUser(name)
    });
  }

  FetchUser = (user) => {
    axios
      .get(`https://api.github.com/users/${user}`)
      .then((response) => {
        this.setState({ users: [response.data, ...this.state.users] });
      })
      .catch((err) => console.log("err", err));
  }

  handleUpdateState = (e) => {
    const newState = e.target.value;
    this.setState({ inputUser: newState });
  };

  addUser = () => {
    const user = this.state.inputUser;

    this.FetchUser(user)    

    this.setState({ inputUser: "" });
  };

  render() {
    return (
      <div>
        <div>
          <InputForm
            handleUpdateState={this.handleUpdateState}
            addUser={this.addUser}
            inputUser={this.state.inputUser}
          />
        </div>
        {this.state.users.map((user, i) => {
          return <User user={user} key={i} />;
        })}
      </div>
    );
  }
}

export default App;
