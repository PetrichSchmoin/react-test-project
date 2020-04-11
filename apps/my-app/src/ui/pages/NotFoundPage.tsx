import React from 'react';
import { PageCard } from '../components/PageCard';
import { Card } from 'react-bootstrap';

export const NotFoundPage: React.FC = () => (
  <PageCard>
    <Card.Body>
      <Card.Title>Error 404 - Page not found!</Card.Title>
      <Card.Text>The requested page doesn't exist.</Card.Text>
    </Card.Body>
  </PageCard>
);
