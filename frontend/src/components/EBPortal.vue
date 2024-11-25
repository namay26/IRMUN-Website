<template>
    <div class="ebportal">
      <div class="landing-page">
        <img src="@/assets/ebpic.png" class="ebbg" />
        <img src="@/assets/Group 7.png" alt="Logo Background" class="logo-bg" />
        <img src="@/assets/EB BG 1.png" alt="Glow Background" class="glow-bg" />
        <img src="@/assets/SnowFall.png" alt="Snow Background" class="snow-bg" />
  
        <div class="text-headings">
          <h1 class="heading-primary">EYECUTIVE BOARD</h1>
          <h2 class="heading-sec">PORTAL</h2>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CAPortal",
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
    height: 100vh;
    position: relative; 
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
    left: 33%;
    bottom: 30%;
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
    font-size: 4rem;
    background-image: url("@/assets/texture.jpg");
    background-size: cover;
    background-position: center;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
  
  .heading-sec {
    font-family: "Copperplate", sans-serif;
    font-size: 3rem;
    color: aliceblue;
  }
  </style>
  