<template>
  <div id="app">
    <div id="nav">
      <navbar></navbar>
      <a href="/" class="icon"><i class="fa fa-home"></i></a>
    </div>
    <router-view />
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
export default {
  components:{
    Navbar,
  }
}

</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  scroll-behavior: smooth;
}

#nav {
  padding: 0px;
  a{
    font-weight: bold;
  }
  .icon{
     color: #fff;
     position: fixed;
     z-index: 999999;
     top: 550px;
     right: 10px;
    padding:10px;
    background-color: #f23f3f;
    border-radius: 20px;
    display: none;
 }
}
</style>
