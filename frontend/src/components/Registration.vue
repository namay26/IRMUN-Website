<template>
  <div class="land-reg">
    <div class="glass-form">
      <h2>Register Yourself Now!</h2>
      <form @submit.prevent="register">
        <div class="section 1">
          <div>
            <label for="name">Enter your full name. *</label>
            <input type="text" v-model="user.name" required />
          </div>
          <div><label for="number">Phone Number: *</label>
            <input type="tel" v-model="user.number" required />
          </div>
        </div>

        <div class="section 2">
          <div>
            <label for="email">Email ID: *</label>
            <input type="email" v-model="user.emailid" required />
          </div>
          <div>
            <label for="institution">University/School Name: *</label>
            <input type="text" v-model="user.institution" required />
          </div>
        </div>

        <div class="section edu">
          <div>
            <label for="education">Education Level: *</label>
            <select v-model="user.education" required>
              <option>UG</option>
              <option>PG</option>
              <option>10-12</option>
              <option>UNDER 10TH</option>
              <option>OTHERS</option>
            </select>
          </div>
        </div>
        <hr>

        <div class="section com1">
          <div class="choice">
            <label for="committee1">Committee Preference 1: *</label>
            <input type="text" v-model="user.committeePref1" required />
          </div>

          <div class="port1">
            <label for="portfolio11">Portfolio 1(Pref 1): *</label>
            <input type="text" v-model="user.portfolio11" required />

            <label for="portfolio12">Portfolio 2(Pref 1): *</label>
            <input type="text" v-model="user.portfolio12" required />

            <label for="portfolio13">Portfolio 3(Pref 1): *</label>
            <input type="text" v-model="user.portfolio13" required />
          </div>
        </div>

        <hr>


        <div class="section com2">
          <div class="choice">
            <label for="committee2">Committee Preference 2: *</label>
            <input type="text" v-model="user.committeePref2" required />
          </div>

          <div class="port2">
            <label for="portfolio21">Portfolio 1(Pref 2): *</label>
            <input type="text" v-model="user.portfolio21" required />

            <label for="portfolio22">Portfolio 2(Pref 2): *</label>
            <input type="text" v-model="user.portfolio22" required />

            <label for="portfolio23">Portfolio 3(Pref 2): *</label>
            <input type="text" v-model="user.portfolio23" required />
          </div>
        </div>

        <div>
          <label for="experience">Experience: *</label>
          <textarea v-model="user.experience"></textarea>
        </div>

        <div>
          <label for="caCode">CA Code:</label>
          <input type="text" v-model="user.caCode" />
        </div>

        <div>
          <label for="accommodation">Accommodation Needed? *</label>
          <select v-model="user.accommodation" required>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <button type="submit">Register</button>
      </form>
      <p v-if="message">{{ message }}</p>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from 'axios';
import Footer from './Footer.vue';

export default {
  name: "Registration",
  components: {
    Footer
  },
  data() {
    return {
      user: {
        name: '',
        number: '',
        emailid: '',
        institution: '',
        education: '',
        committeePref1: '',
        portfolio1: '',
        committeePref2: '',
        portfolio2: '',
        experience: '',
        caCode: '',
        accommodation: 'no',
      },
      message: '',
    };
  },
  methods: {
    async register() {
      try {
        const response = await axios.post('http://localhost:5000/register', this.user);
        this.message = response.data.message;
      } catch (error) {
        this.message = 'Registration failed. Please try again.';
      }
    },
  },
};
</script>

<style scoped>
.land-reg {
  background: url("@/assets/SnowFallBg.png") no-repeat center center scroll;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
}

.edu {
  margin-bottom: 2rem;
}

.section {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 2rem;
}

.section div {
  width: 50%;
  margin: 0 2rem;
}

option {
  color: black;
}

.choice {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center
}

.glass-form {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  padding: 2rem;
  color: #fff;
  width: 80%;
  margin: 0 auto;
  margin-top: 20vh;
  font-family: "Poppins", sans-serif;
}

.glass-form h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.85);
  text-align: center;
}

label {
  font-size: 0.95rem;
  font-weight: 500;
  margin-top: 1.5rem;
  display: block;
  color: rgba(255, 255, 255, 0.8);
}

input,
textarea,
select {
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
}

input::placeholder,
textarea::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

textarea {
  resize: none;
  height: 120px;
}

button {
  width: 100%;
  margin-top: 1.5rem;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
}

button:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
}

button:active {
  transform: translateY(0);
}

p {
  margin-top: 1rem;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  font-size: 0.9rem;
}

@media screen and (max-width: 768px) {
  .glass-form {
    padding: 1.5rem;
  }

  .glass-form h2 {
    font-size: 1.8rem;
  }

  input,
  textarea,
  select {
    font-size: 0.85rem;
    padding: 0.65rem 0.9rem;
  }

  button {
    font-size: 0.95rem;
    padding: 0.7rem 1.2rem;
  }
}
</style>
