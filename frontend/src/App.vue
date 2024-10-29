<script setup>
import Navbar from "@/components/Navbar.vue"; 
import Home from "@/components/Home.vue"; 
</script>

<template>
  <div id="app">
    <Navbar />
    <main>
      <Home />
    </main>
  </div>
</template>



<style scoped>

header {
  position: fixed; 
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; 
  background-color: #1d1d1d; 
  padding: 1rem 0; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
}

.logo {
  display: block;
  margin: 0 auto;
}

#app {
  background-color: #1d1d1d; 
  min-height: 100vh;
}

main {
  padding-top: 100px; 
}


@media (min-width: 1024px) {
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem calc(var(--section-gap) / 2);
  }

  .logo {
    margin-right: 2rem;
  }
}
</style>
