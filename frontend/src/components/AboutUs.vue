<template>
  <div class="landing-page-2">

    <div class="container-2">
      <div class="header">ABOUT US</div>
      <div class="wrapper">
      <div class="content">
       The IRMUN Society, IIT Roorkee's student-run Model United Nations club, focuses on enhancing participants' understanding of global issues and international diplomacy. By simulating debates held at the United Nations and its committees, the club helps students build essential skills in public speaking, research, negotiation, and leadership.

IRMUN encourages members to engage in discussions on global challenges, aiming to develop their ability to address conflicts diplomatically. Students from IIT Roorkee actively participate in prestigious model UN Conferences, Youth Parliaments, and similar events across India, gaining valuable insights into policymaking and global cooperation.

In addition to external participation, IRMUN organizes its annual flagship conference, attracting participants from across the country. This provides a platform for intellectual engagement and networking, preparing students for leadership roles in various fields while deepening their understanding of global affairs.


      </div>


    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About Us",
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
background: url("@/assets/backgroundcom.png") no-repeat center center/cover;
  width: 100%;
  height: 100%;
display: flex;
  flex-direction: column;
  align-items: center;
  padding:2rem;
}
.content{
  color: black;
  text-align: center;
 font-family: "Copperplate", sans-serif;
  letter-spacing: 0.2rem;
 margin:4rem;
 margin-top:6rem;
 font-size:1.5rem;
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
