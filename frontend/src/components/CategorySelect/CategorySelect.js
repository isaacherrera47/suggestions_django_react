import React, {Component} from 'react';
import {Form} from "semantic-ui-react";
import axios from "axios";

class CategorySelect extends Component {
  render() {
    return (
      <Form.Select
        onChange={this.props.onChange}
        options={this.state.options}
        value={this.props.value}
        label={this.props.label}
        placeholder={this.props.placeholder}/>
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

CategorySelect.defaultProps = {
  onChange: null,
  value: null,
  placeholder: null,
  label: null
};

export default CategorySelect;