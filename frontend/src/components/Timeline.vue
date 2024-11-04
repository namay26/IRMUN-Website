<template>
  <div class="landing-page">
    <img src="@/assets/Group.png" class="flake"/>
    <img src="@/assets/Flake2.png" class="flake2" />
    <img src="@/assets/thomso.png" class="thomso"/>
    <div class="">
        <h2 class="heading-primary-time">DAYS</h2>
        <h1 class="heading-secondary-time">09</h1>
      </div>
  </div>
</template>


<style scoped>

@font-face {
  font-family: "Polar";
  src: url("../assets/fonts/Polar\ Snow.ttf") format("truetype");
}


.landing-page {
  background: url("../assets/SnowFall.png") no-repeat center center/cover;
  width: auto;
  height: 100vh;
}

.thomso {
  width: 100%;
  transform: translate(0%, 50%);
}

.flake{
  position: absolute;
  top: 90%;
  z-index: 1;
}

.flake2{
  position: absolute;
  top: 89%;
  right: 0;
  z-index: 1;
}


.heading-primary-time {
  font-family: "Polar", sans-serif;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: -30px;

}

.heading-secondary-time {
  font-family: "Polar", sans-serif;
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
