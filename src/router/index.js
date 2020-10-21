import Vue from 'vue';
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from '@/layout';



/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index'),
        name: 'Home'
      }
    ]
  },
  {
    path: '/recall',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/recall/index'),
        name: 'Recall'
      }
    ]
  }
];

const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
});

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
