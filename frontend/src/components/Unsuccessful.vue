<template>
<div class="welcomePage">
<div class="container">
<h1 class="payment_acknowledge">Payment unsuccessful<br>Please verify your details and try again</h1>
</div>
<Footer/>
</div>

</template>

<style scoped>
h1{
 font-family: "Copperplate", sans-serif;
  letter-spacing: 0.1rem;
position:relative;
font-size:2vw;
text-align:center;
}
.welcomePage {
display: flex;
  flex-direction: column;
  background: url("@/assets/SnowFallBg.png") no-repeat center center scroll;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  margin:0;
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
.payment_acknowledge{
  color:black
}
</style>

<script>
  import Footer from "./Footer.vue";
export default {
  name: "Unsuccessful",
  components: {
    Footer,
  },
};
</script>
