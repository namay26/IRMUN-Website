<template>
  <div class="landing-page-2">
    <div class="question">
      <h2 class="campus">WHAT IS CAMPUS</h2>
      <h2 class="ambassador">AMBASSADOR PROGRAM?</h2>
    </div>
    <div class="container-2">
      <img src="../assets/caques.png" alt="CA" class="ca" />
      <div class="caexplain">As a part of the student campus ambassador program, MUNARCHY offers students the chance to
        represent and promote the organization at their school, colleges and universities. Their responsibilities
        comprise developing our presence and promoting MUNARCHY events among students and educators by serving as a link
        between their colleges and us.</div>
    </div>

    <div class="offer-container">
      <div class="heading">
        <h1>WHAT DO WE OFFER?</h1>
      </div>
      <div class="offer-items">
        <div class="offer-item">
          <span class="snowflake"><img src='../assets/1.png'></span>
          <p>Certificate to add in your Resume. You can use this experience to build a portfolio.</p>
        </div>
        <div class="offer-item sec">
          <span class="snowflake"><img src='../assets/2.png'></span>
          <p>Campus Ambassador at our fest gets the chance to represent their college in our fest.</p>
        </div>
        <div class="offer-item third">
          <span class="snowflake"><img src='../assets/3.png'></span>
          <p>Free entry for the Campus Ambassador on 30+ participation.</p>
        </div>
        <div class="offer-item fourth">
          <span class="snowflake"><img src='../assets/4.png'></span>
          <p>You can use this experience to grab internship opportunities from our sponsors.</p>
        </div>
        <div class="offer-item fifth">
          <span class="snowflake"><img src='../assets/5.png'></span>
          <p>Free entry to the workshops conducted by our partners.</p>
        </div>
      </div>
    </div>

  </div>
</template>


<style scoped>
.landing-page-2 {
  z-index: 1;
  background: url("../assets/SnowFall.png") no-repeat center center/cover;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container-2 {
  margin-top: 4rem;
  position: relative;
  width: 85%;
  height: 600px;
  background: white;
  border-radius: 1.6rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.ca {
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;
}

.caexplain {
  z-index: 3;
  font-size: 2.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  color: #183248;
  text-align: center;
  padding: 2rem;
}

.question {
  z-index: 2;
  color: white;
  font-weight: 400;
  margin-top: 10rem;
  font-family: "Copperplate Gothic", sans-serif;
  font-size: 5rem;
  text-align: center;
  line-height: 1.2;
}

.offer-container {
  width: 90%;
  margin-top: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.heading{
  font-family: "Copperplate Gothic", sans-serif;
  color:white;
  font-size:2.4rem;
  font-weight: 400px;
  border: 2px solid white;
  border-radius: 16px;
  width: max-content;
  padding:0 2%;
  background-color:#1E262F;
}

.offer-items{
  margin-top: 2.4%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  color:white;
  font-size: 1.8rem;
}

.offer-item{
  width: auto;
  display: flex;
  align-items: center;
}

p{
  margin: 1.6rem;
  width:50%;
}

.sec, .fourth{
  text-align: right;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
}


</style>

