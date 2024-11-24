<template>
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

  .landing-page {
    background: url("../assets/SnowFall.png") no-repeat center center/cover;
    width: auto;
    height: 100vh;
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
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: -30px;

}

.heading-secondary {
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
