import React, {Component} from 'react';
import {Form} from "semantic-ui-react";
import axios from "axios";

class CategorySelect extends Component {
  render() {
    return (
      <Form.Select options={this.state.options} placeholder="Choose a category"/>
    );
  }

  componentDidMount() {
    axios.get('api/categories')
      .then((response) => {
        const {data} = response;
        this.setState({options: data.map((v) => ({key: v.id, value: v.id, text: v.name}))})
      });
  }

  constructor(props) {
    super(props);
    this.state = {options: []};
  }
}

export default CategorySelect;