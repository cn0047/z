import AWS from 'aws-sdk';
import React from 'react';
import { browserHistory } from 'react-router';
import { render } from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux';

import './styles/main.css';
import App from './containers/app';
import config from "./config/main";
import configureStore from './store/main';

AWS.config.update(config.aws.main);

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
render(
  <App store={store} history={history} />,
  document.getElementById('root')
);
