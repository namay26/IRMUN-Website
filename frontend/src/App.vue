<script setup>
import Navbar from "@/components/Navbar.vue";
import Home from "@/components/Home.vue";
import Timeline from "@/components/Timeline.vue";
</script>

<template>
  <div id="app">
    <Navbar />
    <Home />
    <Timeline />
  </div>
</template>



<style scoped>

#app {
  background-color: #1d1d1d;
  min-height: 100vh;
  min-width: 99vw;
}


@media (min-width: 1024px) {

  .logo {
    margin-right: 2rem;
  }
}
</style>
