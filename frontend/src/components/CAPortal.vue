<template >
  <div class="caportal">
    <div class="landing-page">
      <img src="@/assets/cabg.png" class="cabg" />

      <div class="text-headings">
        <h1 class="heading-primary">CAMPUS</h1>
        <h2 class="heading-sec">AMBASSADOR</h2>
        <a href="https://docs.google.com/forms/d/1uzRJhRJlAfPvv2KGUr35eDOUuaCVICwm-3IsGeVmP1k/edit"><button class="btn btn-primary">Register as CA</button></a>
      </div>

    </div>
    <CADesc />
    <Footer />
  </div>
</template>

<script>
import CADesc from "@/components/CADesc.vue";
import Footer from "@/components/Footer.vue";
export default {
name: "CAPortal",
components: {
  CADesc,
  Footer,
},
};
</script>
<style scoped>
@font-face {
  font-family: "Gothic";
  src: url("@/assets/fonts/Gothic.ttf") format("truetype");
}

@font-face {
  font-family: "CollegiateBlackFLF";
  src: url("@/assets/fonts/CollegiateBlackFLF.ttf") format("truetype");
}

.btn{
  margin-top: 2rem;
  background-color: #1E262F;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  height: 3rem;
  font-size: 1.2rem;
  color: white;
}

.caportal{
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
}

.landing-page {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cabg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 112%;
    object-fit: cover;
    z-index: 1;
  }

  .text-headings {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  line-height: 1;
  color: #1E262F;
  z-index: 2;
}


.heading-primary {
  font-family: "Gothic", sans-serif;
  font-size: 10vw;
}

.heading-sec {
  font-family: "Gothic", sans-serif;
  font-size: 9vw;

}


@media (max-width: 1024px) {
}

@media (max-width: 768px) {
}

@media (max-width: 425px) {
  .cabg{
    height:70%;
    top: 40%;
  }
  .text-headings{
    top: 30%;
  }
}


</style>
