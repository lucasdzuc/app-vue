<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title=""
      title=""
    >
      <template slot="links">
        <sidebar-item
          :link="{
            name: 'Dashboard',
            icon: 'ni ni-tv-2  text-black',
            path: '/dashboard'
          }"
        />

        <sidebar-item :link="{name: 'Cadastrar Fornecedor', icon: 'ni ni-fat-add text-black', path: '/RegisterFornecedor'}"/>
        <sidebar-item :link="{name: 'Cadastrar Funcionário', icon: 'ni ni-fat-add text-black', path: '/RegisterFuncionario'}"/>
        <sidebar-item :link="{name: 'Cadastrar Empresa', icon: 'ni ni-fat-add text-black', path: '/RegisterEmpresa'}"/>
        <sidebar-item :link="{name: 'Cadastrar Estoque', icon: 'ni ni-fat-add text-black', path: '/RegisterEstoque'}"/>
        <sidebar-item :link="{name: 'Cadastrar Seção', icon: 'ni ni-fat-add text-black', path: '/RegisterSecao'}"/>
        <sidebar-item :link="{name: 'Cadastrar Categoria', icon: 'ni ni-fat-add text-black', path: '/RegisterCategoria'}"/>
        <sidebar-item :link="{name: 'Cadastrar Marca', icon: 'ni ni-fat-add text-black', path: '/RegisterMarca'}"/>
        <sidebar-item :link="{name: 'Cadastrar Produto', icon: 'ni ni-fat-add text-black', path: '/RegisterProduto'}"/>
        
        <sidebar-item :link="{name: 'Perfil', icon: 'ni ni-single-02 text-black', path: '/profile'}"/>
        <sidebar-item :link="{name: 'Sair', icon: 'ni ni-button-power text-black', path: '/sair'}"/>
        

      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>

      <div @click="toggleSidebar">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
  import DashboardNavbar from './DashboardNavbar.vue';
  import ContentFooter from './ContentFooter.vue';
  import { FadeTransition } from 'vue2-transitions';

  export default {
    components: {
      DashboardNavbar,
      ContentFooter,
      FadeTransition
    },
    data() {
      return {
        sidebarBackground: 'vue'
      };
    },
    methods: {
      toggleSidebar() {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false);
        }
      }
    }
  };
</script>
<style lang="scss">
</style>
