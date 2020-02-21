import React, {Component} from 'react';
import {Button, Header, Modal} from "semantic-ui-react";

class ModalInfo extends Component {
  render() {
    return (
      <Modal trigger={<Button circular icon='info' as='a'/>} basic size='small'>
        <Header icon='info' content='Please be kind'/>
        <Modal.Content>
          <p>
            In order to make this kind of tools possible, <b>please be kind</b> writing your comments. <br/>
            <b>Avoid</b> blame your coworkers and be focused on the problem and suggest a solution.
            <br/>
            Remember this always! <br/>
            Have a nice day! <i aria-hidden="true" className="yellow icon smile outline"/>
          </p>
        </Modal.Content>
      </Modal>
    );
  }
}

export default ModalInfo;