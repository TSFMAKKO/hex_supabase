
import { createRouter, createWebHashHistory } from 'vue-router';
// import route from '../store/route';

// import { useRoute } from 'vue-router';
// const route = useRoute();

import Index from '../views/Index.vue';
import Test from '../views/TestView.vue';
import Product from '../views/ProductView.vue';
import Create from '../views/CreateView.vue';
import Story from '../views/StoryView.vue';
import ProductDeteil from '../views/ProductDeteilView.vue';
import ProductListView from '../views/ProductListView.vue';

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
    name: 'productListView',
    component: ProductListView,
    meta: { title: '商品頁' },

  },

  // {
  //   path: '/product/:sex/all',
  //   name: 'ProductAll',
  //   component: Product,
  //   // meta: { title: '男鞋 - 所有產品' },

  // },
  {
    path: '/product/:sex/:category',
    name: 'ProductCategory',
    component: Product,
    // meta will be set dynamically in afterEach (fallback provided)
    meta: { title: '商品分類' },

  },
  // category
  // {
  //   path: '/product/women/all',
  //   name: 'ProductWomenAll',
  //   component: Product,
  //   meta: { title: '女鞋 - 所有產品' },

  // },
  // {
  //   path: '/product/:sex/running',
  //   name: 'ProductRunning',
  //   component: import('../views/product/RunningView.vue'),
  //   // meta: { title: '男鞋 - 跑鞋' },

  // },
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

// 依路由參數格式化中文標題
function formatProductTitle(to) {
  const rawSex = to.params.sex ?? ''
  const rawCategory = to.params.category ?? ''

  const sex = decodeURIComponent(String(rawSex)).toLowerCase()
  const category = decodeURIComponent(String(rawCategory)).toLowerCase()

  const sexMap = { women: '女鞋', men: '男鞋', woman: '女鞋', man: '男鞋', 女: '女鞋', 男: '男鞋' }
  const categoryMap = { all: '所有產品', running: '慢跑', loafers: '後底', skateboarding: '滑板', limited: '限定 / 聯名', 慢跑: '慢跑', 滑板: '滑板' }

  const sexText = sexMap[sex] || sexMap[rawSex] || (sex ? `${rawSex}鞋` : '')
  const categoryText = categoryMap[category] || categoryMap[rawCategory] || (category || '')

  const parts = []
  if (categoryText) parts.push(categoryText)
  if (sexText) parts.push(sexText)

  return { title: parts.join(' - '), categoryText, sexText }
}

// 更新 document.title：ProductCategory 或具備 sex/category 參數時以中文格式設定
router.afterEach((to) => {
  try {
    const hasSexCategory = typeof to.params?.sex !== 'undefined' && typeof to.params?.category !== 'undefined'
    if (to.name === 'ProductCategory' || hasSexCategory) {
      const { title, sexText, categoryText } = formatProductTitle(to)
      const finalTitle = title || to.meta?.title || '商品頁'
      console.debug('[router.afterEach]', { name: to.name, params: to.params, sexText, categoryText, finalTitle })
      document.title = finalTitle
      // 同步更新 meta，便於其他地方取用
      to.meta = { ...(to.meta || {}), title: finalTitle }
    } else {
      document.title = to.meta?.title || 'Hex'
    }
  } catch (e) {
    // defensive: 不要讓設定 title 的錯誤中斷路由
    console.warn('failed to set document.title', e)
  }
})

export default router;
