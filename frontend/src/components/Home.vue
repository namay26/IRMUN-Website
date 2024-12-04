<template>
  <div class="main">
    <div class="landing-page">
      <img src="@/assets/Pine.png" alt="Pine Background" class="pine-bg" />
      <img src="@/assets/Group 7.png" alt="Logo Background" class="logo-bg" />

      <div class="text-headings">
        <h2 class="heading-primary">IRMUN PRESENTS</h2>
        <h1 class="heading-secondary">MUNarchy</h1>
      </div>

    </div>
    <Timeline />
    <Committee />
    <Footer />
  </div>
  </template>

  <script>
    import Timeline from "@/components/Timeline.vue";
    import Committee from "@/components/Committee.vue";
    import Footer from "@/components/Footer.vue";
    export default {
    name: "Home",
    components: {
      Timeline,
      Committee,
      Footer,
    },
  };
  </script>

<style scoped>
@font-face {
  font-family: "Frozito";
  src: url("@/assets/fonts/Frozito.ttf") format("truetype");
}

.main{
  background: url("@/assets/SnowFallBg.png") no-repeat center center scroll;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
}

.landing-page {
  max-width: 99vw;
  min-height: 100vh;
}

.pine-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 112%;
  object-fit: cover;
  z-index: 1;
}

.logo-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  z-index: 0;
}

.text-headings {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  z-index: 2;
}

.heading-primary {
  font-family: "Copperplate Gothic", sans-serif;
  font-size: 3vw;
  font-weight: bold;
}

.heading-secondary {
  font-family: "Frozito", sans-serif;
  font-size: 10vw;
  font-weight: bold;
  background-image: url("@/assets/texture.jpg");
  background-size: cover;
  background-position: center;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}

/* Responsive Design */
@media (max-width: 1230px) {
  .pine-bg {
    height: 100%;
  }
  .landing-page {
    min-height:85vh;
  }
  .logo-bg {
    height: 60%;
  }
}

@media (max-width: 1100px) {
  .pine-bg {
    height: 90%;
  }
  .logo-bg {
    height: 40%;
  }
}


@media (max-width: 1024px) {
  .pine-bg {
    height: 90%;

  }
  .logo-bg {
    height: 40%;
    top:40%;
  }
  .text-headings{
    top: 40%;
  }
}

@media (max-width: 970px) {
  .pine-bg {
    max-height: 60%;
  }
  .logo-bg {
    max-height: 30%;
    top:40%;
  }
}

@media (max-width: 768px) {
  .text-headings{
    top: 35%;
  }
  .landing-page {
    min-height:70vh;
  }
  .pine-bg{
    top: 40%;
  }
  .logo-bg{
    top: 35%;
  }
}

@media (max-width: 425px) {
  .pine-bg{
    height: 40%;
    top: 25%;
  }
  .logo-bg{
    height: 25%;
    top: 20%;
  }
  .text-headings{
    top: 20%;
  }
  .landing-page {
    min-height:45vh;
  }
}



</style>
