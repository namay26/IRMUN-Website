<template>
  <div class="welcomePage">
    <div class="landing-page">
      <div class="container">
        <div class="header">REGISTRATION</div>

        <div class="content">
          <form @submit.prevent="handleSubmit">
            <div v-if="!showSecondPart">
              <input type="text" class="formInputs" name="name" placeholder="Name" v-model="user.name" required />
              <input type="text" class="formInputs" name="collegeName" placeholder="School/College/University Name"
                v-model="user.institution" required />
              <input type="tel" class="formInputs" name="contact" placeholder="WhatsApp Number" v-model="user.number"
                pattern="[0-9]{10}" required />
              <input type="tel" class="formInputs" name="altContact" placeholder="Alternate Contact Number"
                v-model="user.alt_contact" pattern="[0-9]{10}" />
              <input type="email" class="formInputs" name="email" placeholder="Email Address" v-model="user.email_id"
                required />

              <label for="gender" class="heading">Gender:</label>
              <div class="qualColor">
                <div>
                  <input type="radio" id="female" class="radioStyles" name="gender" :value="GenderChoices.FEMALE"
                    v-model="user.sex" required>
                  <label for="female">Female</label>
                </div>

                <div>
                  <input type="radio" id="male" class="radioStyles" name="gender" :value="GenderChoices.MALE"
                    v-model="user.sex">
                  <label for="male">Male</label>
                </div>

                <div>
                  <input type="radio" id="other" class="radioStyles" name="gender" :value="GenderChoices.OTHERS"
                    v-model="user.sex">
                  <label for="other">Other</label>
                </div>
              </div>

              <label for="qualification" class="heading">Qualification:</label>
              <div class="qualColor">
                <div>
                  <input type="radio" id="UG" class="radioStyles" name="qualification" :value="QualificationChoices.UG"
                    v-model="user.qualification" required>
                  <label for="UG">UG</label>
                </div>

                <div>
                  <input type="radio" id="PG" class="radioStyles" name="qualification" :value="QualificationChoices.PG"
                    v-model="user.qualification">
                  <label for="PG">PG</label>
                </div>

                <div>
                  <input type="radio" id="tenth" class="radioStyles" name="qualification"
                    :value="QualificationChoices.SR_SEC" v-model="user.qualification">
                  <label for="tenth">11th-12th</label>
                </div>

                <div>
                  <input type="radio" id="underTenth" class="radioStyles" name="qualification"
                    :value="QualificationChoices.HIGH_SCHOOL" v-model="user.qualification">
                  <label for="underTenth">Under 10th</label>
                </div>

                <div>
                  <input type="radio" id="otherQual" class="radioStyles" name="qualification"
                    :value="QualificationChoices.OTHERS" v-model="user.qualification">
                  <label for="otherQual">Other</label>
                </div>
              </div>

              <input type="number" min="0" class="formInputs" name="experience"
                placeholder="Experience (Number of MUNs participated before)" v-model="user.experience" />

              <button type="button" class="nextBtn" @click="showSecondPart = true">
                Next
              </button>

            </div>











            <div v-if="showSecondPart">
              <button type="button" class="backBtn" @click="showSecondPart = false">↩</button>

              <label for="CPref1" class="heading">Committee Preference 1:</label>
              <div class="qualColor">
                <div v-if="user.qualification !== QualificationChoices.HIGH_SCHOOL">
                  <input type="radio" id="UNGA1" class="radioStyles" name="CPref1" :value="CommitteeChoices.DISEC"
                    v-model="user.committee_pref[0]" required>
                  <label for="UNGA1">{{ CommitteeChoices.DISEC }}</label>
                </div>

                <div v-if="user.qualification !== QualificationChoices.HIGH_SCHOOL">
                  <input type="radio" id="UNHRC1" class="radioStyles" name="CPref1" :value="CommitteeChoices.UNHRC"
                    v-model="user.committee_pref[0]">
                  <label for="UNHRC1">{{ CommitteeChoices.UNHRC }}</label>
                </div>

                <div v-if="user.qualification !== QualificationChoices.HIGH_SCHOOL">
                  <input type="radio" id="UNSC1" class="radioStyles" name="CPref1" :value="CommitteeChoices.UNSC"
                    v-model="user.committee_pref[0]">
                  <label for="UNSC1">{{ CommitteeChoices.UNSC }}</label>
                </div>

                <div v-if="user.qualification !== QualificationChoices.HIGH_SCHOOL">
                  <input type="radio" id="AIPPM1" class="radioStyles" name="CPref1" :value="CommitteeChoices.AIPPM"
                    v-model="user.committee_pref[0]">
                  <label for="AIPPM1">{{ CommitteeChoices.AIPPM }}</label>
                </div>

                <div v-if="user.qualification !== QualificationChoices.HIGH_SCHOOL">
                  <input type="radio" id="AISM1" class="radioStyles" name="CPref1" :value="CommitteeChoices.AISM"
                    v-model="user.committee_pref[0]">
                  <label for="AISM1">{{ CommitteeChoices.AISM }}</label>
                </div>

                <div v-if="user.qualification !== QualificationChoices.HIGH_SCHOOL">
                  <input type="radio" id="IP1" class="radioStyles" name="CPref1" :value="CommitteeChoices.IP"
                    v-model="user.committee_pref[0]">
                  <label for="IP1">{{ CommitteeChoices.IP }}</label>
                </div>
                <div v-if="user.qualification === QualificationChoices.HIGH_SCHOOL">
                  <input type="radio" id="SOCHUM1" class="radioStyles" name="CPref1" :value="CommitteeChoices.SOCHUM"
                    v-model="user.committee_pref[0]">
                  <label for="SOCHUM1">{{ CommitteeChoices.SOCHUM }}</label>
                </div>
              </div>

              <label class="heading">Portfolio Preference 1 (for committee 1)</label>
              <div>
                <select v-model="user.portfolio_pref[0][0]" name="portPref1.1" required class="formInputs">
                  <option value="" disabled>Select your portfolio preference for committee 1</option>
                  <option v-if="[
                    CommitteeChoices.DISEC,
                    CommitteeChoices.SOCHUM,
                    CommitteeChoices.UNHRC,
                    CommitteeChoices.UNSC
                  ].includes(user.committee_pref[0])" v-for="option in PortfolioPreferencesCountries" :value="option"
                    :key="option">
                    {{ option }}
                  </option>
                  <option v-if="[
                    CommitteeChoices.AIPPM,
                    CommitteeChoices.AISM,
                  ].includes(user.committee_pref[0])" v-for="option in PortfolioPreferencesAippm" :value="option"
                    :key="option">
                    {{ option }}
                  </option>
                </select>
              </div>

              <label class="heading">Portfolio Preference 2 (for committee 1)</label>
              <div>
                <select v-model="user.portfolio_pref[0][1]" name="portPref1.2" required class="formInputs">
                  <option value="" disabled>Select your portfolio preference for committee 1</option>
                  <option v-if="[
                    CommitteeChoices.DISEC,
                    CommitteeChoices.SOCHUM,
                    CommitteeChoices.UNHRC,
                    CommitteeChoices.UNSC
                  ].includes(user.committee_pref[0])" v-for="option in PortfolioPreferencesCountries" :value="option"
                    :key="option">
                    {{ option }}
                  </option>
                  <option v-if="[
                    CommitteeChoices.AIPPM,
                    CommitteeChoices.AISM,
                  ].includes(user.committee_pref[0])" v-for="option in PortfolioPreferencesAippm" :value="option"
                    :key="option">
                    {{ option }}
                  </option>
                </select>
              </div>

              <label class="heading">Portfolio Preference 3 (for committee 1)</label>
              <div>
                <select v-model="user.portfolio_pref[0][2]" name="portPref1.3" required class="formInputs">
                  <option value="" disabled>Select your portfolio preference for committee 1</option>
                  <option v-if="[
                    CommitteeChoices.DISEC,
                    CommitteeChoices.SOCHUM,
                    CommitteeChoices.UNHRC,
                    CommitteeChoices.UNSC
                  ].includes(user.committee_pref[0])" v-for="option in PortfolioPreferencesCountries" :value="option"
                    :key="option">
                    {{ option }}
                  </option>
                  <option v-if="[
                    CommitteeChoices.AIPPM,
                    CommitteeChoices.AISM,
                  ].includes(user.committee_pref[0])" v-for="option in PortfolioPreferencesAippm" :value="option"
                    :key="option">
                    {{ option }}
                  </option>
                </select>
              </div>

              <label for="CPref2" class="heading"
                v-if="user.qualification !== QualificationChoices.HIGH_SCHOOL">Committee
                Preference 2:</label>
              <div class="qualColor" v-if="user.qualification !== QualificationChoices.HIGH_SCHOOL">
                <div>
                  <input type="radio" id="UNGA2" class="radioStyles" name="CPref2" :value="CommitteeChoices.DISEC"
                    v-model="user.committee_pref[1]" required>
                  <label for="UNGA2">{{ CommitteeChoices.DISEC }}</label>
                </div>

                <div>
                  <input type="radio" id="UNHRC2" class="radioStyles" name="CPref2" :value="CommitteeChoices.UNHRC"
                    v-model="user.committee_pref[1]">
                  <label for="UNHRC2">{{ CommitteeChoices.UNHRC }}</label>
                </div>

                <div>
                  <input type="radio" id="UNSC2" class="radioStyles" name="CPref2" :value="CommitteeChoices.UNSC"
                    v-model="user.committee_pref[1]">
                  <label for="UNSC2">{{ CommitteeChoices.UNSC }}</label>
                </div>

                <div>
                  <input type="radio" id="AIPPM2" class="radioStyles" name="CPref2" :value="CommitteeChoices.AIPPM"
                    v-model="user.committee_pref[1]">
                  <label for="AIPPM2">{{ CommitteeChoices.AIPPM }}</label>
                </div>

                <div>
                  <input type="radio" id="AISM2" class="radioStyles" name="CPref2" :value="CommitteeChoices.AISM"
                    v-model="user.committee_pref[1]">
                  <label for="AISM2">{{ CommitteeChoices.AISM }}</label>
                </div>
              </div>

              <label class="heading" v-if="user.qualification !== QualificationChoices.HIGH_SCHOOL">Portfolio Preference
                1 (for committee 2)</label>
              <div v-if="user.qualification !== QualificationChoices.HIGH_SCHOOL">
                <select v-model="user.portfolio_pref[1][0]" name="portPref2.1" required class="formInputs">
                  <option value="" disabled>Select your portfolio preference for committee 2</option>
                  <option v-if="[
                    CommitteeChoices.DISEC,
                    CommitteeChoices.SOCHUM,
                    CommitteeChoices.UNHRC,
                    CommitteeChoices.UNSC
                  ].includes(user.committee_pref[1])" v-for="option in PortfolioPreferencesCountries" :value="option"
                    :key="option">
                    {{ option }}
                  </option>
                  <option v-if="[
                    CommitteeChoices.AIPPM,
                    CommitteeChoices.AISM,
                  ].includes(user.committee_pref[1])" v-for="option in PortfolioPreferencesAippm" :value="option"
                    :key="option">
                    {{ option }}
                  </option>
                </select>
              </div>

              <label class="heading" v-if="user.qualification !== QualificationChoices.HIGH_SCHOOL">Portfolio Preference
                2 (for committee 2)</label>
              <div v-if="user.qualification !== QualificationChoices.HIGH_SCHOOL">
                <select v-model="user.portfolio_pref[1][1]" name="portPref2.2" required class="formInputs">
                  <option value="" disabled>Select your portfolio preference for committee 2</option>
                  <option v-if="[
                    CommitteeChoices.DISEC,
                    CommitteeChoices.SOCHUM,
                    CommitteeChoices.UNHRC,
                    CommitteeChoices.UNSC
                  ].includes(user.committee_pref[1])" v-for="option in PortfolioPreferencesCountries" :value="option"
                    :key="option">
                    {{ option }}
                  </option>
                  <option v-if="[
                    CommitteeChoices.AIPPM,
                    CommitteeChoices.AISM,
                  ].includes(user.committee_pref[1])" v-for="option in PortfolioPreferencesAippm" :value="option"
                    :key="option">
                    {{ option }}
                  </option>
                </select>
              </div>

              <label class="heading" v-if="user.qualification !== QualificationChoices.HIGH_SCHOOL">Portfolio Preference
                3 (for committee 2)</label>
              <div v-if="user.qualification !== QualificationChoices.HIGH_SCHOOL">
                <select v-model="user.portfolio_pref[1][2]" name="portPref2.3" required class="formInputs">
                  <option value="" disabled>Select your portfolio preference for committee 2</option>
                  <option v-if="[
                    CommitteeChoices.DISEC,
                    CommitteeChoices.SOCHUM,
                    CommitteeChoices.UNHRC,
                    CommitteeChoices.UNSC
                  ].includes(user.committee_pref[1])" v-for="option in PortfolioPreferencesCountries" :value="option"
                    :key="option">
                    {{ option }}
                  </option>
                  <option v-if="[
                    CommitteeChoices.AIPPM,
                    CommitteeChoices.AISM,
                  ].includes(user.committee_pref[1])" v-for="option in PortfolioPreferencesAippm" :value="option"
                    :key="option">
                    {{ option }}
                  </option>
                </select>
              </div>

              <label for="CPref3" class="heading"
                v-if="user.qualification !== QualificationChoices.HIGH_SCHOOL">Committee
                Preference 3:</label>
              <div class="qualColor" v-if="user.qualification !== QualificationChoices.HIGH_SCHOOL">
                <div>
                  <input type="radio" id="UNGA2" class="radioStyles" name="CPref3" :value="CommitteeChoices.DISEC"
                    v-model="user.committee_pref[2]" required>
                  <label for="UNGA3">{{ CommitteeChoices.DISEC }}</label>
                </div>

                <div>
                  <input type="radio" id="UNHRC3" class="radioStyles" name="CPref3" :value="CommitteeChoices.UNHRC"
                    v-model="user.committee_pref[2]">
                  <label for="UNHRC3">{{ CommitteeChoices.UNHRC }}</label>
                </div>

                <div>
                  <input type="radio" id="UNSC3" class="radioStyles" name="CPref3" :value="CommitteeChoices.UNSC"
                    v-model="user.committee_pref[2]">
                  <label for="UNSC3">{{ CommitteeChoices.UNSC }}</label>
                </div>

                <div>
                  <input type="radio" id="AIPPM3" class="radioStyles" name="CPref3" :value="CommitteeChoices.AIPPM"
                    v-model="user.committee_pref[2]">
                  <label for="AIPPM3">{{ CommitteeChoices.AIPPM }}</label>
                </div>

                <div>
                  <input type="radio" id="AISM3" class="radioStyles" name="CPref3" :value="CommitteeChoices.AISM"
                    v-model="user.committee_pref[2]">
                  <label for="AISM3">{{ CommitteeChoices.AISM }}</label>
                </div>
              </div>

              <label class="heading" v-if="user.qualification !== QualificationChoices.HIGH_SCHOOL">Portfolio Preference
                1 (for committee 3)</label>
              <div v-if="user.qualification !== QualificationChoices.HIGH_SCHOOL">
                <select v-model="user.portfolio_pref[2][0]" name="portPref3.1" required class="formInputs">
                  <option value="" disabled>Select your portfolio preference for committee 3</option>
                  <option v-if="[
                    CommitteeChoices.DISEC,
                    CommitteeChoices.SOCHUM,
                    CommitteeChoices.UNHRC,
                    CommitteeChoices.UNSC
                  ].includes(user.committee_pref[2])" v-for="option in PortfolioPreferencesCountries" :value="option"
                    :key="option">
                    {{ option }}
                  </option>
                  <option v-if="[
                    CommitteeChoices.AIPPM,
                    CommitteeChoices.AISM,
                  ].includes(user.committee_pref[2])" v-for="option in PortfolioPreferencesAippm" :value="option"
                    :key="option">
                    {{ option }}
                  </option>
                </select>
              </div>

              <label class="heading" v-if="user.qualification !== QualificationChoices.HIGH_SCHOOL">Portfolio Preference
                2 (for committee 3)</label>
              <div v-if="user.qualification !== QualificationChoices.HIGH_SCHOOL">
                <select v-model="user.portfolio_pref[2][1]" name="portPref3.2" required class="formInputs">
                  <option value="" disabled>Select your portfolio preference for committee 3</option>
                  <option v-if="[
                    CommitteeChoices.DISEC,
                    CommitteeChoices.SOCHUM,
                    CommitteeChoices.UNHRC,
                    CommitteeChoices.UNSC
                  ].includes(user.committee_pref[2])" v-for="option in PortfolioPreferencesCountries" :value="option"
                    :key="option">
                    {{ option }}
                  </option>
                  <option v-if="[
                    CommitteeChoices.AIPPM,
                    CommitteeChoices.AISM,
                  ].includes(user.committee_pref[2])" v-for="option in PortfolioPreferencesAippm" :value="option"
                    :key="option">
                    {{ option }}
                  </option>
                </select>
              </div>

              <label class="heading" v-if="user.qualification !== QualificationChoices.HIGH_SCHOOL">Portfolio Preference
                3 (for committee 3)</label>
              <div v-if="user.qualification !== QualificationChoices.HIGH_SCHOOL">
                <select v-model="user.portfolio_pref[2][2]" name="portPref3.3" required class="formInputs">
                  <option value="" disabled>Select your portfolio preference for committee 3</option>
                  <option v-if="[
                    CommitteeChoices.DISEC,
                    CommitteeChoices.SOCHUM,
                    CommitteeChoices.UNHRC,
                    CommitteeChoices.UNSC
                  ].includes(user.committee_pref[2])" v-for="option in PortfolioPreferencesCountries" :value="option"
                    :key="option">
                    {{ option }}
                  </option>
                  <option v-if="[
                    CommitteeChoices.AIPPM,
                    CommitteeChoices.AISM,
                  ].includes(user.committee_pref[2])" v-for="option in PortfolioPreferencesAippm" :value="option"
                    :key="option">
                    {{ option }}
                  </option>
                </select>
              </div>


              <button type="submit" class="payBtn">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import {
  AccommodationChoices,
  GenderChoices,
  QualificationChoices,
  CommitteeChoices,
  RegistrationModel
} from "@/models/registrationModel";
import Footer from "./Footer.vue";
import { PortfolioPreferencesCountries } from "@/constants/portfolioPreferenceCountries";
import { AxiosServices } from "@/services/api_services/api_services";
import { PortfolioPreferencesAippm } from "@/constants/portfolioPreferenceAippm";
import router from "@/router/index"

