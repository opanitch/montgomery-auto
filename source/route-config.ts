import { FunctionComponent } from 'react';
import { Routes } from 'CONFIG/site-map';
import * as PAGES from 'Pages';

type RouteType = {
  component: FunctionComponent<Page>;
  path: string;
};

export interface RouteConfigType extends RouteType {
  routes?: RouteType[];
}

const routeConfig: RouteConfigType[] = [
  {
    component: PAGES.CONTACT,
    path: Routes.CONTACT,
  },
  {
    component: PAGES.HOMEPAGE,
    path: Routes.HOME,
  },
  {
    component: PAGES.NOT_FOUND,
    path: Routes.NOT_FOUND,
  },
];

export default routeConfig;
