import React from 'react';
import { FormattedMessage } from 'react-intl';

import { AppWrapper, Header, Content } from './App.style'

function App() {
  return (
    <AppWrapper >
      <Header>
        <FormattedMessage id='appName' />
      </Header>
      <Content>Content</Content>
    </AppWrapper>
  );
}

export default App;
