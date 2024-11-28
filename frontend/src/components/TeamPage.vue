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

.glow-bg {
  width: 100%;
  align-self: center;
  position: absolute;
  z-index: 0;
  left: 50%;
  opacity: 0.6;
  top: 50%;
  transform: translate(-50%, -50%);
}



.text-headings {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  line-height: 1;
  color: #1e262f;
  z-index: 3;
}

.meet{
  font-size: larger;
}

.team2{
  font-size:larger;
}


</style>
