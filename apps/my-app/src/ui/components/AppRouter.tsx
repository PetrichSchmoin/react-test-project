import React from 'react';
import { Route, Switch } from 'react-router';

export type RouteConfig = {
  path: string;
  exact: boolean;
  component?: React.ComponentType;
};

const RouteByConfig = ({ path, exact, component }: RouteConfig) => (
  <Route exact={exact} path={path} component={component} />
);

export type AppRouterProps = {
  routes: RouteConfig[];
  notFoundPage?: React.ComponentType;
};

export const AppRouter: React.FC<AppRouterProps> = ({ routes, notFoundPage }) => (
  <Switch>
    {routes.map((config: RouteConfig, i: number) => (
      <RouteByConfig key={i} {...config} />
    ))}
    <Route component={notFoundPage} />
  </Switch>
);
