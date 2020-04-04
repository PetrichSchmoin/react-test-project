import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Logo } from './components/Logo';
import { globals } from './globals/globals';

const App: React.FC = () => (
  <div className={'App'}>
    <Navbar bg={globals.colorTheme} variant={globals.colorTheme}>
      <Navbar.Brand href={'#home'}>
        <Logo />
        React Test App
      </Navbar.Brand>
    </Navbar>
  </div>
);

export default App;
