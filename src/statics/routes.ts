const ROUTES = {
  HOME: '/',
  PROJECT: {
    PATH: '/projects/:project_id/',
    BASE: '/projects',
    OVERVIEW: '/projects/overview',
  },
  TIMELINE: '/timeline',
  TIMELINE_CREATE: '/timeline/create',
  ABOUT: '/about',
  RESOURCES: '/resources',
  PROJECT_DESCRIPTION: '/',
  JOIN_THE_TEAM: '/join',
  TEAM: '/team',
  CONTACT: '/contact',
} as const;

export default ROUTES;
