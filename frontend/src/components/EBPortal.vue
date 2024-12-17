<template>
  <div class="ebportal">
    <div class="landing-page">
      <img src="@/assets/ebpic.png" class="ebbg" />
      <img src="@/assets/Group 7.png" alt="Logo Background" class="logo-bg" />

      <div class="text-headings">
        <h1 class="heading-primary">EYECUTIVE BOARD</h1>
      </div>
      <div class="eb-cards-container">
        <div v-for="committee in committeeData" :key="committee.name" class="eb-card-container">
          <div class="card-head">{{ committee.name }}</div>
          <div class="cardBody">
            <div class="eb-image"></div>
            <div class="eb-designation">
              <span class="chair-name">{{ committee.chair || "TBA" }}</span><br>Chairperson
            </div>
          </div>
          <div class="cardBody">
            <div class="eb-image"></div>
            <div class="eb-designation">
              <span class="chair-name">{{ committee.vice || "TBA" }}</span><br>Vice Chairperson
            </div>
          </div>
        </div>

      </div>
    </div>
    <EBDesc />
    <Footer />
  </div>
</template>

<script>
import EBDesc from "./EBDesc.vue";
import Footer from "./Footer.vue";
import { CommitteeChoices } from "@/models/registrationModel";
export default {
  name: "CAPortal",
  components: {
    EBDesc,
    Footer
  }, data() {
    return {
      CommitteeChoices,
      committeeData: [
            { name: CommitteeChoices.DISEC, chair: "Prabal", vice: "Jay Surya" },
            { name: CommitteeChoices.UNSC, chair: "", vice: "Bhumika" },
            { name: CommitteeChoices.SOCHUM, chair: "Samresh", vice: "" },
            { name: CommitteeChoices.UNHRC, chair: "Anshika", vice: "Sarthak" },
            { name: CommitteeChoices.AIPPM, chair: "Kartik Deshmukh", vice: "Sohan" },
            { name: CommitteeChoices.AISM, chair: "Kushagra", vice: "" },
            { name: CommitteeChoices.IP, chair: "", vice: "" }
          ]
    }
  }
};
</script>

<style scoped>
@font-face {
  font-family: "Frozito";
  src: url("@/assets/fonts/Frozito.ttf") format("truetype");
}

.ebportal {
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
}

.landing-page {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 180vh;
}

.ebbg {
  position: absolute;
  top: 5%;
  aspect-ratio: 1.45;
  object-fit: cover;
  z-index: 2;
}

.glow-bg {
  width: 100%;
  align-self: center;
  position: absolute;
  z-index: 0;
  left: 50%;
  opacity: 0.6;
  top: 50%;
  transform: translate(-50%, -50%);
}

.eb-cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  background-color: rgba(90, 110, 125, 0.2);
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 100vh;
}

.eb-card-container {
  background-color: #f0f0f0;
  background-image: url("@/assets/snow square.png");
  border-radius: 0.75rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.05);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25rem;
  transition: transform 0.3s, box-shadow 0.3s;
}

.eb-card-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
}

.card-head {
  font-size: 1.5rem;
  font-weight: bold;
  color: #ccc;
  font-family: "Assassin$", sans-serif;
  margin-bottom: 0.5rem;
  width: 25rem;
  height: 3rem;
  background-color: #1E262F;
}

.cardBody {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
}

.eb-image {
  width: 18.75rem;
  height: 18.75rem;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.chair-name {
  font-family: "Copperplate Gothic", sans-serif;
}

.eb-designation {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #1E262F;
  color: #ccc;
  font-size: 1.7rem;
  font-weight: 600;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-top: 0.5rem;
  width: 25rem;
  height: 7rem;
  font-family: "Assassin$", sans-serif;
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
  transform: translate(-50%, -50%);
  left: 50%;
  top: 40%;
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
  font-size: 4.5vw;
  background-image: url("@/assets/texture.jpg");
  background-size: cover;
  background-position: center;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}

.heading-sec {
  font-family: "Copperplate", sans-serif;
  font-size: 3.5vw;
  color: aliceblue;
}

@media (max-width: 1760px) {
  .text-headings { top: 95%; }
  .logo-bg { top: 30%; width: 40%; }
  .landing-page { height: 270vh; }
  .eb-cards-container { top: 100%; }
}

@media (max-width: 1328px) {
  .logo-bg { top: 40%; }
  .text-headings { top: 95%; }
  .landing-page { height: 400vh; }
  .eb-cards-container { top: 105%; }
}

@media (max-width: 896px) {
  .ebbg { top: 10%; width: 80vw; }
  .glow-bg { top: 40%; }
  .logo-bg { top: 35%; width: 50%; }
  .text-headings { top: 60%; }
  .eb-cards-container { top: 65%; }
  .landing-page { height: 670vh; }
}

@media (max-width: 425px) {
  .ebbg { top: 6%; width: 60vw; }
  .glow-bg { top: 30%; }
  .logo-bg { top: 20%; width: 45%; }
  .text-headings { top: 50%; }
  .eb-cards-container { top: 50%; }
  .landing-page { height: 840vh; }
}
</style>
