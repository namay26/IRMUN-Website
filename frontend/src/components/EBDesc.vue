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
import prabalImage from "@/assets/eb/Prabal.png";
import jayaImage from "@/assets/eb/Jaya.png";
import anshikaImage from "@/assets/eb/Anshika.png";
import sarthakImage from "@/assets/eb/Sarthak.png";
import kartikImage from "@/assets/eb/Kartik.png";
import sohanImage from "@/assets/eb/Sohan.png";
import ayushImage from "@/assets/eb/Ayush.png";
import prakharImage from "@/assets/eb/Prakhar.png";
import eswarImage from "@/assets/eb/Eswar.png";
import akshatImage from "@/assets/eb/Akshat.png";
import shivamImage from "@/assets/eb/Shivam.png";

export default {
  name: "EBDesc",
  components: {
    Card
  },
  data() {
    return {
      EBs: [
          { name: "Prabal Bafna", role: "UNGA|DISEC - Chair", image: prabalImage },
          { name: "Jayasuryaa", role: "UNGA|DISEC - Vice Chair", image: jayaImage},
          { name: "Anshika Singh", role: "UNHRC - Chair", image: anshikaImage},
          { name: "Sarthak Tyagi", role: "UNHRC - Vice Chair", image: sarthakImage },
          { name: "Kartik Deshval", role: "AIPPM - Chair", image: kartikImage},
          { name: "Sohan Paul", role: "AIPPM - Vice Chair", image: sohanImage  },
          { name: "Ayush Vishwakarma", role: "AISM - Chair", image: ayushImage },
          { name: "Prakhar Raj Rastogi", role: "AISM - Vice Chair", image: prakharImage },
          { name: "Eswar Chava", role: "CCC - Chair", image: eswarImage  },
          { name: "Akshat Pratap Singh", role: "CCC - Vice Chair" , image: akshatImage },
          { name: "Shivam Gupta", role: "SOCHUM - Chair", image: shivamImage }
      ]
    }
  }
};
</script>

<style scoped>
.landing-page-3 {
  z-index: 1;
  width: 100%;
  height: auto;
  display: flex;
  font-size: 100px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow :visible ;
}

.container {
  position: relative;
  top: 14vw;
  padding: 2rem;
  width: 100vw;
}


.card-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
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
