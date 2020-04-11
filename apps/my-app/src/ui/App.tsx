import React from 'react';
import { AppRoutes } from './components/AppRoutes';
import { allAppRoutes } from '../routes';
import { BasePage } from './pages/BasePage';
import { NotFoundPage } from './pages/NotFoundPage';

const App: React.FC = () => (
  <div className={'app'}>
    <BasePage>
      <AppRoutes routes={allAppRoutes} notFoundPage={NotFoundPage} />
    </BasePage>
  </div>
);

export default App;
