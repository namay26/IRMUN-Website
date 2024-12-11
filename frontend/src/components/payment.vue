<template>
  <div class="welcomePage">
    <div class="landing-page">
      <div class="container">
        <div class="header">PAYMENT</div>

        <div class="content">
          <form @submit.prevent = "handleSubmit">
            <input type="text" id="munId" name="name" placeholder="MUNarchy ID" v-model="munarchy_id"/>
            <button type="submit" class="payBtn2">Check</button>
          </form>
          <h3 class="notFound" v-if="visibilityStatus[0]">ID does not exist</h3>
          <h3 class="completed" v-if="visibilityStatus[1]">Payment has already been completed</h3>
          <h3 class="completed" v-if="visibilityStatus[2]">Complete your payment now !</h3>
          <form v-if="visibilityStatus[2]" @submit.prevent = "initatePayment">
            <div class = "qualColor">
                MUNarchy has provision for participants' residences in the guest houses/ hostel rooms of IIT Roorkee
                inside the campus itself. IITR has multiple comfortable guest houses/guest rooms. The team will make all
                the arrangements. We recommend availing yourself of the accommodation facility to avoid the hassle of
                travelling and living outside the campus.
                The accommodation is limited; the team will allot hostels on a first-come, first-serve basis. Any later
                request a few days before the event to provide accommodation can't be guaranteed and is subject to
                availability.
                <br>
              </div>
            <div>
              <input type="radio" id="yesAccom" class="radioStyles" name="accommodation"
                :value="AccommodationChoices.YES" v-model="user.accommodation" required>
              <label for="yesAccom" class="accomText">Yes, avail in-house accommodation (Rs. 3000.00)</label>
            </div>
            <div>
              <input type="radio" id="noAccom" class="radioStyles" name="accommodation" :value="AccommodationChoices.NO"
                v-model="user.accommodation">
              <label for="noAccom" class="accomText">No, only participation without accommodation (Rs. 1600.00)</label>
            </div>
        <button type="submit" class="payBtn">Pay</button>
        </form>
      </div>
    </div>


  </div>
  <Footer />
  </div>
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
      visibilityStatus
  }
  },
  methods:{
    async handleSubmit(){
      const postDict = {
        munarchy_id : this.munarchy_id
      };
      try{
        const response = await AxiosServices('/api/checkStatus', postDict);
        const pay_status = response["pay_status"]
        console.log(pay_status);

        switch (pay_status){
          case true:
            this.visibilityStatus = [false,true,false]
            break;
          case false:
            this.visibilityStatus = [false, false, true]
            break;
          default:
            return
        }

      }catch(e){
        console.log(`Error Occured while processing your request. ${e}`)
        this.visibilityStatus = [true,false,false]
      }
    },
    async initatePayment(){
      const paymentRecd = {
        "munarchy_id": this.munarchy_id,
        "accomodation_status": this.user.accommodation
      }
      try{
        const response = await AxiosServices('/api/payments', paymentRecd)
        console.log(response)
        window.location.href = response
      }catch(e){
        alert(`Error Occured while processing your request. Please try again later ! \n${e}`)
      }
      console.log(this.user.accommodation)
    }
  }
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

.notFound {
  color: red;
  text-align: center;
}

.completed {
  color: green;
  text-align: center;
}
.accomText{
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
  background: url("@/assets/SnowFallBg.png") no-repeat center center scroll;
  background-size: cover;
  width: 100%;
  height: 130vh;
  /* min-height: 100vh; */
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
.radioStyles {
  margin: 0 0.3rem;
}

#munId {
  width: 80%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  margin: 1rem auto;
  padding: 0.5rem;
  font-family: "Copperplate", sans-serif;
  letter-spacing: 0.2rem;
  font-size: 1.2rem;
  background: #D9D9D9;
  border: none;
}

input:active {
  border: none;
  outline: none;
}

.payBtn,
.payBtn2 {

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
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

}
.qualColor {
  background: #D9D9D9;
  border: none;
  border-radius: 0.3rem;
  padding: 0.5rem;
  margin: 0.6rem auto;
  font-family: "Copperplate", sans-serif;
  letter-spacing: 0.2rem;
  font-size: 1rem;
  color: grey;
  text-align: justify;
}


/* .payBtn {
  display: none;
} */

.payBtn:hover,
.payBtn:hover {

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
  top: 18vw;
  width: 60%;
  max-width: 800px;
  max-height: 200%;
  min-height: 120%;
  /* aspect-ratio: 3 / 2; */
  margin: 2rem auto;
  background: #fff url("@/assets/combg.png") no-repeat center center;
  background-size: cover;
  border-radius: 1.6vw;
  box-shadow: 0 4px 8px rgba(141, 71, 71, 0.2);
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
  margin-bottom: 1rem;
}

@media screen and (max-width: 768px) {
  .container {
    top: 15vh;
    width: 90%;
    border-radius: 10px;
  }

  .payBtn,
  .payBtn2 {
    font-size: 1.2rem;
    height: 3rem;
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

  .payBtn,
  .payBtn2 {
    font-size: 1rem;
    height: 2rem;
    margin: 0.5rem auto;

  }

  #munId {
    font-size: 0.8rem;
  }
}

@media (max-width: 425px) {
  .heading-primary {
    margin-top: 0;
  }
}
</style>
