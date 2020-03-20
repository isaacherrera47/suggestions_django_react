import React, {Component} from 'react';
import {Button, Form, Grid, Icon, Message} from "semantic-ui-react";
import ModalInfo from "../Modal";
import axios from 'axios';
import CategorySelect from "../CategorySelect";

class SuggestionForm extends Component {
  render() {
    return (
      <Form onSubmit={this.onClickSend} error={this.state.formError} success={this.state.successForm}>
        <Form.TextArea
          rows={10} value={this.state.suggestion} onChange={this.handleChange}
          placeholder='What do you think we could improve?'
          label='Write down here your comments or suggestion'
        />
        <CategorySelect onChange={this.handleChangeSelect}
                        value={this.state.category}
                        label='What category do you think belong to?'
                        placeholder='Choose a category'
        />
        <Grid>
          <Grid.Column width={8}>
            <ModalInfo/>
          </Grid.Column>
          <Grid.Column width={8}>
            <Form.Button animated='fade' positive floated='right'>
              <Button.Content visible>Send Suggestion</Button.Content>
              <Button.Content hidden><Icon name='send'/></Button.Content>
            </Form.Button>
          </Grid.Column>
        </Grid>
        <Message
          success
          header='Suggestion sent'
          content="Thank you for sharing a suggestion"
        />
        <Message
          error
          header='Oops!'
          content='You must select select one category'
        />
      </Form>
    );
  }

  onClickSend() {
    const {suggestion, category} = this.state;
    if (category) {
      this.setState({formError: false});
      axios.post('api/suggestions/create', {'text': suggestion, 'type': category})
        .then((response) => {
          this.setState({successForm: true});
        }).catch(() => alert("There's something wrong"));
    } else {
      this.setState({formError: true});
    }
  }

  handleChange(event) {
    this.setState({suggestion: event.target.value});
  }

  handleChangeSelect(e, data) {
    this.setState({category: data.value});
  }

  constructor(props) {
    super(props);
    this.state = {successForm: false, suggestion: '', category: null, formError: false};
    this.onClickSend = this.onClickSend.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }
}

export default SuggestionForm;