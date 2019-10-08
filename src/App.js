import React from 'react';
import { FormattedMessage } from 'react-intl';

import { AppWrapper, Header, Content } from './App.style'
import InsertArticle from 'containers/InsertArticle/InsertArticle'

function App() {
  return (
    <AppWrapper >
      <Header>
        <FormattedMessage id='appName' />
      </Header>
      <Content>
        <InsertArticle />
      </Content>
    </AppWrapper>
  );
}

export default App;
