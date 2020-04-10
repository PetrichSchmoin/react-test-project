import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Logo } from './components/Logo';
import { globals } from './globals/globals';
import { Route, Switch } from 'react-router';

const App: React.FC = () => (
  <div className={'App'}>
    <Navbar bg={globals.colorTheme} variant={globals.colorTheme}>
      <Navbar.Brand href={'home'}>
        <Logo />
        React Test App
      </Navbar.Brand>
    </Navbar>
    <Switch>
      <Route path={'/home'}>
        <div>Hello Home!</div>{' '}
      </Route>
    </Switch>
  </div>
);

export default App;
