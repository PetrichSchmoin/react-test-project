import { RouteConfig } from './ui/components/AppRoutes';
import { WelcomePage } from './ui/pages/WelcomePage';

export const allAppRoutes: RouteConfig[] = [
  {
    path: '/welcome',
    component: WelcomePage,
    exact: true,
  },
  {
    path: '/',
    component: WelcomePage,
    exact: true,
  },
];
