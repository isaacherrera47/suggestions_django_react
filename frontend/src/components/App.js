import React, {Component} from "react";
import {render} from "react-dom";
import Header from "./Header";
import SuggestionForm from "./SuggestionForm";
import {Container} from "semantic-ui-react";

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
      <Container style={{marginTop: '3em'}}>
        <Header/>
        <SuggestionForm/>
      </Container>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App/>, container);