import { PageNames, Routes } from './site-map';

interface NavItemType {
  href: string;
  id: string;
  text: string;
}

// IMPORTANT: Order matters here
const mainNavItems: NavItemType[] = [
  {
    href: Routes.HOME,
    id: PageNames.HOME,
    text: `{{@ cms.site.navigation.home @}}`,
  },
  // {
  //   href: ROUTES.PORTFOLIO,
  //   id: PageNames.PORTFOLIO,
  //   text: `{{@ cms.site.navigation.portfolio @}}`,
  // },
];

export default mainNavItems;
