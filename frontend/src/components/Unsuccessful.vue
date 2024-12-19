<template>
  <div class="landing-page-2">

    <div class="container-2">
      <div class="header">Payment Failed !</div>
      <div class="wrapper">
      <div class="content">
        Hi {{ username }}!<br>We failed to process your payment. In case the designated amount has been deducted from your account, and yet you have been redirected to this page, kindly contact us at <a href = "mailto:irmun@iitr.ac.in">irmun@iitr.ac.in</a>, we'll be glad to assist you.
        Kindly note that your allotment will only take place once your payment has been processed successfully.

      </div>

    </div>
    </div>
  </div>
  <Footer />
</template>


<script>
  import router from "@/router";
  import Footer from "./Footer.vue";
export default {
  name: "Unsuccessful",
  components: {
    Footer
  },
  data(){
    const username = sessionStorage.getItem("name");
    return {username, router}
  },
mounted(){
    if(!localStorage.getItem("initiatePayment")){
      this.$router.push("/")
    };
    setTimeout(()=>router.push('/'),60000)
  }
};
</script>


<style scoped>
@font-face {
  font-family: "Roboto";
  src: url("@/assets/fonts/Roboto.ttf") format("truetype");
}
.landing-page-2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
}
.wrapper{
background: url("@/assets/backgroundcom.png") no-repeat center center/cover;
  width: 100%;
  height: 100%;
display: flex;
  flex-direction: column;
  align-items: center;
  padding:2rem;
}

.content {
    color: #333;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 1.5rem;
    border-radius: 0.5rem;
    font-family: "Roboto", sans-serif;
    font-size: 1.2rem;
    line-height: 1.6;
    margin-top: 4rem;
  }

.bgcom {
  width: 100%;
}


.container-2 {
  margin-top: 20rem;
  position: relative;
  width: 70%;
  height: 70%;
  background: white;
  border-radius: 1.6rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}
.header {
  font-family: "Copperplate", sans-serif;
  letter-spacing: 0.2rem;
  color: white;
  position: absolute;
  top: -4%;
  width: 60%;
 height:6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1E262F;
  font-size: 1.6rem;
  border-radius: 1.5vw;
  border: 0.3vw solid white;
  text-align:center;

}

.flake4 {
  position: absolute;
  top: 8%;
  right: 0;
  z-index: 1;
}




.learn-more:hover {
  background-color: #555;
}

@media (max-width: 1024px) {
  .flake4 {
    height: 40%;
    top: -10%;
  }
  .container-2{
    margin-top: 10rem;;
  }
  .header{
  font-size:1.4rem;
  height:6rem;}
}

@media (max-width: 768px) {
  .flake4 {
    height: 50%;
    top: -80%;
  }
  .container-2{
    margin-top: -10%;
  }
  .landing-page-2{
    top: -10%;
  }
  .header{
  font-size:1.2rem;}
}

@media (max-width: 768px) {
  .flake4 {
    height: 30%;
    top: -70%;
  }
  .container-2{
    margin-top: 10rem;
    width: 80%;
  }
  .landing-page-2{
    top: -10%;
  }
}

@media (max-width: 485px) {
  .flake4 {
    height: 40%;
    top: 10%;
  }
  .container-2{
    margin-top: 5rem;
    width: 80%;
  }
  .landing-page-2{
    top: -10%;
  }
   .header{
  font-size:0.7rem;
  height:4rem;
  top:-2%;
  padding:0 10px;
  }

  .content{

 font-size:0.7rem;
}
}
</style>


