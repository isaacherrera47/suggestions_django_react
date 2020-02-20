import React, {Component} from "react";
import {render} from "react-dom";
import {Header} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

  render() {
    return (
      <Header as="h1">Testing...</Header>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App/>, container);