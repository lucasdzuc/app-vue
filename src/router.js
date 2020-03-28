import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'
Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'dashboard',
      component: DashboardLayout,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('./views/Dashboard.vue')
        },
        {
          path: '/RegisterFornecedor',
          name: 'registrar fornecedor',
          component: () => import('./views/RegisterFornecedor.vue')
        },
        {
          path: '/RegisterFuncionario',
          name: 'registrar funcionário',
          component: () => import('./views/RegisterFuncionario.vue')
        },
        {
          path: '/RegisterEmpresa',
          name: 'registrar empresa',
          component: () => import('./views/RegisterEmpresa.vue')
        },
        {
          path: '/RegisterEstoque',
          name: 'registrar estoque',
          component: () => import('./views/RegisterEstoque.vue')
        },
        {
          path: '/RegisterSecao',
          name: 'registrar seção',
          component: () => import('./views/RegisterSecao.vue')
        },
        {
          path: '/RegisterCategoria',
          name: 'registrar categoria',
          component: () => import('./views/RegisterCategoria.vue')
        },
        {
          path: '/RegisterMarca',
          name: 'registrar marca',
          component: () => import('./views/RegisterMarca.vue')
        },
        {
          path: '/RegisterProduto',
          name: 'registrar produto',
          component: () => import('./views/RegisterProduto.vue')
        },

        
        {
          path: '/profile',
          name: 'PERFIL',
          component: () => import('./views/UserProfile.vue')
        },
        
        
      ]
    },
    {
      path: '/',
      redirect: 'login',
      component: AuthLayout,
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('./views/Login.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('./views/Register.vue')
        }
      ]
    }
  ]
})
