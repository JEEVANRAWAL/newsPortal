
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path:'/news',
        component: ()=> import('app/src/components/allnews-component.vue'),
      },
      {
        path:'/newsDetail',
        component: ()=> import('app/src/components/viewNewsDetail.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
