<template>
  <div class="welcomePage">
     <div class="landing-page">
      <div class="container">
      <div class="header">PAYMENT</div>
      
       <div class="content">
       <form>
       <input type="text" id="munId" name="name" placeholder="MUNarchy ID" />
       <button type="submit" class="payBtn2">Check</button>
       </form>
       <h3 class="notFound">ID does not exist</h3>
       <h3 class="completed">Payment has already been completed</h3>
       <button type="submit" class="payBtn">Pay</button>
    </div>
    </div>
   
    
    </div>
    <Footer />
  </div>
</template>

<script>

import Footer from "./Footer.vue";
export default {
  name: "Welcome",
  components: {
    Footer,
  },
};
</script>

<style scoped>

@font-face {
  font-family: "Frozito";
  src: url("@/assets/fonts/Frozito.ttf") format("truetype");
}

a {
  all: unset; 
  cursor: pointer; 
}

.notFound{
color:red;
text-align:center;
display:none;
}

.completed{
color:green;
text-align:center;
display:none;
}
form{
display:flex;
flex-direction:column;
justify-content:center;
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

.content{
position:relative;
display:flex;
flex-direction:column;
width:60%;
justify-content:center;

}
#munId{
width:80%;
  text-align: center; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  height: 4rem; 
  margin: 1rem auto;
  padding:0.5rem;
  font-family: "Copperplate", sans-serif;
  letter-spacing: 0.2rem;
  font-size: 1.2rem;
  background:#D9D9D9;
  border:none;
}

input:active{
border:none;
outline:none;
}

.payBtn , .payBtn2{

font-family: "Copperplate", sans-serif;
  letter-spacing: 0.2rem;
  color: white;
  width: 60%;
  background: #1E262F;
  font-size: 1.5rem;
  border-radius: 0.8rem;
  text-align: center; 
  
  justify-content: center; 
  align-items: center; 
  height: 4rem; 
  margin: 1rem auto;
  padding:0.5rem;
  cursor: pointer; 
transition: all 0.3s ease;
  
}


.payBtn{
display:none;}
 .payBtn:hover ,.payBtn:hover{
      
      transform: scale(1.1);
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
  font-family: "Copperplate", sans-serif;
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
  font-size: 3vw;
  border-radius: 1rem;
  border: 0.2rem solid white;
  margin-bottom:1rem;
}
@media screen and (max-width: 768px) {
  .container {
   top:15vh;
    width: 90%;
    border-radius: 10px;
  }
  .payBtn ,.payBtn2{
  font-size:1.2rem;
   height: 3rem;
  }

  
}

@media screen and (max-width: 480px) {
  .container {
    top:8vh;
    width: 90%; 
    margin: 3rem auto; 
    padding: 0.5rem; 
  }

  .header{
   height: 6vh;
  }
  .payBtn ,.payBtn2{
  font-size:1rem;
  height:2rem;
  margin:0.5rem auto;

  }

  #munId{
  font-size: 0.8rem;
  }
}

@media (max-width: 425px) {
  .heading-primary {
    margin-top: 0;
  }
}

</style>