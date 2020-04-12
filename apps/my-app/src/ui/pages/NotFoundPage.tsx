import React from 'react';
import { PageCard } from '../components/PageCard';
import { Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageCard>
      <Card.Body>
        <Card.Title>{t('Errors.Err404Title')}</Card.Title>
        <Card.Text>{t('Errors.Err404Message')}</Card.Text>
      </Card.Body>
    </PageCard>
  );
};
