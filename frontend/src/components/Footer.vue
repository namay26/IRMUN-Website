<template>
  <div class="landing-page">
    <div class="container">
      <div class="footer-section">
        <div class="contact-info">
          <img src="../assets/IRMUN Logo.png" alt="IRMUN Logo" class="logo" />
          <h3>Get Direction</h3>
          <p>IRMUN Office, Student Activity Centre<br />
            Indian Institute of Technology, Roorkee 247667
          </p>
          <div class="social-icons">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/ir_mun.s/?hl=en"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-linkedin"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
          </div>
        </div>
        <div class="contact-details">
          <h3>Contact Us</h3>
          <p class="email">irmun@iitr.ac.in<br />
            sahil.irmun@gmail.com
          </p>
          <p class="contact">Janhavi : +91 00000 00000<br />
            Divyansh : +91 00000 00000
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.landing-page {
  font-family: "Copperplate", 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-style: bold;
  color: #CFF8FE;
  position: relative;
  background: url("../assets/SnowFall.png") no-repeat center center/cover;
  width: 100%;
  height: 70vh;
}

.container {
  position: absolute;
  top: 50%;
  width: 100%;
  background-color: #1D1D1D;
  height: 50vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
}

.footer-section {
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: #CFF8FE;
}

.contact-info, .contact-details {
  width: 45%;
}

.logo {
  width: 60px;
  margin-bottom: 15px;
}

h3 {
  font-size: 1.2em;
  margin-bottom: 10px;
}

p {
  line-height: 1.5;
}

.social-icons {
  display: flex;
  gap: 10px;
  margin-top: 15px;
  color:#CFF8FE;
  z-index: 1;
}

.social-icons a {
  color: #CFF8FE;
  font-size: 1.5em;
  text-decoration: none;
}
.contact-details .contact {
  margin-top: 15px;
  padding-top: 10px;
 
}
</style>
