import '@babel/polyfill';

import { Container } from '@cerebral/react';
import App from 'cerebral';
import React from 'react';
import ReactDOM from 'react-dom';

import { Home } from './views/Home';
import { presenter } from './presenter/cerebral/presenter';

const cerebralApp = App(presenter);

ReactDOM.render(
  <Container app={cerebralApp}>
    <Home />
  </Container>,
  document.querySelector('#app'),
);
