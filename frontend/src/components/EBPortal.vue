<template>
  <div class="ebportal">
    <div class="landing-page">
      <img src="@/assets/ebpic.png" class="ebbg" />
      <img src="@/assets/Group 7.png" alt="Logo Background" class="logo-bg" />

      <div class="text-headings">
        <h1 class="heading-primary">EYECUTIVE BOARD</h1>
      </div>
      <div class="eb-cards-container">
        <div class="eb-card-container">
          <div class="card-head">{{ CommitteeChoices.DISEC }}</div>
          <div class="cardBody">
            <div class="eb-image"></div>
            <div class="eb-designation"><span class = "chair-name">Prabal</span><br>Chirperson</div>
          </div>
          <div class="cardBody">
            <div class="eb-image"></div>
            <div class="eb-designation"><span class = "chair-name">Jay Surya</span><br>Vice Chairperson</div>
          </div>
        </div>

        <div class="eb-card-container">
          <div class="card-head">{{ CommitteeChoices.UNSC }}</div>
          <div class="cardBody">
            <div class="eb-image"></div>
            <div class="eb-designation"><span class = "chair-name"></span>Chirperson</div>
          </div>
          <div class="cardBody">
            <div class="eb-image"></div>
            <div class="eb-designation"><span class = "chair-name">Bhumika</span><br>Vice Chairperson</div>
          </div>

        </div>
        <div class="eb-card-container">
          <div class="card-head">{{ CommitteeChoices.SOCHUM }}</div>
          <div class="cardBody">
            <div class="eb-image"></div>
            <div class="eb-designation"><span class = "chair-name">Samresh</span> <br>Chirperson</div>
          </div>
          <div class="cardBody">
            <div class="eb-image"></div>
            <div class="eb-designation"><span class = "chair-name"></span>Vice Chairperson</div>
          </div>
        </div>
        <div class="eb-card-container">
          <div class="card-head">{{ CommitteeChoices.UNHRC }}</div>
          <div class="cardBody">
            <div class="eb-image"></div>
            <div class="eb-designation"><span class = "chair-name">Anshika</span><br>Chirperson</div>
          </div>
          <div class="cardBody">
            <div class="eb-image"></div>
            <div class="eb-designation"><span class = "chair-name">Sarthak</span><br>Vice Chairperson</div>
          </div>
        </div>
        <div class="eb-card-container">
          <div class="card-head">{{ CommitteeChoices.AIPPM }}</div>
          <div class="cardBody">
            <div class="eb-image"></div>
            <div class="eb-designation"><span class = "chair-name">Kartik Deshmukh</span><br>Chirperson</div>
          </div>
          <div class="cardBody">
            <div class="eb-image"></div>
            <div class="eb-designation"><span class = "chair-name">Sohan</span><br>Vice Chairperson</div>
          </div>
        </div>
        <div class="eb-card-container">
          <div class="card-head">{{ CommitteeChoices.AISM }}</div>
          <div class="cardBody">
            <div class="eb-image"></div>
            <div class="eb-designation"><span class = "chair-name">Kushagra</span><br>Chirperson</div>
          </div>
          <div class="cardBody">
            <div class="eb-image"></div>
            <div class="eb-designation"><span class = "chair-name"></span>Vice Chairperson</div>
          </div>
        </div>
        <div class="eb-card-container">
          <div class="card-head">{{ CommitteeChoices.IP }}</div>
          <div class="cardBody">
            <div class="eb-image"></div>
            <div class="eb-designation"><span class = "chair-name"></span>Chirperson</div>
          </div>
          <div class="cardBody">
            <div class="eb-image"></div>
            <div class="eb-designation"><span class = "chair-name"></span>Vice Chairperson</div>
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
  },data(){
    return{
      CommitteeChoices
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
  /* border-radius: 1rem; */
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
  position: relative;
  top: 120vh;
}

.eb-card-container {
  background-color: #f0f0f0;
  background-image: url("@/assets/snow square.png");
  border-radius: 0.75rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.05);
  /* margin: 1rem; */
  /* padding: 1rem; */
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25rem;

}

.eb-card-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
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
.chair-name{
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
  border: 3px;
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

@media (max-width: 768px) {
  .ebbg {
    top: 40%;
    width: 80vw;
    height: 80vw;
  }

  .glow-bg {
    top: 40%;
  }

  .text-headings {
    top: 72%;
  }

  .logo-bg {
    top: 30%;
    width: 40%;
  }
}

@media (max-width: 425px) {
  .ebbg {
    top: 20%;
    width: 60vw;
    height: 60vw;
  }

  .glow-bg {
    top: 20%;
  }

  .text-headings {
    top: 35%;
  }

  .logo-bg {
    top: 15%;
    width: 40%;
  }
}
</style>
