<template>
  <nav class="navbar">
    <img src="@/assets/Nav Bar.png" alt="Navbar Background" class="navbar-bg" />
    <router-link to="/">
      <img src="@/assets/munarchy.png" alt="Logo" class="logo" />
    </router-link>

    <div class="hamburger" @click="toggleMenu">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>

    <div class="nav-links" :class="{ active: menuOpen }">
      <router-link to="/ca-portal" @click="closeMenu">CA Portal</router-link>
      <router-link to="/eb-portal" @click="closeMenu">EB Portal</router-link>
      <router-link to="/committees" @click="closeMenu">Committees</router-link>
      <router-link to="/sponsors" @click="closeMenu">Sponsors</router-link>
      <router-link to="/merch" @click="closeMenu">Merch</router-link>
      <router-link to="/team" @click="closeMenu">Team</router-link>
      <router-link to="/faq" @click="closeMenu">FAQ</router-link>
      <a
        class="down"
        href="https://drive.google.com/file/d/1BpYchR84wL3Ax9YLUAty-SAstRqKYrqr/view?usp=sharing"
        target="_blank"
        @click="closeMenu"
      >Brochure</a>
      <router-link class="register" to="/welcome" style="color: white;" @click="closeMenu">
        Register
      </router-link>
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
    },
    closeMenu() {
      this.menuOpen = false;
    },
  },
};
</script>


<style scoped>
@font-face {
  font-family: "Roboto";
  src: url("@/assets/fonts/Roboto.ttf") format("truetype");
}
.register{
  height:10%;
  background-color: #1E262F;
  border-radius: 5px;
  padding: 0.5rem 1rem;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 4vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0);
  padding: 0px 20px;
}

.navbar-bg {
  pointer-events: none;
  position: absolute;
  top: -7rem;
  left: 0;
  width: 100%;
  z-index: -1;
}

.logo {
padding-top:5px;
  position: relative;
  z-index: 2;
  height: 3.5rem;
}

.nav-links {
  display: flex;
  gap: 1.2rem;
  z-index: 2;
  margin-right: 20px;
}

.nav-links a {
  font-size: 0.9rem;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: black;
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #195d79;
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 3vw;
  height: 3vw;
  cursor: pointer;
  z-index: 3;
}

.hamburger .bar {
  width: 100%;
  height: 0.4vw;
  background-color: black;
  transition: all 0.3s ease;
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

@media (max-width: 920px) {
  .nav-links {
    display: none;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 0px;
    right: 0px;
    width: 100vw;
    background-color: rgba(255, 255, 255, 0.9);
    gap: 1rem;
    padding: 1rem;
    z-index: 2;
    margin:0;
  }

  .nav-links.active {
    display: flex;
  }

  .hamburger {
    display: flex;
  }

}

@media (max-width: 480px) {
  .nav-links a {
    font-size: 0.9rem;
    padding: 0.3rem 0.8rem;
  }

  .navbar{
    height: 4vw;
    padding-top:1rem;
  }

  .logo{
  height:1.5rem;
  }


}

@media (max-width: 1680px) {
  .navbar-bg {
    top: -4rem;
  }
}

@media (max-width: 1440px) {
  .navbar-bg {
    top: -3rem;
  }
}

@media (max-width: 1140px) {
  .navbar-bg {
    top: -2.4rem;
  }
  .navbar{
    height: 5.5vw;
  }
}


@media (max-width: 998px) {
  .navbar-bg {
    top: -1.5rem;
  }
  .navbar{
    height: 7vw;
  }
}

@media (max-width: 768px) {
  .navbar-bg {
    top: 0rem;
  }
  .navbar{
    height: 5vw;
    padding-top:1.2rem;
  }
}


@media (max-width: 425px) {
  .navbar-bg {
    top: 0rem;
  }

}

</style>
