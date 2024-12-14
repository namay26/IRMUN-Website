<template>
  <div class="ebportal">
    <div class="landing-page">
      <img src="@/assets/ebpic.png" class="ebbg" />
      <img src="@/assets/Group 7.png" alt="Logo Background" class="logo-bg" />

      <div class="text-headings">
        <h1 class="heading-primary">EYECUTIVE BOARD</h1>
        <h2 class="heading-sec">PORTAL</h2>
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
name: "CAPortal",
components: {
  EBDesc,
  Footer
},
};
</script>

<style scoped>
@font-face {
  font-family: "Frozito";
  src: url("@/assets/fonts/Frozito.ttf") format("truetype");
}

.ebportal {
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

.ebbg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 90%;
  object-fit: cover;
  z-index: 2;
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

.snow-bg {
  position: absolute;
  z-index: 1;
  width: 100%;
  top: 0;
  left: 0;
}

.logo-bg {
  width: 35%;
  position: absolute;
  transform: translate(-50%, -50%);
  left:50%;
  top:40%;
  z-index: 1;
}

.text-headings {
  position: absolute;
  top: 95%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  line-height: 1;
  color: #1e262f;
  z-index: 3;
}

.heading-primary {
  font-family: "Frozito", sans-serif;
  font-size: 4.5vw;
  background-image: url("@/assets/texture.jpg");
  background-size: cover;
  background-position: center;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}

.heading-sec {
  font-family: "Copperplate", sans-serif;
  font-size: 3.5vw;
  color: aliceblue;
}

@media (max-width: 768px) {
  .ebbg{
    top: 40%;
    width: 80vw;
    height: 80vw;
  }
  .glow-bg{
    top: 40%;
  }
  .text-headings{
    top: 72%;
  }
  .logo-bg{
    top:30%;
    width: 40%;
  }
}

@media (max-width: 425px) {
  .ebbg{
    top: 20%;
    width: 60vw;
    height: 60vw;
  }
  .glow-bg{
    top: 20%;
  }
  .text-headings{
    top: 35%;
  }
  .logo-bg{
    top: 15%;
    width: 40%;
  }
}

</style>
