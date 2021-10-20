export enum PageNames {
  CONTACT = 'contact',
  HOME = 'home',
  NOT_FOUND = '404',
}

export enum Routes {
  CONTACT = '/contact',
  HOME = '/',
  NOT_FOUND = '/404',
}

interface SiteMap<K, V> extends Map<K, V> {
  get: (pageName: K) => V;
}

interface SiteMapPageConfig {
  pageTitle: string;
  path: string;
}

const siteMap: SiteMap<PageNames, SiteMapPageConfig> = new Map();

// Order doesn't matter here other than for organization
siteMap
  .set(PageNames.HOME, {
    pageTitle: '{{@ cms.home.title @}}',
    path: Routes.HOME,
  })
  .set(PageNames.NOT_FOUND, {
    pageTitle: '{{@ cms.not-found.title @}}',
    path: Routes.NOT_FOUND,
  });

export default siteMap;
