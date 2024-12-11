<template>
  <div class="landing-page-2">

    <div class="container-2">
      <div class="header">LETTER FROM SECRETARY GENERAL</div>
      <div class="wrapper">
      <div class="content">
       IRMUN was founded in 2021 by a group of students of IIT Roorkee and since then, it has continuously conducted in-campus MUNs at Thomso, Cognizance, Cultural General Championship, Social Summit and E-Summit. Several teams from IRMUN have attended inter-collegiate events in different colleges in the past and acquired different levels of prizes in many of them too. The exposure to other MUN societies helped us realize the positive impact that these events have on the development of young people. MUN provides a common ground for students of different ethnicities, backgrounds, and cultures to learn from each other, collaborate and come up with solutions to make changes to our country and the world. MUN experiences teach participants how to negotiate, build consensus and resolve conflicts—skills that are not only invaluable in the realm of international relations but also transferable to personal and professional growth.

      We are proud to have a talented Organising Team of IRMUN which made this event a possibility. MUNarchy will be the first MUN event on campus dedicated towards celebrating diplomacy, leadership and collaboration. This event aims to encourage fruitful debates and global awareness as a new generation of enthusiasts steps into the world of global politics. Together, we aspire to make MUNarchy a success and a stepping stone for the future events of IRMUN.

      </div>


    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Details",
  methods: {
    navigateToCommittee() {
      this.$router.push('/committees');
    }
  }
};
</script>


<style scoped>
.landing-page-2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
}
.wrapper{
background: url("@/assets/backgroundcom.png") no-repeat center center scroll;
display: flex;
  flex-direction: column;
  align-items: center;
  padding:2rem;
}
.content{
  color:black;
  margin-top:6rem;
  font-size:1.5rem;
 font-family: "Copperplate", sans-serif;
  letter-spacing: 0.2rem;
 margin:4rem;
text-align: center;
}

.bgcom {
  width: 100%;
}


.container-2 {
  margin-top: 10rem;
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
