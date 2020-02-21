import React, {Fragment} from 'react';
import {Flag, Header as SHeader, Icon} from "semantic-ui-react";

class Header extends React.Component {
  render() {
    return (
      <Fragment>
        <SHeader as='h2' icon textAlign='center'>
          <Icon name='users' circular/>
          <SHeader.Content><Flag name='mx'/>Codigo Fuente Suggestions Service <Flag name='mx'/></SHeader.Content>
        </SHeader>
      </Fragment>
    );
  }
}

export default Header;