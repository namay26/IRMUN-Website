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

.landing-page {
  background: black url("@/assets/SnowFallBg.png") no-repeat center center scroll;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
}




</style>
