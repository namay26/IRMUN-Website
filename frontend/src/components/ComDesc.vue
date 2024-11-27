<template>
  <div class="landing-page-2">
      <div class="container 1">
        <div class="header">UNSC</div>
        <img class="bgcom" src="@/assets/combg.png" />
      </div>
      <div class="container 2">
        <div class="header">UNGA</div>
        <img class="bgcom" src="@/assets/combg.png" />
      </div>
      <div class="container 3">
        <div class="header">AIPPM</div>
        <img class="bgcom" src="@/assets/combg.png" />
      </div>
      <div class="container 4">
        <div class="header">IP</div>
        <img class="bgcom" src="@/assets/combg.png" />
      </div>
  </div>
</template>

<script>
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
  background: url("../assets/SnowFall.png") no-repeat center center/cover;
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}


.container {
  position: relative;
  width: 50%;
  margin: 4rem;
  height: max-content;
  background: white;
  border-radius: 1.6rem;
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
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1E262F;
  font-size: 3rem;
  border-radius: 1rem;
  border: 0.2rem solid white;
}
</style>
