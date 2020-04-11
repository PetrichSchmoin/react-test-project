import { Navbar } from 'react-bootstrap';
import { globals } from '../globals/globals';
import { Logo } from './Logo';
import React from 'react';

export const TopAppBar: React.FC = () => (
  <Navbar bg={globals.colorTheme} variant={globals.colorTheme}>
    <Navbar.Brand href={'/'}>
      <Logo />
      React Test App
    </Navbar.Brand>
  </Navbar>
);
