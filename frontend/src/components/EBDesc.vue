<template>
  <div class="landing-page-3">
    <div class="container">
    <div class="card-grid">
        <Card v-for="(card, index) in EBs" :key="index" :image="card.image" :name="card.name" :role="card.role" />
      </div>
  </div>
</div>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "EBDesc",
  components: {
    Card
  }, data() {
    return {
      EBs: [
          { name: "Sahil Dagar", role: "Social Media & Design", image: sahilImage },
          { name: "Bhavya Bhargav", role: "Marketing", image: bhavyaImage },
          { name: "Sumedh Gosavi", role: "Sponsorship", image: sumedhImage },
          { name: "Samarth Jain", role: "Promotions", image: samarthImage },
          { name: "Kanwar Anmol Singh", role: "Promotions", image: kanwarImage },
          { name: "Gaurav Sonawane", role: "Marketing", image: GauravImage },
          { name: "Aarush Agarwal", role: "Promotions", image: AarushImage },
          { name: "Kanav Gupta", role: "Promotions", image: kanavImage },
          { name: "Namay Rohatgi", role: "Marketing", image: namayImage },
          { name: "Vatsal Tyagi", role: "Sponsorship", image: vatsalImage },
          { name: "Prisha Sinha", role: "Promotions", image: PrishaImage },
          { name: "Budhayan Chakraborty", role: "Marketing", image: BudhayanImage },

        ],
    }}
};
</script>

<style scoped>
.landing-page-3 {
  z-index: 1;
  width: 100%;
  height: 100vh;
  display: flex;
  font-size: 100px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container{
position:relative;
  top:14vw;
  padding:2rem;
  width:100vw;
}


.card-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}


</style>