export default {
  name: "RegistrationForm",
  components: {
    Footer,
  },
  data() {
    return {
      GenderChoices,
      QualificationChoices,
      AccommodationChoices,
      PortfolioPreferencesCountries,
      PortfolioPreferencesAippm,
      CommitteeChoices,
      user: RegistrationModel,
      router,
      showSecondPart: false,
    }

  },
  methods: {
    async handleSubmit() {
      try {
        if (this.validateForm()) {
          console.log('Submitting user data:', this.user);
          sessionStorage.setItem("name",this.user.name);
          const response = await AxiosServices("/api/register", this.user);
          console.log(response);
          alert(response["message"]);
          localStorage.setItem("registration",true);
          this.router.push('/reg-confirm');
        }
      } catch (error) {
        console.error('Registration failed:', error);
        alert('Registration failed. Please try again.');
      }
    },
    validateForm() {
      const requiredFields = [
        'name', 'institution', 'number', 'email_id',
        'sex', 'qualification', 'committee_pref',
        'portfolio_pref'
      ];

      for (let field of requiredFields) {
        if (field === 'committee_pref') {
          // Check both committee preferences
          if (!this.user[field][0] || !this.user[field][1] || !this.user[field[2]]) {
            alert(`Please fill in both ${field} fields`);
            return false;
          }
        }
        else if (field === 'portfolio_pref') {
          if (!this.user[field][0, 0] || !this.user[field][0, 1] || !this.user[field[0, 2]] || !this.user[field][1, 0] || !this.user[field][1, 1] || !this.user[field[1, 2]] || !this.user[field][2, 0] || !this.user[field][2, 1] || !this.user[field[2, 2]]) {
            alert(`Please fill in both ${field} fields`);
            return false;
          }
          else if (!this.user[field]) {
            alert(`Please fill in the ${field} field`);
            return false;
          }
        }

        if (!/^\d{10}$/.test(this.user.number)) {
          alert('Please enter a valid 10-digit phone number');
          return false;
        }

        if (!/\S+@\S+\.\S+/.test(this.user.email_id)) {
          alert('Please enter a valid email address');
          return false;
        }

        return true;
      }
    }
  }
}
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

