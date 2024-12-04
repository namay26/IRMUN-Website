<template>
    <div class="team-section">
      <div class="text-headings">
        <h1 class="heading-primary">
          <span class="meet">MEET</span> <span class="the">THE</span> <span class="team2">TEAM</span>
        </h1>
      </div>

      <div class="section">
        <div class="leaders-grid">
          <div class="team-card">
            <img src="@/assets/team/divyansh.png" alt="Secretary General" />
            <div class="team-info textbox">
              <h3>Divyansh Kothari</h3>
              <p>Secretary General</p>
            </div>
          </div>
        </div>
      </div>
      <br /> <br />

      <div class="section-sub">
        <div class="leaders-grid">
          <div class="team-card">
            <img src="@/assets/team/abya.png" alt="Deputy Secretary General" />
            <div class="team-info textbox">
              <h3>Abya Singh</h3>
              <p>Deputy Secretary General</p>
            </div>
          </div>
          <div class="team-card">
            <img src="@/assets/team/Janhavi.png" alt="Deputy Secretary General" />
            <div class="team-info textbox">
              <h3>Janhavi Ghogare</h3>
              <p>Deputy Secretary General</p>
            </div>
          </div>
        </div>
      </div>

      <br /><br />
      <div class="section1">
        <h2>HEADS</h2>
        <div class="team-grid">
          <div v-for="head in heads" :key="head.name" class="team-card">
            <img :src="head.image" :alt="head.name" />
            <div class="team-info textbox">
              <h3>{{ head.name }}</h3>
              <p>{{ head.role }}</p>
            </div>
          </div>
        </div>
      </div>


      <div class="section2">
        <h2>MANAGERS</h2>
        <br /> <br />
        <div class="team-grid">
          <div v-for="manager in managers" :key="manager.name" class="team-card">
            <img :src="manager.image" :alt="manager.name" />
            <div class="team-info textbox">
              <h3>{{ manager.name }}</h3>
              <p>{{ manager.role }}</p>
            </div>
          </div>
        </div>
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
  export default {
    data() {
      return {
        heads: [
          { name: "Kartikey Singh", role: "Sponsorship & Marketing", image: kartikeyImage },
          { name: "Manmath Ashtikar", role: "Promotions", image: manmathImage },
          { name: "Ojaswi Chopra", role: "Social Media and Design", image: ojaswiImage },
          { name: "Avnish Yadav", role: "Organising Committee", image: avnishImage },
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
  font-family: "Assassin$";
  src: url("@/assets/fonts/Assassin$.ttf") format("truetype");
}

.team-section {
  padding: 2rem;
  color: white;
}

.section h2,
.section1 h2,
.section2 h2,
.section3 h2 {
  font-size: clamp(1.5rem, 4vw, 3rem);
}

.section .team-card{
  margin-top: 1rem;
  z-index: 2;
  width:350px;
  height:350px;
}

.section .team-card img{
  width:350px;
  height: 350px;
  gap:1em;
  position: relative;
  overflow: visible;
  object-fit: cover;
  transform: translateX(-8%);
  top:-60px;

}

.section .textbox {
  height:300px;
  width: 130%;
  left: -15%;
  font-size: 0.1rem;
  padding:0.6rem;
  top: -40px;
}

.section-sub .team-card {
  margin-top: 1rem;
  z-index: 2;
  width:350px;
  height:350px;
}

.section-sub .team-grid {
  display: grid;
  margin-left: 4rem;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
}

.section-sub .team-card img{
  width:350px;
  height: 350px;
  gap:1em;
  position: relative;
  overflow: visible;
  object-fit: cover;
  transform: translateX(-4%);
  top:-50px;
}

.section-sub .textbox {
  height:300px;
  width: 130%;
  left: -15%;
  font-size: 0.1vw;
  padding:0.6rem;
  top: -40px;
  row-gap: 2rem;;
}

.section1 {
  margin-bottom:7rem;
}


.section2 {
  bottom: 20%;
  width:max;
}

.section-sub {
    margin-top: -15rem;
}

.section1 h2 {
  font-size: 4.5vw;
  margin-bottom: 1rem;
  margin-top: 1rem;
  text-align: center;
  font-family: "Assassin$", sans-serif;
  letter-spacing: 0.3em;
}

.section1 .team-card{
  width:300px;
  height: 300px;
}

.section1 .team-grid {
  display: grid;
  margin-left: 4rem;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
}

.section1 .team-card img{
  width:300px;
  height: 300px;
  gap:1em;
  position: relative;
  overflow: visible;
  object-fit: cover;
  transform: translateX(-8%);
  top:-50px;
}

.section1 h2{
  bottom: 20px;
}

.section1 .textbox {
  height:300px;
  width: 130%;
  left: -15%;
  font-size: 0.1vw;
  padding:0.6rem;
  top: -40px;
  row-gap: 2rem;;
}

.section2 h2 {
  font-size: 4.5vw;
  margin-bottom: 1rem;
  margin-top: 1rem;
  text-align: center;
  font-family: "Assassin$", sans-serif;
  letter-spacing: 0.3em;
}

.section2 .team-card{
  width:200px;
  height: 200px;
}

.section2 .team-grid {
  display: grid;
  margin-left: 8rem;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem;
  row-gap: 8rem;
  justify-content: center;
}


.section2 .team-card img{
  width:200px;
  height: 200px;
  gap:1em;
  position: relative;
  overflow: visible;
  object-fit: cover;
  transform: translateX(-8%);
  top:-50px;
}

.section2 .textbox {
  height:200px;
  width: 175%;
  left: -37%;
  font-size: 0.1vw;
  padding:0.6rem;
  top: -40px;
}


.section3 h2 {
  font-size: 4.5vw;
  margin-bottom: 1rem;
  margin-top: 1rem;
  text-align: center;
  font-family: "Assassin$", sans-serif;
  letter-spacing: 0.3em;
}

.section3 .executives-list {
    text-align: center;
    font-size: 1.3  vw;
    font-family: "Copperplate Gothic", sans-serif;
}


.leaders-grid {
  margin-top: 18rem;
  display: flex;
  justify-content: center;
  gap: 6rem;
  flex-wrap: wrap;
}


.h2{
    font-family: "Assassin$", sans-serif;
    font-size: 19vw;
}

.text-headings {
  position: absolute;
  top: 23%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  line-height: 1;
  color: #1e262f;
  z-index: 3;
}

.heading-primary {
  font-family: "Frozito", sans-serif;
  font-size: clamp(2rem, 5vw, 4rem);
  background-image: url("@/assets/texture.jpg");
  background-size: cover;
  background-position: center;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  gap: 2rem;
  justify-content: center;
  align-items: start;
}

.team-card {
  text-align: center;
  background: white;
  background-image: url("@/assets/snow square.png");
  padding: 1rem;
  border-radius: 10px;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}


.team-card:hover {
  transform: scale(1.05);
}

.team-card img {
  width: 300px;
  height: 500px;
  object-fit:fill;
  border-radius: 8px;
}

.section1, .section2, .section3 {
  margin-bottom: 5rem;
}

.textbox {
  margin-top: -2rem;
  padding: 1rem;
  background: #1E262F;
  border-radius: 8px;
  z-index: 3;
  position: relative;
  width: 130%;
  max-width: none;
  border: 4px solid #ccc;
  box-sizing: border-box;
  left: -15%;
  overflow: visible;
  border-radius: 20px;
  font-family: "Copperplate Gothic", sans-serif;
}


.team-info h3 {
  font-size: clamp(1rem, 1.5vw, 1.2rem);

  margin-bottom: 0.3rem;
}

.team-info p {
  font-size: clamp(0.8rem, 1vw, 1rem);
  color: #ccc;
}

.executives-list {
  list-style: none;
  font-size: clamp(0.9rem, 1.2vw, 1rem);
  padding: 0;
  columns: 2;
}

.executives-list li {
  margin-bottom: 0.5rem;
}

.meet{
  font-size: larger;
}

.team2{
  font-size:larger;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  justify-content: center;
}

@media screen and (max-width: 768px) {
  .leaders-grid {
    flex-direction: column;
    gap: 1.5rem;
  }

  .team-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}

@media screen and (max-width: 480px) {
  .team-grid {
    grid-template-columns: 1fr;
  }

  .executives-list {
    columns: 1;
  }
}

</style>
