<template>
  <div class="landing-page-2">
    <div class="container-2">
      <div class="header">Our Partners</div>
      <img class="bgcom" src="@/assets/sponsors.png" />
    </div>

    <div class="container-2">
      <div class="header">Our Collabs</div>
      <img class="bgcom" src="@/assets/collabs.png" />
    </div>

    <div class="container-2 koreacon">
      <div class="header">Endorsements</div>
      <div class="cont">
        <img class="bgkorea" src="@/assets/korea.jpg" />
        <!-- <img class="korealogo" src="@/assets/koreanemb.png" /> -->
        <span class="endorse">Endorsement from the esteemed Ambasssador of the Republic of Korea to India, Mr. Lee Seong-ho.</span>
    </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: "LandingPage",
  components: {
    Footer,
  },
  methods: {
    navigateToCommittee() {
      this.$router.push('/committees');
    }
  }
};
</script>


<style scoped>
@font-face {
  font-family: "Roboto";
  src: url("@/assets/fonts/Roboto.ttf") format("truetype");
}

@font-face {
  font-family: "Gothic";
  src: url("@/assets/fonts/Gothic.ttf") format("truetype");
}

.cont{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.bgkorea{
  width: 50%;
  height: 50%;
  margin-right: 2rem;
}

.endorse{
  color: black;
  font-size: 1.4vw;
  margin-left: 4vw;
  text-align: center;
}

.koreacon{
  height:auto;
  padding: 8vh;
}
.landing-page-2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
}

.bgcom {
  width: 100%;
  padding: 4vw;
}


.container-2 {
  margin-top: 20vh;
  position: relative;
  width: 70%;
  height: 70%;
  background: white url("@/assets/backgroundcom.png") no-repeat center center/cover;
  border-radius: 1.6rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.header {
  font-family: "Gothic", sans-serif;
  letter-spacing: 0.2rem;
  color: white;
  position: absolute;
  top: -6%;
  width: 60%;
  height: 12%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1E262F;
  font-size: 3vw;
  border-radius: 1.5vw;
  border: 0.3vw solid white;
}

.flake4 {
  position: absolute;
  top: 8%;
  right: 0;
  z-index: 1;
}


.learn-more {
  font-family: "Roboto", sans-serif;
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

.learn-more:hover {
  background-color: #555;
}

@media (max-width: 1024px) {
  .flake4 {
    height: 40%;
    top: -10%;
  }

  .container-2 {
    margin-top: 10rem;
    ;
  }
}

@media (max-width: 500px) {
  .bgkorea{
    width: 100%;
    height: auto;
    margin-right: 0;
  }
  .cont{
    flex-direction: column;
    justify-content: space-between;
  }
  span{
    margin-top: 2vh;
  }
}


</style>
