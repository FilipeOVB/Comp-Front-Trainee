<template>
  <Navbar :logo="logo_src" :alt="app_name"/>
  <router-view/>
</template>

<script>
import Navbar from "./components/Navbar.vue"

export default {
  components: {
    Navbar
  },
  data(){
    return {
      logo_src: "/images/LogoComp.svg",
      app_name: "CompJR"
    }
  }
}
</script>

<style>
    *{
        margin: 0;
        padding: 0;
    }
</style>
