<template>
  <div class="welcomePage">
     <div class="landing-page">
      <div class="container">
      <div class="header">REGISTRATION</div>
      
       <div class="content">
       <form>
       <input type="text" class="formInputs" name="name" placeholder="Name" />
       <input type="text" class="formInputs" name="collegeName" placeholder="School/College/University Name" />
       <input type="Number" class="formInputs" name="contact" placeholder="WhatsApp Number" />
       <input type="Number" class="formInputs" name="altContact" placeholder="Alternate Contact Number" />
       <input type="text" class="formInputs" name="email" placeholder="Email Address" />

       <label for="gender" class="heading" >Gender:</label>
       <div class="qualColor">
       
       <div>
       <input type="radio" id="female" class="radioStyles" name="gender" value="female">
       <label for="female" >Female</label>
       </div>

       <div>
       <input type="radio" id="male" class="radioStyles" name="gender" value="male">
       <label for="male">Male</label>
       </div>

       <div>
       <input type="radio" id="other" class="radioStyles" name="gender" value="other">
       <label for="other">Other</label>
       </div>
       </div>

       
       <label for="qualification" class="heading">Qualification:</label>
       <div class="qualColor">
       
       <div>
       <input type="radio" id="UG" class="radioStyles" name="qualification" value="UG">
       <label for="UG" >UG</label>
       </div>

       <div>
       <input type="radio" id="PG" class="radioStyles" name="qualification" value="PG">
       <label for="PG">PG</label>
       </div>

       <div>
       <input type="radio" id="tenth" class="radioStyles" name="qualification" value="tenth">
       <label for="tenth">10th-12th</label>
       </div>

       <div>
       <input type="radio" id="underTenth" class="radioStyles" name="qualification" value="underTenth">
       <label for="underTenth">Under 10th</label>
       </div>

       <div>
       <input type="radio" id="other" class="radioStyles" name="qualification" value="other">
       <label for="other">Other</label>
       </div>

       </div>
    

       <input type="Number" min="0" class="formInputs" name="experience" placeholder="Experience(Number of MUNs participated before)" />
       <input type="text" class="formInputs" name="CAcode" placeholder="CA Code(If part of a contingent)" />
     

     <label for="CPref1" class="heading">Committee Preference 1:</label><br>
        <div class="qualColor ">
      
       <div>
       <input type="radio" id="UNGA1" class="radioStyles" name="CPref1" value="UNGA">
       <label for="UNGA1" >UNGA|DISEC</label>
       </div>

       <div>
       <input type="radio" id="UNHRC1" class="radioStyles" name="CPref1" value="UNHRC">
       <label for="UNHRC1">UNHRC</label>
       </div>

       <div>
       <input type="radio" id="UNSC1" class="radioStyles" name="CPref1" value="UNSC">
       <label for="UNSC1">UNSC|CCC</label>
       </div>

       <div>
       <input type="radio" id="AIPPM1" class="radioStyles" name="CPref1" value="AIPPM">
       <label for="AIPPM1">AIPPM</label>
       </div>

       <div>
       <input type="radio" id="AISM1" class="radioStyles" name="CPref1" value="AISM">
       <label for="AISM1">AISM</label>
       </div>

        <div>
       <input type="radio" id="IP1" class="radioStyles" name="CPref1" value="IP">
       <label for="IP1">International Press|IP</label>
       </div>

       </div>
       
       <label class="heading">Portfolio Preference for AIPPM|1 </label>
      
      <div>
         <input type="text" class="formInputs" name="AIPPMpref1" placeholder="Preference 1|Committee 1|AIPPM" />
       <input type="text" class="formInputs" name="AIPPMpref2" placeholder="Preference 2|Committee 1|AIPPM" />
       <input type="text" class="formInputs" name="AIPPMpref3" placeholder="Preference 3|Committee 1|AIPPM" />
      </div>

      <label for="CPref2" class="heading">Committee Preference 2:</label>
      <div class="qualColor ">
       
      
       <div>
       <input type="radio" id="UNGA2" class="radioStyles" name="CPref2" value="UNGA">
       <label for="UNGA2">UNGA|DISEC</label>
       </div>

       <div>
       <input type="radio" id="UNHRC2" class="radioStyles" name="CPref2" value="UNHRC">
       <label for="UNHRC2">UNHRC</label>
       </div>

       <div>
       <input type="radio" id="UNSC2" class="radioStyles" name="CPref2" value="UNSC">
       <label for="UNSC2">UNSC|CCC</label>
       </div>

       <div>
       <input type="radio" id="AIPPM2" class="radioStyles" name="CPref2" value="AIPPM">
       <label for="AIPPM2">AIPPM</label>
       </div>

       <div>
       <input type="radio" id="AISM2" class="radioStyles" name="CPref2" value="AISM">
       <label for="AISM2">AISM</label>
       </div>

        

       </div>
       
       <label class="heading">Portfolio Preference for UNHRC|2 </label>
      
      <div>
         <input type="text" class="formInputs" name="UNHRCpref1" placeholder="Preference 1|Committee 2|UNHRC" />
       <input type="text" class="formInputs" name="UNHRCpref2" placeholder="Preference 2|Committee 2|UNHRC" />
       <input type="text" class="formInputs" name="UNHRCpref3" placeholder="Preference 3|Committee 2|UNHRC" />
      </div>

       <label class="heading" for="accomodation">Accomodation</label>

       <div class="qualColor">
       
       <div >
       MUNarchy has provision for participants' residences in the guest houses/ hostel rooms of IIT Roorkee inside the campus itself. IITR has multiple comfortable guest houses/guest rooms. The team will make all the arrangements. We recommend availing yourself of the accommodation facility to avoid the hassle of travelling and living outside the campus. 
       The accommodation is limited; the team will allot hostels on a first-come, first-serve basis. Any later request a few days before the event to provide accommodation can't be guaranteed and is subject to availability. 
       <br>
       </div>

        <div >
       <input type="radio" id="yesAccom" class="radioStyles" name="accommodation" value="Yes">
       <label for="yesAccom" >Yes, avail in-house accommodation</label>
       </div>
       <div >
       <input type="radio" id="noAccom" class="radioStyles" name="accommodation" value="No">
       <label for="noAccom" >No, only participation without accommodation</label>
       </div>
       </div>

      
       <button type="submit" class="payBtn">Register</button>
       </form>
       
    </div>
    </div>
   
    
    </div>
    <Footer />
  </div>
