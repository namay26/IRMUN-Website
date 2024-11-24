<script setup>
import Navbar from "@/components/Navbar.vue";

</script>

<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>



<style scoped>

#app {
  background: #1E262F;
  min-height: 100vh;
  min-width: 99vw;
}


@media (min-width: 1024px) {

  .logo {
    margin-right: 2rem;
  }
}
</style>
