import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';

import messages_en from 'translations/en.json'
import messages_tr from 'translations/tr.json'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const messages = {
    'tr': messages_tr,
    'en': messages_en
};

const language = navigator.language.split(/[-_]/)[0];

ReactDOM.render(
    <IntlProvider locale={navigator.language} messages={messages[language]}>
        <App />
    </IntlProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
