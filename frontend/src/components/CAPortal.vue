<template >
  <div class="caportal">
    <div class="landing-page">
      <img src="@/assets/cabg.png" class="cabg" />

      <div class="text-headings">
        <h1 class="heading-primary">CAMPUS</h1>
        <h2 class="heading-sec">AMBASSADOR</h2>
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
  font-family: "CollegiateBlackFLF";
  src: url("@/assets/fonts/CollegiateBlackFLF.ttf") format("truetype");
}

.caportal{
  background-color: #10567A;
}

.landing-page {
  background: url("../assets/SnowFall.png") no-repeat center center/cover;
  width: auto;
  height: 100vh;
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
  font-family: "CollegiateBlackFLF", sans-serif;
  font-size: 10em;
}

.heading-sec {
  font-family: "CollegiateBlackFLF", sans-serif;
  font-size: 9rem;

}



</style>
