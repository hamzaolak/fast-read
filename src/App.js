import React from 'react';
import { FormattedMessage } from 'react-intl';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AppWrapper, Header, Content } from './App.style'
import InsertArticle from 'containers/InsertArticle'
import ReadArticle from 'containers/ReadArticle';

function App() {
  return (
    <AppWrapper >
      <Header>
        <FormattedMessage id='appName' />
      </Header>
      <Content>
        <Router>
          <Switch>
            <Route path='/read' component={ReadArticle} />
            <Route path='/' component={InsertArticle} />
          </Switch>
        </Router>
      </Content>
    </AppWrapper>
  );
}

export default App;
