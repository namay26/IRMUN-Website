<template>
  <div class="container">
    <div class="team-section">
      <div class="text-headings">
        <h1 class="heading-primary">
          Get your Merch Now!
        </h1>
      </div>
      <div class="card-container">
        <!-- Card 1 -->
        <div class="card">
          <img src="@/assets/black.png" alt="Image 1">
        </div>

        <!-- Card 2 -->
        <div class="card">
          <img src="@/assets/white.png" alt="Image 2">

        </div>
      </div>

    </div>

    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdbnGWePq7idTiYbDgbl__mS-thD8lKInvD7vw3blO5hoWyRA/viewform"><button class="btn btn-primary">Buy Now</button></a>

  </div>
  <Footer />
</template>

<script>
import Footer from "./Footer.vue";
export default {
  name: "Merch",
  components: {
    Footer
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


.container {
  position: relative;
  top: 14vw;
  padding: 2rem;
  width: 100vw;
}


.team-section {
  padding: 2rem;
  color: white;
}
.btn{
  margin-left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 2rem;
  background-color: white;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  height: 3vw;
  font-weight: 600;
  font-size: 1.2vw;
  color: #1E262F;
}
h2 {

  font-size: 4rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  text-align: center;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.3em;
  bottom: 20px;
  color: white;

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

.card-container {
  margin-top: 10vh;
  display: flex;
  gap: 8vw;
  justify-content: center;
  padding: 20px;
}

.card {
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
  width: 700px;
  text-align: center;
  overflow: hidden;
}

.card img {
  width: 100%;
  height: auto;
}

.card-body {
  padding: 15px;
}

.card-title {
  font-size: 1.2em;
  margin: 10px 0;
}

.card-text {
  font-size: 0.9em;
  color: #555;
}

@media screen and (max-width: 900px) {

  .btn{
    height: 4vw;
  }
}

@media screen and (max-width: 550px) {
  .card-container {
    flex-direction: column;
    gap: 2rem;
  }

  .card {
    width: 100%;
  }
  .btn{
    height: 7vw;
    font-size: 2.5vw;
  }
}

@media screen and (max-width: 375px) {
  .card-container {
    flex-direction: column;
    gap: 2rem;
  }

  .card {
    width: 100%;
  }
  .btn{
    height: 7vw;
    font-size: 2.5vw;
  }
}



</style>
