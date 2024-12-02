<template>
    <div class="registration">
      <div class="glass-form">
        <h2>Register</h2>
        <form @submit.prevent="register">
          <div>
            <label for="name">Enter your full name.</label>
            <input type="text" v-model="user.name" required />
          </div>
  
          <div>
            <label for="number">Phone Number:</label>
            <input type="tel" v-model="user.number" required />
          </div>
  
          <div>
            <label for="email">Email ID:</label>
            <input type="email" v-model="user.emailid" required />
          </div>
  
          <div>
            <label for="institution">University/School Name:</label>
            <input type="text" v-model="user.institution" required />
          </div>
  
          <div>
            <label for="education">Education Level:</label>
            <select v-model="user.education">
              <option>UG</option>
              <option>PG</option>
              <option>10-12</option>
              <option>UNDER 10TH</option>
              <option>OTHERS</option>
            </select>
          </div>
  
          <div>
            <label for="committee1">Committee Preference 1:</label>
            <input type="text" v-model="user.committeePref1" required />
          </div>
  
          <div>
            <label for="portfolio1">Portfolio 1/2/3 (Pref 1):</label>
            <input type="text" v-model="user.portfolio1" required />
          </div>
  
          <div>
            <label for="committee2">Committee Preference 2:</label>
            <input type="text" v-model="user.committeePref2" />
          </div>
  
          <div>
            <label for="portfolio2">Portfolio 1/2/3 (Pref 2):</label>
            <input type="text" v-model="user.portfolio2" />
          </div>
  
          <div>
            <label for="experience">Experience:</label>
            <textarea v-model="user.experience"></textarea>
          </div>
  
          <div>
            <label for="caCode">CA Code:</label>
            <input type="text" v-model="user.caCode" />
          </div>
  
          <div>
            <label for="accommodation">Accommodation Needed?</label>
            <select v-model="user.accommodation">
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
  .background {
    background: linear-gradient(135deg, rgba(0, 0, 50, 0.6), rgba(0, 50, 100, 0.8));
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .glass-form {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 15px;
    padding: 20px;
    width: 90%;
    max-width: 600px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    text-align: center;
  }
  
  label {
    display: block;
    margin-top: 15px;
  }
  
  input,
  textarea,
  select {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: none;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.1);
    color: white;
  }
  
  input::placeholder,
  textarea::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  
  button {
    margin-top: 20px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.25);
    color: white;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  button:hover {
    background: rgba(255, 255, 255, 0.4);
  }
  </style>
  