<template>
  <div class="comportal">
    <div class="landing-page">
      <div class="text-headings">
        <h1 class="heading-primary">COMMITTEES</h1>
      </div>
    </div>
    <ComDesc />
    <Footer />
  </div>
</template>

<script>
import ComDesc from "./ComDesc.vue";
import Footer from "./Footer.vue";
export default {
  name: "ComPortal",
  components: {
    ComDesc,
    Footer,
  },
};
</script>

<style scoped>

@font-face {
  font-family: "Frozito";
  src: url("@/assets/fonts/Frozito.ttf") format("truetype");
}

.comportal {
  background: url("@/assets/SnowFallBg.png") no-repeat center center scroll;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
}

.landing-page {
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-headings {
  position: relative;
  text-align: center;
  color: #fff;
  z-index: 2;
}

.heading-primary {
  font-family: "Frozito", sans-serif;
  font-size: 10vw;
  font-weight: bold;
  background-image: url("@/assets/texture.jpg");
  background-size: cover;
  background-position: center;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  margin-top: 12rem;
}


@media (max-width: 425px) {
  .heading-primary {
    margin-top: 0;
  }
}

</style>
