<template>
    <nav class="navbar">
      <img src="@/assets/Nav Bar.png" alt="Navbar Background" class="navbar-bg" />
      <router-link to="/"><img src="@/assets/logo.png" alt="Logo" class="logo" /></router-link>

      <div class="nav-links">
          <router-link to="/ca-portal">CA Portal</router-link>
          <router-link to="/eb-portal">EB Portal</router-link>
          <router-link to="/committees">Committees</router-link>
          <router-link to="/faq">FAQ</router-link>
          <router-link to="/merch">Merch</router-link>
          <button class="register-button">Register</button>
      </div>
    </nav>
  </template>

  <script>
  export default {
    name: "Navbar",
  };
  </script>

  <style scoped>
  .navbar {
    position: fixed;
    top: -1px;
    left: 0;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: white;
    z-index: 1000;
    background-color:  rgb(0, 0, 0,0);
  }

  .navbar-bg {
    position: absolute;
    top:-8em;
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
  </style>
