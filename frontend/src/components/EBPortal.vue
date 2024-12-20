<template>
  <div class="ebportal">
    <div class="landing-page">
      <img src="@/assets/ebpic.png" class="ebbg" />
      <img src="@/assets/Group 7.png" alt="Logo Background" class="logo-bg" />

      <div class="text-headings">
        <h1 class="heading-primary">EXECUTIVE <br /> BOARD</h1>
      </div>
    </div>
    <EBDesc />
    <Footer />
  </div>
</template>

<script>
import EBDesc from "./EBDesc.vue";
import Footer from "./Footer.vue";
export default {
  name: "EBPortal",
  components: {
    EBDesc,
    Footer
  }
};
</script>

<style scoped>
@font-face {
  font-family: "Roboto";
  src: url("@/assets/fonts/Roboto.ttf") format("truetype");
}

@font-face {
  font-family: "Gothic";
  src: url("@/assets/fonts/Gothic.ttf") format("truetype");
}

.ebportal {
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
}

.landing-page {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.ebbg {
  position: absolute;
  top: 15vw;
  aspect-ratio: 1.45;
  object-fit: cover;
  z-index: 2;
  width: 70vw;
  overflow: hidden;
}

.logo-bg {
  width: 35vw;
  top: 20vw;
  position: absolute;
  z-index: 1;
}


.text-headings {
  top: 57vw;
  text-align: center;
  position: absolute;
  color: white;
  line-height: 1;
  z-index: 3;
}

.heading-primary {
  font-family: "Gothic", sans-serif;
  font-size: 4.5vw;

}

.heading-sec {
  font-family: "Robot", sans-serif;
  font-size: 3.5vw;
  color: aliceblue;
}
</style>
