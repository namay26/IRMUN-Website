<template>
  <div class="team">

    <div class="landing-page">
      <CardGrid />
      <Footer />
    </div>

  </div>
</template>


<script>
import CardGrid from "./CardGrid.vue";
import Footer from "./Footer.vue";
export default {
name: "Team",
components: {
  CardGrid,
  Footer
},
};
</script>

<style scoped>
.team{
max-width:100%;
}
.landing-page {
  background-size: cover;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
}




</style>
