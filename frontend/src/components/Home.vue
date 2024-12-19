<template>
  <div class="main">
    <div class="landing-page">
      <img src="@/assets/Group 7.png" alt="Logo Background" class="logo-bg" />

      <div class="text-headings">
        <h2 class="heading-primary">IIT Roorkee MUN</h2>
        <h3 class="heading-tert">Presents</h3>
        <h1 class="heading-secondary">MUNarchy</h1>
        <h2 class="tagline">The Reign Of Diplomacy</h2>
        <router-link class="register" to="/welcome" style="color: black ;" @click="closeMenu">
        Register
      </router-link>
      </div>

    </div>
    <Timeline />
    <Committee />
    <Details />
     <AboutUs />
    <Footer />

  </div>
  </template>

  <script>
    import Timeline from "@/components/Timeline.vue";
    import Committee from "@/components/Committee.vue";
    import Footer from "@/components/Footer.vue";
    import Details from "@/components/Details.vue";
    import AboutUs from "@/components/AboutUs.vue";
    export default {
    name: "Home",
    components: {
      Timeline,
      Committee,
      Footer,
      Details,
      AboutUs
    },
  };
  </script>

<style scoped>
@font-face {
  font-family: "Frozito";
  src: url("@/assets/fonts/Frozito.ttf") format("truetype");
}

@font-face {
  font-family: "Roboto";
  src: url("@/assets/fonts/Roboto.ttf") format("truetype");
}


@font-face {
  font-family: "Spirit";
  src: url("@/assets/fonts/Spirit.ttf") format("truetype");
}

@font-face {
  font-family: "Gothic";
  src: url("@/assets/fonts/Gothic.ttf") format("truetype");
}

.register{
  position: absolute;
  left: 50%;
  top: 30vw;
  transform: translateX(-50%);
  background-color: white;
  border-radius: 5px;
  font-size: 1.2vw;
  padding: 1vw 2vw;
}

.main{
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
}

.landing-page {
  max-width: 99vw;
  min-height: 100vh;
}

.heading-tert{
  font-family: "Roboto", sans-serif;
  font-size: 2vw;
  color: #fff;

}
.tagline{
  font-family: "Roboto", sans-serif;
  font-size: 3vw;
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
  font-family: "Roboto", sans-serif;
  font-size: 3.5vw;
  font-weight: bold;
}

.heading-secondary {
  font-family: "Gothic", sans-serif;
  font-size: 9vw;
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
  .register{

  }
}



</style>
```