</template>

<script>

import Footer from "./Footer.vue";
export default {
  name: "Form",
  components: {
    Footer,
  },
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

.welcomePage {
display: flex;
  flex-direction: column;
  background: url("@/assets/SnowFallBg.png") no-repeat center center scroll;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  margin:0;
}

.content{
position:relative;
display:flex;
flex-direction:column;
width:80%;
justify-content:center;


}
.formInputs{
width:100%;
  
  display: flex; 
  justify-content: center; 
  align-items: center; 
  height: 2.3rem; 
  margin: 0.6rem auto;
  padding:0.5rem;
  font-family: "Copperplate", sans-serif;
  letter-spacing: 0.2rem;
  font-size: 1rem;
  background:#D9D9D9;
  border:none;
  border-radius:0.3rem;
}

label{
font-family: "Copperplate", sans-serif;
  letter-spacing: 0.2rem;
  font-size: 1rem;
  color: grey; 
    opacity: 1;
    
}

.radioField{
 width:60%;
 display:flex;
 justify-content:space-between;
}

.qualificationField{
display:flex;
justify-content:space-between;

}

.qualColor{
background:#D9D9D9;
border:none;
  border-radius:0.3rem;
  padding:0.5rem;
  margin: 0.6rem auto;
  font-family: "Copperplate", sans-serif;
  letter-spacing: 0.2rem;
  font-size: 1rem;
  color:grey;
  text-align:justify;
}


.radioStyles{
margin:0 0.3rem;
}

.genderOption{
width:100%;
  
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  height: 2.3rem; 
  margin: 0.6rem auto;
  padding:0.5rem;
  font-family: "Copperplate", sans-serif;
  letter-spacing: 0.2rem;
  font-size: 1rem;
  background:#D9D9D9;
  border:none;
  border-radius:0.3rem;
}

input:active{
border:none;
outline:none;
}

.payBtn{
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
  padding:0.5rem;
  cursor: pointer; 
transition: all 0.3s ease;
  
}

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
  top: 13rem; 
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
  z-index:1;
}

.header {
  font-family: "Copperplate", sans-serif;
  letter-spacing: 0.2rem;
  color: white;
  position: absolute;
  top:-4rem;
  width: 60%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1E262F;
  font-size: 3vw;
  border-radius: 1rem;
  border: 0.2rem solid white;
  margin-bottom:1rem;
}

.heading{
font-size:1.1rem;
font-weight:bold;
}
@media screen and (max-width: 768px) {
  .container {
   top:11rem;
    max-width: 90%;
    border-radius: 10px;
  }

  .content{
  width:95%;
  }
  .payBtn{
  font-size:1.2rem;
   height: 3rem;
  }

  .formInputs , label, .qualColor{
   font-size:0.8rem;
   letter-spacing:0.1rem;
  }

  
}

@media screen and (max-width: 480px) {
  .container {
    top:8rem;
    width: 90%; 
    margin: 3rem auto; 
    padding: 0.5rem; 
  }

 
  .payBtn{
  font-size:1rem;
  height:2rem;
  margin:0.5rem auto;

  }

  #munId{
  font-size: 0.8rem;
  }
}

@media (max-width: 425px) {
  .heading-primary {
    margin-top: 0;
  }
}

</style>