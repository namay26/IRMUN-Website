<template>
    <div class="landing-page">
      <Navbar />
      <img src="@/assets/Pine.png" alt="Pine Background" class="pine-bg" />
      <img src="@/assets/Snow Fall.png" alt="Snow Fall Background" class="snow-fall-bg" />
      <img src="@/assets/Group 7.png" alt="Logo Background" class="logo-bg" />

      <div class="text-headings">
        <h2 class="heading-primary">IRMUN PRESENTS</h2>
        <h1 class="heading-secondary">MUNarchy</h1>
      </div>

    </div>
  </template>
  
  <script>
  import Navbar from "@/components/Navbar.vue";
  
  export default {
    components: {
      Navbar,
    },
  };
  </script>
  
  <style scoped>

  @font-face {
    font-family: "Frozito";
    src: url("@/assets/fonts/Frozito.ttf") format("truetype");
  }

  .pine-bg {
    position: absolute; 
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%); 
    width: 100%; 
    height: 100%; 
    object-fit: cover;
    z-index: 1; 
  }

  .logo-bg {
    position: absolute;
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%); 
    width: 40%; 
    height: 70%; 
    object-fit: cover;
    z-index: 0;
  }

  .snow-fall-bg {
    position: absolute; 
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%); 
    width: 100%; 
    height: 100%; 
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
  