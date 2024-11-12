<template>
  <div class="landing-page">
    <img src="@/assets/Flake4.png" class="flake4" />
    <div class="container">
      <div class="header">COMMITTEES</div>
      <img class="bgcom" src="@/assets/backgroundcom.png"/>
      <button class="learn-more" >LEARN MORE</button>
    </div>
    <img src="@/assets/house.png" class="house"/>
  </div>
</template>


<style scoped>


.landing-page {
  background: url("../assets/SnowFall.png") no-repeat center center/cover;
  width: auto;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.house{
  position: absolute;
  top:48%;
  width:100%;
  z-index: 999;
}

.bgcom{
  width:100%;
}

.container {
  margin-top: 12rem;
  position: relative;
  width: 50%;
  height: 70%;
  background: white;
  border-radius: 1.6rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.header {
  font-family: "Copperplate", sans-serif;
  letter-spacing: 0.2rem;
  color: white;
  position: absolute;
  top:-6%;
  width:60%;
  height: 12%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1E262F;
  font-size: 3rem;
  border-radius: 1rem;
  border: 0.2rem solid white;
}

.flake4 {
  position: absolute;
  top:2%;
  right: 0;
  z-index: 1;
}


.learn-more {
  font-family: "Copperplate", sans-serif;
  letter-spacing: 0.1rem;
  position: absolute;
  bottom: 20px;
  background: #1E262F;
  color: #fff;
  padding: 10px 20px;
  border: 0.2rem solid white;
  border: none;
  border-radius: 0.2rem;
  cursor: pointer;
  z-index: 2;
}

.learn-more:hover{
  background-color: #555;
}

</style>
