<template>
  <div id="app">
     <v-app>
        <toolbar></toolbar>
        <v-content>
          <v-container fluid>
            <router-view></router-view>
          </v-container>
        </v-content>
        <v-footer app></v-footer>
      </v-app>
     </div>
</template>

<script lang="ts">
  import Toolbar from './components/Toolbar.vue';
  import { Component, Prop, Vue } from 'vue-property-decorator';
  
  @Component({ 
    components: { 'toolbar': Toolbar }
  })
  export default class App extends Vue {
    msg: string = 'Welcome to Your Vue.js App'
  }
</script>


<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
