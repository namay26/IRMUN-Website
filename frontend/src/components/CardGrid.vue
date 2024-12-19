<template>
<div class="container">
  <div class="team-section">
      <div class="text-headings">
        <h1 class="heading-primary">
          <span class="meet">MEET</span> <span class="the">THE</span> <span class="team2">TEAM</span>
        </h1>
      </div>

      </div>

 <div class="secy">
 <Card
      v-for="(card, index) in head"
      :key="index"
      :image="card.image"
      :name="card.name"
      :role="card.role"
    />
 </div>

 <div class="adSecy">
 <Card
      v-for="(card, index) in adHead"
      :key="index"
      :image="card.image"
      :name="card.name"
      :role="card.role"
    />
 </div>

 <h2>HEADS</h2>
  <div class="card-grid">

    <Card
      v-for="(card, index) in cards"
      :key="index"
      :image="card.image"
      :name="card.name"
      :role="card.role"
    />
  </div>

  <h2>MANAGERS</h2>
  <div class="card-grid">

    <Card
      v-for="(card, index) in managers"
      :key="index"
      :image="card.image"
      :name="card.name"
      :role="card.role"
    />
  </div>

  <div class="section3">
        <h2>EXECUTIVES</h2>
        <ul class="executives-list">
          <li v-for="executive in executives" :key="executive">{{ executive }}</li>
        </ul>
      </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
import kartikeyImage from "@/assets/team/kartikey.png";
import manmathImage from "@/assets/team/manmath.png";
    import ojaswiImage from "@/assets/team/ojaswi.png";
    import avnishImage from "@/assets/team/avnish.png";
    import sahilImage from "@/assets/team/sahil.png";
    import sumedhImage from "@/assets/team/sumedh.png";
    import pranjayImage from "@/assets/team/pranjay.png";
    import samarthImage from "@/assets/team/samarth.png";
    import dakshImage from "@/assets/team/daksh.png";
    import kanwarImage from "@/assets/team/kanwar.png";
    import sanchiImage from "@/assets/team/sanchi.png";
    import bhavyaImage from "@/assets/team/bhavya.png";
    import divyanshImage from "@/assets/team/divyansh.png";
    import abyaImage from "@/assets/team/abya.png";
    import janhaviImage from "@/assets/team/Janhavi.png";

export default {
  name: "CardGrid",
  components: {
    Card,
  },
  data() {
    return {
      cards: [
        { name: "Avnish Yadav", role: "Sponsorship & Marketing", image: avnishImage },
          { name: "Abya Singh", role: "Promotions", image: abyaImage },
          { name: "Ojaswi Chopra", role: "Design and Technology", image: ojaswiImage },
          { name: "Janhavi Ghogare", role: "Organising Committee", image: janhaviImage },
      ],

      head:[
          { image: divyanshImage, name: "Divyansh Kothari",role:"SECRETARY GENERAL" },
      ],

      adHead:[
      { image: kartikeyImage, name: "Kartikey Singh",role:"DEPUTY SECRETARY GENERAL" },
      { image: manmathImage, name: "Manmath Ashtikar",role:"DEPUTY SECRETARY GENERAL" },
      ],
       managers: [
          { name: "Sahil Dagar", role: "Social Media & Design", image: sahilImage },
          { name: "Sumedh Gosavi", role: "Sponsorship", image: sumedhImage },
          { name: "Pranjay Saini", role: "Sponsorship", image: pranjayImage },
          { name: "Samarth Jain", role: "Promotions", image: samarthImage },
          { name: "Daksh Badjatiya", role: "Promotions", image: dakshImage },
          { name: "Kanwar Anmol Singh", role: "Promotions", image: kanwarImage },
          { name: "Sanchi Sonawane", role: "Marketing", image: sanchiImage },
          { name: "Bhavya Bhargav", role: "Marketing", image: bhavyaImage }
        ],

        executives: [
          "Aryan Rai",
          "Budhayan Chakraborty",
          "Harsh Gupta",
          "Kanav Gupta",
          "Kaushlandra Singh",
          "Kunj Mendapara",
          "Bipasha Gayary",
          "Kushagra Agrawal",
          "Namay Rohatgi",
          "Priyanshu Chauhan",
          "V Anuj",
          "Veer Vardhan Singh",
          "Vidhan Agarwal",
          "Prisha Sinha",
          "Vatsal Tyagi",
          "Aarush Agrawal",

        ],
    };
  },
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


.container{
position:relative;
  top:14vw;
  padding:2rem;
  width:100vw;
}

.secy{
display:flex;
justify-content:center;

width:100%;
}

.team-section {
  padding: 2rem;
  color: white;
  margin-bottom:2rem;
}
h2{

font-size: 4rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  text-align: center;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.3em;
  bottom: 20px;
  color:white;

}

.text-headings {
  position: absolute;

  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  line-height: 1;
  color: #1e262f;
  z-index: 3;

}

.heading-primary {
  font-family: "Gothic", sans-serif;
  font-size: clamp(2rem, 5vw, 4rem);
  color: white;

}
.card-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Default for desktop */
  gap: 1rem;
}
.adSecy{
display: grid;
  grid-template-columns: repeat(2, 1fr); /* Default for desktop */
  gap: 1rem;
} 

.section3 .executives-list {
    text-align: center;
    font-size: 1.3  vw;
    font-family: "Roboto", sans-serif;
}
.executives-list {
  list-style: none;
  font-size: clamp(0.9rem, 1.2vw, 1rem);
  padding: 0;
  columns: 2;
  color:white;
}

.executives-list li {
  margin-bottom: 0.5rem;
}

@media (max-width: 1300px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr); /* For tablets */
  }

}

@media (max-width: 827px) {

  .adSecy{
  grid-template-columns: repeat(1, 1fr);
  }
}

@media (max-width: 700px) {
  .card-grid {
    grid-template-columns: 1fr; /* For phones */
  }
  h2{
  font-size:2rem;
  }
}
</style>
