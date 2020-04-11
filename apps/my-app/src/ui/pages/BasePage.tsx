import React from 'react';
import { TopAppBar } from '../components/TopAppBar';

export const BasePage: React.FC = ({ children }) => (
  <>
    <TopAppBar />
    {children}
  </>
);
