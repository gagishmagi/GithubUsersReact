import React from "react";
import axios from "../node_modules/axios/dist/axios";
import "./App.css";
import User from "./User";
import InputForm from "./InputForm";

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
    // let usersArr = [];
    this.state.names.map((name, i) => {
      axios
        .get(`https://api.github.com/users/${name}`)
        .then((response) => {
          this.setState({ users: [response.data, ...this.state.users] });
        })
        .catch((err) => console.log(err));
    });

    // this.setState({ users: usersArr });
  }

  handleUpdateState = (e) => {
    const newState = e.target.value;
    this.setState({ inputUser: newState });
  };

  addUser = () => {
    const user = this.state.inputUser;

    axios
      .get(`https://api.github.com/users/${user}`)
      .then((response) => {
        this.setState({ users: [response.data, ...this.state.users] });
      })
      .catch((err) => console.log("err", err));

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
