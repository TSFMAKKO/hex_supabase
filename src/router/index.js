
import { createRouter, createWebHashHistory } from 'vue-router';
import Index from '../views/Index.vue';
import Test from '../views/TestView.vue';
import Product from '../views/ProductView.vue';
import Create from '../views/CreateView.vue';
import Story from '../views/StoryView.vue';
import ProductDeteil from '../views/ProductDeteilView.vue';

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    meta: { title: '首頁' },
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
    meta: { title: '測試頁' },
  },
  {
    path: '/product',
    name: 'Product',
    component: Product,
    meta: { title: '商品頁' },

  },
    {
    path: '/productDeteil/:id',
    name: 'ProductDeteil',
    component: ProductDeteil,
    meta: { title: '商品詳細頁' },

  },
  {
    path: '/create',
    name: 'Create',
    component: Create,
    meta: { title: '新增產品頁' },
  },
    {
    path: '/story',
    name: 'Story',
    component: Story,
    meta: { title: '品牌故事' },
  },
];

const router = createRouter({
  history: createWebHashHistory("hex_supabase"),
  routes,
});

export default router;
