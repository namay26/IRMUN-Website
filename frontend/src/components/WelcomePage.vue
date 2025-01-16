<template>
  <div class="welcomePage">
    <div class="landing-page">
      <div class="container">
        <div class="header">WELCOME!</div>
        <div class="content">

          <div class="register">
            <router-link to="/register">NEW REGISTRATION</router-link>
          </div>
          <!-- <div class="payment"><router-link to="/payment">MAKE PAYMENT/<br />CHECK PAYMENT STATUS</router-link></div> -->
          <div class="allotment"><router-link to="/allotment-check">CHECK ALLOTMENT STATUS</router-link></div>
        </div>
      </div>


    </div>
    <Footer />
  </div>
</template>

<script>

import Footer from "./Footer.vue";
export default {
  name: "WelcomePage",
  components: {
    Footer,
  },
};
</script>

<style scoped>
@font-face {
  font-family: "Roboto";
  src: url("@/assets/fonts/Roboto.ttf") format("truetype");
}

a {
  all: unset;
  cursor: pointer;
}

.welcomePage {
  display: flex;
  flex-direction: column;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  margin: 0;
}

.content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 60%;
  justify-content: center;
}

.payment, .allotment {
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.2rem;
  color: white;
  width: 90%;
  background: #1E262F;
  font-size: 1.4vw;
  border-radius: 0.8rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;

  margin: 1rem auto;
  padding: 0.5rem;
}

.register {
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.2rem;
  color: white;
  width: 90%;
  background: #1E262F;
  font-size: 1.4vw;
  border-radius: 0.8rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  margin: 1rem auto;
  padding: 0.5rem;

}

.landing-page {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.container {
  position: relative;
  top: 12vw;
  width: 60%;
  max-width: 800px;
  height: 60%;
  aspect-ratio: 3 / 2;
  margin: 2rem auto;
  background: #fff url("@/assets/combg.png") no-repeat center center;
  background-size: cover;
  border-radius: 1.6vw;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.header {
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.2rem;
  color: white;
  position: absolute;
  top: -6%;
  width: 60%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1E262F;
  font-size: 2vw;
  border-radius: 1rem;
  border: 0.2rem solid white;
  margin-bottom: 1rem;
}

@media screen and (max-width: 768px) {
  .container {
    top: 15vh;
    width: 90%;
    border-radius: 10px;
  }

  .register {
    font-size: 2vw;
  }


}

@media screen and (max-width: 480px) {
  .container {
    top: 8vh;
    width: 90%;
    margin: 3rem auto;
    padding: 0.5rem;
  }

  .header {
    height: 6vh;
  }

  .register {
    font-size: 2vw;
    height: 3rem;
    margin: 0.5rem auto;

  }
}

@media (max-width: 485px) {
  .header{
    font-size: 5vw;
  }
  .heading-primary {
    margin-top: 0;
  }
  .allotment,.payment,.register {
    font-size: 2vw;
  }
}


@media (max-width: 920px){
  .container {
    top: 15vh;
    width: 90%;
    border-radius: 10px;
  }

  .register {
    font-size: 2vw;
  }
}

@media (max-width: 610px){
  .container {
    top: 15vh;
    width: 90%;
    border-radius: 10px;
    height: 50vh;
  }

  .register {
    font-size: 2vw;
  }
}
</style>