.welcomePage {
  display: flex;
  flex-direction: column;
  background: url("@/assets/SnowFallBg.png") no-repeat center center scroll;
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
  width: 80%;
  justify-content: center;
}

.backBtn {
  width: 60px;
  height: 60px;
  background-color: #1E262F;
  border-radius: 50%;
  color: white;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.backBtn i {
  font-size: 1.5rem;
}

.backBtn:hover {
  background-color: #2B3A48;
}

.backBtn:hover i {
  transform: translateX(-5px);
  transition: transform 0.3s ease;
}

.formInputs {
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.3rem;
  margin: 0.6rem auto;
  padding: 0.5rem;
  font-family: "Copperplate", sans-serif;
  letter-spacing: 0.2rem;
  font-size: 1rem;
  background: #D9D9D9;
  border: none;
  border-radius: 0.3rem;
}

label {
  font-family: "Copperplate", sans-serif;
  letter-spacing: 0.2rem;
  font-size: 1rem;
  color: grey;
  opacity: 1;

}

.radioField {
  width: 60%;
  display: flex;
  justify-content: space-between;
}

.qualificationField {
  display: flex;
  justify-content: space-between;
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

.radioStyles {
  margin: 0 0.3rem;
}

.genderOption {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2.3rem;
  margin: 0.6rem auto;
  padding: 0.5rem;
  font-family: "Copperplate", sans-serif;
  letter-spacing: 0.2rem;
  font-size: 1rem;
  background: #D9D9D9;
  border: none;
  border-radius: 0.3rem;
}

input:active {
  border: none;
  outline: none;
}

.payBtn {
  font-family: "Copperplate", sans-serif;
  letter-spacing: 0.2rem;
  color: white;
  width: 60%;
  background: #1E262F;
  font-size: 1.5rem;
  border-radius: 0.8rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  margin: 2rem auto;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nextBtn {
  content: "→";
  font-family: "Copperplate", sans-serif;
  letter-spacing: 0.2rem;
  color: white;
  width: 20%;
  background: #1E262F;
  font-size: 1.5rem;
  border-radius: 0.8rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  margin: 2rem auto;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nextBtn i {
  margin-left: 10px;
  font-size: 1.5rem;
}

.nextBtn:hover {
  background: #2B3A48;
}

.nextBtn:hover i {
  transform: translateX(5px);
  transition: transform 0.3s ease;
}

.nextBtn:hover {

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
  top: 15rem;
  width: 80%;
  max-width: 80%;
  flex: 1;
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
  z-index: 1;
}

.header {
  font-family: "Copperplate", sans-serif;
  letter-spacing: 0.2rem;
  color: white;
  position: absolute;
  top: -4rem;
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

.heading {
  font-size: 1.1rem;
  font-weight: bold;
}

@media screen and (max-width: 768px) {
  .container {
    top: 11rem;
    max-width: 90%;
    border-radius: 10px;
  }

  .content {
    width: 95%;
  }

  .payBtn {
    font-size: 1.2rem;
    height: 3rem;
  }

  .formInputs,
  label,
  .qualColor {
    font-size: 0.8rem;
    letter-spacing: 0.1rem;
  }
}

@media screen and (max-width: 480px) {
  .container {
    top: 8rem;
    width: 90%;
    margin: 3rem auto;
    padding: 0.5rem;
  }

  .payBtn {
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
