<template>

  <div >
  <img src="../assets/house.png" class="house"></img>
  </div>
  
  <div class="footer-section">
   
    
     
    <div class="direction">
     <img src="../assets/IRMUN Logo.png" alt="Logo" class="logo" />
    <h2>Get Direction </h2>
    <h3>IRMUN Office,Student Activity Centre </h3>
    <h3>Indian Institute of Technology,Roorkee </h3>

    <div class="social-icons">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/ir_mun.s/?hl=en"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-linkedin"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
          </div>
    </div>
    <div class="contacts">
    <h2>Contact Us </h2>
    <h3>Mail Id: irmun@iitr.ac.in </h3>
    <p class="contact">
            Divyansh : +91 89496 08718<br />
            Manmath : +91 77560 17385

          </p>
    </div>
    
  </div>

</template>

<script>

export default {
name: "Demo",
components: {
  
 
},
};
</script>

<style scoped>

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