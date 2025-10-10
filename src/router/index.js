
import { createRouter, createWebHistory } from 'vue-router';
import Index from '../views/Index.vue';
import Test from '../views/TestView.vue';
import Product from '../views/ProductView.vue';
import Create from '../views/CreateView.vue';

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
  },
  {
    path: '/product',
    name: 'Product',
    component: Product,
  },
  {
    path: '/create',
    name: 'Create',
    component: Create,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
