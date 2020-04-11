import React from 'react';
import { AppRouter } from './components/AppRouter';
import { allAppRoutes } from '../routes';
import { BasePage } from './pages/BasePage';
import { NotFoundPage } from './pages/NotFoundPage';

const App: React.FC = () => (
  <div className={'app'}>
    <BasePage>
      <AppRouter routes={allAppRoutes} notFoundPage={NotFoundPage} />
    </BasePage>
  </div>
);

export default App;
