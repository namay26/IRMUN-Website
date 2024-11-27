<template>
  <div class="ebportal">
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
name: "CAPortal",
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

.ebportal {
  background-color: #0f141e;
}

.landing-page {
  background: url("../assets/Snow Fall Background.png") no-repeat center center/cover;
  width: auto;
  height: 50vh;
}

.text-headings {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  z-index: 2;
}

.heading-primary {
  font-family: "Frozito", sans-serif;
  font-size: 10rem;
  font-weight: bold;
  background-image: url("@/assets/texture.jpg");
  background-size: cover;
  background-position: center;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}

</style>
