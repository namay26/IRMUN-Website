<template>
  <div class="welcomePage">
    <div class="landing-page">
      <div :class="containerStyleClass">
        <div class="header">PAYMENT</div>

        <div class="content">
          <form @submit.prevent="handleSubmit">
            <input type="text" id="munId" name="name" placeholder="MUNarchy ID" v-model="munarchy_id" />
            <button type="submit" class="payBtn2">Check</button>
          </form>
          <h3 class="notFound" v-if="visibilityStatus[0]">ID does not exist</h3>
          <h3 class="completed" v-if="visibilityStatus[1]">Payment has already been completed</h3>
          <h3 class="completed" v-if="visibilityStatus[2]">Complete your payment now !</h3>
          <form v-if="visibilityStatus[2]" @submit.prevent="initatePayment">
            <div class="qualColor">
              MUNarchy has provision for participants' residences in the guest houses/ hostel rooms of IIT Roorkee
              inside the campus itself. IITR has multiple comfortable guest houses/guest rooms. The team will make all
              the arrangements. We recommend availing yourself of the accommodation facility to avoid the hassle of
              travelling and living outside the campus.
              The accommodation is limited; the team will allot hostels on a first-come, first-serve basis. Any later
              request a few days before the event to provide accommodation can't be guaranteed and is subject to
              availability. <br />
              <span class="read">Female participants can opt for the accommodation plan only, as per IITR administration guidelines.</span>
              <br>
            </div>
            <div class="choice">
              <input type="radio" id="yesAccom" class="radioStyles" name="accommodation"
                :value="AccommodationChoices.YES" v-model="user.accommodation" required>
              <label for="yesAccom" class="accomText">Yes, avail in-house accommodation (Rs. 3000.00)</label>
            </div>
            <div class="choice">
              <input type="radio" id="noAccom" class="radioStyles" name="accommodation" :value="AccommodationChoices.NO"
                v-model="user.accommodation" v-if="user.sex=='male'">
              <label for="noAccom" class="accomText" v-if="user.sex=='male'">No, only participation without accommodation (Rs. 1600.00)</label>
            </div>
            <div class="termsCheckbox">
              <input type="checkbox" id="terms" v-model="termsAccepted" required>
              <label for="terms">
                I agree to the
                <a href="/termsandconditions" target="_blank">Terms and Conditions</a>.
              </label>
            </div>

            <button type="submit" class="payBtn" :disabled="!termsAccepted">Pay</button>

          </form>
        </div>
      </div>


    </div>
  </div>
  <Footer />
</template>

<script>

import { AccommodationChoices, RegistrationModel } from "@/models/registrationModel";
import Footer from "./Footer.vue";
import { AxiosServices } from "@/services/api_services/api_services";

export default {
  name: "Welcome",
  components: {
    Footer,
  },
  data() {
    let munarchy_id = "";
    let visibilityStatus = [false, false, false]
    return {
      AccommodationChoices,
      user: RegistrationModel,
      munarchy_id,
      visibilityStatus,
    termsAccepted: false,
    containerStyleClass: "container"

    }
  },
  methods: {
    async handleSubmit() {
      const postDict = {
        munarchy_id: this.munarchy_id
      };
      try {
        this.containerStyleClass = "suc-container";
        const response = await AxiosServices('/api/checkStatus', postDict);
        const pay_status = response["pay_status"]
        console.log(pay_status);
        switch (pay_status) {
          case true:
            this.visibilityStatus = [false, true, false]
            break;
          case false:
            this.visibilityStatus = [false, false, true]
            break;
          default:
            return
        }

      } catch (e) {
        console.log(`Error Occured while processing your request. ${e}`)
        this.visibilityStatus = [true, false, false]
      }
    },
    async initatePayment() {
      const paymentRecd = {
        "munarchy_id": this.munarchy_id,
        "accomodation_status": this.user.accommodation
      }
      try {
        const response = await AxiosServices('/api/payments', paymentRecd)
        console.log(response)
        localStorage.setItem("initiatePayment",true);
        window.location.href = response
      } catch (e) {
        alert(`Error Occured while processing your request. Please try again later ! \n${e}`)
      }
      console.log(this.user.accommodation)
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
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 60%;
  justify-content: center;

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
  margin: 2vw auto;
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
  border-radius: 0.8vw;
  text-align: center;
  display: flex;
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
.read{
  font-weight: 500;
}
.header {
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.2rem;
  color: white;
  position: absolute;
  top: -3%;
  width: 60%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1E262F;
  font-size: 3vw;
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
    margin-bottom: 20vh;
  }
  .qualColor{
    font-size: 1.5vw;
  }
  .choice{
    font-size: 1.5vw;
  }
  #munId{
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
  #munId{
    width: 90%;
  }
}

@media (max-width: 1600px) {
  #munId{
    margin-top: 3vw;
  }
}

@media (max-width: 1270px) {
  #munId{
    margin-top: 5vw;
  }
}

</style>
