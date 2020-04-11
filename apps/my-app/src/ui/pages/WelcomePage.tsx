import React from 'react';
import { PageCard } from '../components/PageCard';
import { Card } from 'react-bootstrap';

export const WelcomePage: React.FC = () => (
  <PageCard>
    <Card.Body>
      <Card.Title>Welcome!</Card.Title>
      <Card.Text>Nice to see you here!</Card.Text>
    </Card.Body>
  </PageCard>
);
