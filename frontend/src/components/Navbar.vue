<template>
  <nav class="navbar">
    <img src="@/assets/Nav Bar.png" alt="Navbar Background" class="navbar-bg" />
    <router-link to="/"><img src="@/assets/logo.png" alt="Logo" class="logo" /></router-link>

    <div class="hamburger" @click="toggleMenu">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>

    <div class="nav-links" :class="{'active': menuOpen}">
      <router-link to="/ca-portal">CA Portal</router-link>
      <router-link to="/eb-portal">EB Portal</router-link>
      <router-link to="/committees">Committees</router-link>
      <router-link to="/team">Team</router-link>
      <router-link to="/merch">Merch</router-link>
      <router-link to="/register" style="background-color: aquamarine">Register</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      menuOpen: false, 
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen; 
    }
  }
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: white;
  z-index: 1000;
  background-color: rgb(0, 0, 0, 0);
  padding: 0 20px;
}

.navbar-bg {
  position: absolute;
  top: -5em;
  left: 0;
  width: 100%;
  height: auto;
  object-fit: cover;
  z-index: 1;
}

.logo {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 2;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  position: relative;
  z-index: 2;
  margin-right: 20px;
}

.nav-links a {
  font-size: 1rem;
  font-family: 'Copperplate Gothic', sans-serif;
  font-weight: bold;
  color: #1E262F;
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #195d79;
}

.register-button {
  font-size: 1rem;
  color: white;
  background-color: #444;
  font-family: 'Copperplate Gothic', sans-serif;
  font-weight: bold;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
}

.register-button:hover {
  background-color: #555;
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 30px;
  height: 21px;
  cursor: pointer;
  z-index: 3;
}

.hamburger .bar {
  width: 100%;
  height: 3px;
  background-color: #fff;
  transition: all 0.3s ease;
}


@media (max-width: 768px) {
  .nav-links {
    display: none;
    position: absolute;
    top: 100px;
    right: 0;
    background-color: aliceblue; 
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
  }

  .nav-links.active {
    display: flex; 
  }

  .hamburger {
    display: flex; 
  }
}

.hamburger.active .bar:nth-child(1) {
  transform: rotate(45deg);
  position: relative;
  top: 8px;
}

.hamburger.active .bar:nth-child(2) {
  opacity: 0;
}

.hamburger.active .bar:nth-child(3) {
  transform: rotate(-45deg);
  position: relative;
  top: -8px;
}
</style>
