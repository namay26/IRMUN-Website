<template>
  <div class="landing-page-2">
    <div class="container 1">
      <div class="header">CCC</div>
      Year 2040: A World on the Brink of Collapse
    </div>
    <div class="container 2">
      <div class="header">DISEC</div>
      Discussing the situation in Syria with the emphasis on modern warfare
    </div>
    <div class="container 3">
      <div class="header">AIPPM</div>
      Deliberation on Reforms for India's Electoral System: Fulfilling perspective of the Democratic and Constitutional Fabric
    </div>
    <div class="container 4">
      <div class="header">UNHRC</div>
      Addressing Systemic Opression and Safeguarding Women's and Minority Rights in Afghanistan Post-Taliban Takeover
    </div>
    <div class="container 5">
      <div class="header">SOCHUM</div>
      Addressing all forms of discrimination against civilians in conflicted and post-conflicted regions with special emphasis on trefugees and marginalised group
    </div>
    <div class="container 6">
      <div class="header">AISM</div>
      Discussing upon the caste based census with special emphasis on caste reservation
    </div>
    <div class="container 7" id="ip">
      <div class="header">IP</div>
      <div class="ipcontent">The International Press Committee at MUNarchy empowers delegates to document, analyze, and creatively report on committee proceedings, blending journalism, interviews, and multimedia to uphold ethical and impactful storytelling. <br />
      <a href="https://docs.google.com/document/d/1v_blfUjkeo1zClONjTAg_X-gb81R3bKqvQa9znMKeNg/edit?tab=t.0" target="_blank">Click Here!</a></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>



@font-face {
  font-family: "Roboto";
  src: url("@/assets/fonts/Roboto.ttf") format("truetype");
}

.ipcontent{
  width: 100%;
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

#ip{
  height: auto;
  padding: 6vw;

}

.container {
  position: relative;
  width: 60vw;
  height: 400px;
  margin: 4rem;
  background: #fff url("@/assets/combg.png") no-repeat center center/cover;
  border-radius: 1.6vw;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 1.6vw;
  padding: 0 4rem;
  text-align: center;
}

.header {
  font-family: "Roboto", sans-serif;
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

@media (max-width: 1024px) {
  .header{
    font-size: 5vw;
    height: 6vh;
  }
  .container{
    height: 300px;
    font-size: 3vw;
  }
}

@media (max-width: 485px) {
  .header{
    font-size: 5vw;
    height: 6vh;
  }
  .container{
    height: 200px;
    margin:2rem;
    padding:0 1rem;
  }
}

@media (max-width: 1150px) {
  #ip{
    padding: 8vw;
  }
}

@media (max-width: 485px) {
  #ip{
    padding: 12vw;
  }
}


</style>
