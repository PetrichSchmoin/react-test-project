import React from 'react';
import { Route, Switch } from 'react-router';

export type RouteConfig = {
  path: string;
  exact: boolean;
  component?: React.ComponentType;
};

export type AppRouterProps = {
  routes: RouteConfig[];
  notFoundPage?: React.ComponentType;
};

export const AppRoutes: React.FC<AppRouterProps> = ({ routes, notFoundPage }) => (
  <Switch>
    {routes.map(({ path, exact, component }: RouteConfig, i: number) => (
      <Route key={i} exact={exact} path={path} component={component} />
    ))}
    <Route component={notFoundPage} />
  </Switch>
);
