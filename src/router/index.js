
import { createRouter, createWebHistory } from 'vue-router';
import Index from '../views/Index.vue';
import Edit from '../views/EditView.vue';
import Product from '../views/ProductView.vue';
import Create from '../views/CreateView.vue';

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: '/edit',
    name: 'Edit',
    component: Edit,
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
