<template>
  <div class="team">

    <div class="landing-page">
      <TeamDesc />
      <Footer />
    </div>

  </div>
</template>


<script>
import TeamDesc from "./TeamDesc.vue";
import Footer from "./Footer.vue";
export default {
name: "Team",
components: {
  TeamDesc,
  Footer
},
};
</script>

<style scoped>

.team {
  background-color: #0f141e;
}

.landing-page {
  width: auto;
  height: 100vh;
  position: relative;
  z-index: 0;
}




</style>
