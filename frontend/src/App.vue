<script setup>
import Navbar from "@/components/Navbar.vue";
import Home from "@/components/Home.vue";
import Timeline from "@/components/Timeline.vue";
import Committee from "@/components/Committee.vue";
import Footer from "@/components/Footer.vue";

</script>

<template>
  <div id="app">
    <Navbar />
    <Home />
    <Timeline />
    <Committee />
    <Footer />
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
