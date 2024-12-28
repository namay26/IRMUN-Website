<template>

  <div >
  <img src="../assets/house.png" class="house"></img>
  </div>

  <div class="footer-section">



    <div class="direction">
     <img src="../assets/IRMUN Logo.png" alt="Logo" class="logo" />
    <h2><u>Get Direction</u> </h2>
    <h3>IRMUN Office,Student Activity Centre </h3>
    <h3>Indian Institute of Technology,Roorkee </h3>
    <h3>Roorkee, Haridwar </h3>
    <h3>Uttarakhand, India</h3>
    <h3>247667</h3>

    <div class="social-icons">
            <a href="https://www.instagram.com/ir_mun.s/?hl=en"><i class="fab fa-instagram"></i></a>
            <a href="mailto:irmun@iitr.ac.in"><i class="fa fa-envelope"></i></a>
          </div>
    </div>
    <div class="contacts">
    <h2>Contact Us </h2>
    <p class="contact">
            Aarush : +91 99996 37376<br />
            Manmath : +91 77560 17385

          </p>
    </div>


  </div>
  <div class="tnc"><a href="/termsandconditions" target="_blank">Terms and Conditions</a></div>
</template>

<script>

export default {
name: "Demo",
components: {


},
};
</script>

<style scoped>
.tnc{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  background-color: #1D1D1D;
  padding-bottom: 3vh;
}
.house{
width:100%;
}
.footer-section{
width: 100vw;
  background-color: #1D1D1D;

  display: flex;
  justify-content: space-between;
  align-items: start;
  gap:3rem;
  color:#CFF8FE;
  box-sizing: border-box;
  padding:50px;

}



.social-icons{
display: flex;
  gap: 10px;
  margin-top: 15px;
  color:#CFF8FE;
  z-index: 1;
}

.social-icons a {
  color: #CFF8FE;
  font-size: 1.2em;
  text-decoration: none;
}

@media screen and (max-width: 780px) {
  h2{
  font-size:20px;}

  h3{
  font-size:15px}

  p{
  font-size:10px;}


}
</style>
