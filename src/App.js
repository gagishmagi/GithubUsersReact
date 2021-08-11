import React from "react";
import axios from "axios";
import "./App.css";
import User from "./components/User/User";
import InputForm from "./components/InputForm/InputForm";
import { Col, Container, Row } from "react-bootstrap";
// import {Button, Modal} from 'react-bootstrap'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      names: ["Sparco7", "gagishmagi", "ShaniBel", "leib-ran", "shaharbest"],
      users: [],
      inputUser: "",
      showModal: false
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

  handleClose = () =>{
    this.setState({showModal: false})
  }

  handleShow = () => {
    this.setState({showModal: true})
  }

  render() {
    return (
      <Container>
        <Row>
          <InputForm
            handleUpdateState={this.handleUpdateState}
            addUser={this.addUser}
            inputUser={this.state.inputUser}
          />
        </Row>
        <Row xs={1} md={2} className="g-4">
        {this.state.users.map((user, i) => {
          return <Col><User user={user} key={i} /></Col>;
        })}
        </Row>
      </Container>
    );
  }
}

export default App;
