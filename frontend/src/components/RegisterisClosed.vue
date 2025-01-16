<template>
  <div class="welcomePage">
    <div class="landing-page">
      <div class="container">
        <div class="header">Registrations</div>

        <div class="content">
          Registrations are closed! Thank you for showing interest in Munarchy 2025. <br />Stay tuned for more updates!
        </div>
      </div>


    </div>
  </div>
  <Footer />
</template>

<script>
import { AxiosServices } from "@/services/api_services/api_services";
export default {
  name: "AllotmentCheck",
  data() {
    return {
      munarchy_id: "",
      isMunarchyIdValid: false,
      isPaymentDone: false,
    }
  },
  methods: {
    async handleSubmit() {
      const postDict = {
        MUNARCHY_ID: this.munarchy_id
      };
      try {
        const response = await AxiosServices('/api/fetchAllotmentStatus', postDict);
        localStorage.setItem('allotmentData', JSON.stringify(response));
        this.$router.push({
          name: 'AllotmentDone',
        });
      } catch (error) {
        if(error.response.data.message === "The user with the given MUNARCHY_ID does not exist"){
          this.isPaymentDone = false;
          this.isMunarchyIdValid = true;
        }else if(error.response.data.message === "The user with the given MUNARCHY_ID has not paid the registration fee"){
          this.isPaymentDone = true;
          this.isMunarchyIdValid = false;
        }else{
          this.$router.push({path: '/allotmentnot'});
        }
      }
    }
  }
};
</script>
<style scoped>
@font-face {
  font-family: "Roboto";
  src: url("@/assets/fonts/Roboto.ttf") format("truetype");
}

@font-face {
  font-family: "Frozito";
  src: url("@/assets/fonts/Frozito.ttf") format("truetype");
}
.error-msg{
  color: red;
  font-size: 0.8vw;
}
a {
  all: unset;
  cursor: pointer;
}

.notFound {
  color: red;
  text-align: center;
}

.completed {
  color: green;
  text-align: center;
  font-size: 1.2vw;
}

.accomText {
  color: #1E262F
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.welcomePage {
  display: flex;
  flex-direction: column;
  background-size: cover;
  width: 100%;
  height: 100vh;
  /* overflow: hidden; */
  margin: 0;
}

.content {
  color:black;

  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 80%;
  justify-content: center;
  text-align: center;
  font-size: 1.2vw;

}

.radioStyles {
  margin: 0 0.3rem;
}

#munId {
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.6vh;
  margin: 1rem auto;
  padding: 0.5rem;
  font-family: "Roboto", sans-serif;
  font-size: 0.8vw;
  background: #D9D9D9;
  border: none;
}

input:active {
  border: none;
  outline: none;
}

.choice{
  font-size: 0.8vw;
}

.payBtn,
.payBtn2 {

  font-family: "Roboto", sans-serif;
  letter-spacing: 0.2rem;
  color: white;
  width: 60%;
  background: #1E262F;
  font-size: 1vw;
  border-radius: 0.8rem;
  text-align: center;

  justify-content: center;
  align-items: center;
  height: 4vh;
  margin: 1rem auto;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

}

.qualColor {
  background: #D9D9D9;
  border: none;
  border-radius: 0.3rem;
  padding: 1vw 2vw;
  margin: 0.6rem auto;
  font-family: "Roboto", sans-serif;
  font-size: 1vw;
  color: black;
  text-align: justify;
}

.payBtn:hover,
.payBtn:hover {

  transform: scale(1.1);
}

.landing-page {
  flex: 1;
  display: flex;

  align-items: center;
  flex-direction: column;
}

.container {
  position: relative;
  top: 18vw;
  width: 40vw;
  height: 30vh;
  background: #fff url("@/assets/combg.png") no-repeat center center;
  background-size: cover;
  border-radius: 1.6vw;
  box-shadow: 0 4px 8px rgba(141, 71, 71, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2vw;
}

.suc-container{
  position: relative;
  top: 18vw;
  width: 40vw;
  height: auto;
  background: #fff url("@/assets/combg.png") no-repeat center center;
  background-size: cover;
  border-radius: 1.6vw;
  box-shadow: 0 4px 8px rgba(141, 71, 71, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2vw;
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

.termsCheckbox {
  display: flex;
  align-items: center;
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #1e262f;
}

.termsCheckbox label {
  margin-left: 0.5rem;
}

.termsCheckbox a {
  color: #007bff;
  text-decoration: none;
}

.termsCheckbox a:hover {
  text-decoration: underline;
}

@media (max-width: 1024px) {

  .payBtn2{
    font-size: 1.2vw;
    height: 4vh;
  }
  .suc-container{
    height: auto;
    padding-top: 5vh;
  }
  .container{
    height: 40vh;
  }
  #munId{
    font-size:2vw;
  }

}

@media (max-width: 768px) {
  .payBtn2{
    font-size: 1.8vw;
    width: 70%;
  }
  .container{
    margin-top: 20vh;
    width: 70vw;
  }
  .suc-container{
    margin-top: 20vh;
    width: 70vw;
  }
  .qualColor{
    font-size: 1.5vw;
  }
  .choice{
    font-size: 1.5vw;
  }
  #munid{
    width: 90%;
  }
  .payBtn{
    font-size: 1.8vw;
  }
}


@media (max-width: 485px) {
  .welcomePage{
    height: 100%;
  }
  .header{
    height: 7vh;
  }
  .payBtn2, .payBtn{
    font-size: 3vw;
    width: 70%;
  }
  .container{
    margin-top: 10vh;
    height: 40vh;
    width: 70vw;
  }
  .qualColor{
    font-size: 2vw;
  }
  .suc-container{
    margin-top: 12vh;
  }
  .completed{
    font-size: 2.5vw;
  }
  .choice{
    font-size: 2vw;
  }
  #munid{
    width: 90%;
  }
}

@media (max-width: 650px) {
  .content{
    font-size: 1.8vw;
  }
}


</style>
