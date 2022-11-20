<template>
  <div>
    <div class="container-fluid">
      <Navbar/>
      <router-view />
    </div>
  </div>
</template>

<script>
  import Navbar from './components/NavbarComponent.vue'
  export default{
    components:{
      Navbar
    }
  }
</script>
