import React from 'react';
import { Card } from 'react-bootstrap';

export const PageCard: React.FC = ({ children }) => (
  <Card className={'page-card'} border={'secondary'}>
    {children}
  </Card>
);
