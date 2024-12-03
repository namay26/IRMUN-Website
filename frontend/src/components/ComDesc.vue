<template>
  <div class="landing-page-2">
    <div class="container 1">
      <div class="header">UNSC CCC</div>
    </div>
    <div class="container 2">
      <div class="header">DISEC</div>
    </div>
    <div class="container 3">
      <div class="header">AIPPM</div>
    </div>
    <div class="container 4">
      <div class="header">UNHRC</div>

    </div>
    <div class="container 5">
      <div class="header">SOCHUM</div>
    </div>
    <div class="container 6">
      <div class="header">AISM</div>
    </div>
    <div class="container 7">
      <div class="header">IP</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@font-face {
  font-family: "Frozito";
  src: url("@/assets/fonts/Frozito.ttf") format("truetype");
}

.bgcom {
  width: 100%;
}

.landing-page-2 {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.container {
  position: relative;
  width: 60vw;
  height: 400px;
  margin: 4rem;
  background: #fff url("@/assets/combg.png") no-repeat center center scroll;
  border-radius: 1.6vw;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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
  top: -6%;
  width: 60%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1E262F;
  font-size: 3vw;
  border-radius: 1rem;
  border: 0.2rem solid white;
}

@media (max-width: 425px) {
  .header{
    font-size: 5vw;
    height: 6vh;
  }
  .container{
    height: 300px;
  }
}

</style>
