import React from 'react';
import { PageCard } from '../components/PageCard';
import { Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const WelcomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageCard>
      <Card.Body>
        <Card.Title>{t('WelcomePage.Title')}</Card.Title>
        <Card.Text>{t('WelcomePage.Text')}</Card.Text>
      </Card.Body>
    </PageCard>
  );
};
