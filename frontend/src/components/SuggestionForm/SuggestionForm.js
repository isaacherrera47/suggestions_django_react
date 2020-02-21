import React, {Component} from 'react';
import {Button, Form, Grid, Icon, Message} from "semantic-ui-react";
import ModalInfo from "../Modal";

class SuggestionForm extends Component {
  render() {
    return (
      <Form success={this.state.successForm}>
        <Form.TextArea rows={15} required placeholder='What do you think we could improve?'/>
        <Grid>
          <Grid.Column width={8}>
            <ModalInfo/>
          </Grid.Column>
          <Grid.Column width={8}>
            <Button animated='fade' positive floated='right'>
              <Button.Content visible>Send Suggestion</Button.Content>
              <Button.Content hidden onClick={this.onClickSend}><Icon name='send'/></Button.Content>
            </Button>
          </Grid.Column>
        </Grid>
        <Message
          success
          header='Suggestion sent'
          content="Thank you for sharing a suggestion"
        />
      </Form>
    );
  }

  onClickSend() {
    this.setState({successForm: true});
  }

  constructor(props) {
    super(props);
    this.state = {successForm: false};
    this.onClickSend = this.onClickSend.bind(this);
  }
}

export default SuggestionForm;