<template>
  <div class="landing-page">
    <img src="@/assets/Snow Fall Background.png" alt="Pine Background" class="pine-bg" />
    <img src="@/assets/Mask group.png" alt="Logo Background" class="logo-bg" />

    <div class="text-headings">
      <h2 class="heading-primary">CAMPUS</h2>
      <h1 class="heading-secondary">AMBASSADOR</h1>
    </div>

  </div>
  <Timeline />
  <Committee />
  <Footer />
</template>

<script>
  import Timeline from "@/components/Timeline.vue";
  import Committee from "@/components/Committee.vue";
  import Footer from "@/components/Footer.vue";
  export default {
  name: "Home",
  components: {
    Timeline,
    Committee,
    Footer
  },
};
</script>

<style scoped>

@font-face {
  font-family: "CollegiateBlackFLF";
  src: url("@/assets/fonts/CollegiateBlackFLF.ttf") format("truetype");
}

.landing-page {
  background: url("../assets/SnowFall.png") no-repeat center center/cover;
  width: auto;
  height: 100vh;
}

.pine-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.logo-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  z-index: 1;
}

.text-headings {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
text-align: center;
color: #fff;
z-index: 2;
}

.heading-primary {
font-family: "CollegiateBlackFLF", sans-serif;
font-size: 3rem;
margin-bottom: -30px;
color: black;
}

.heading-secondary {
font-family: "CollegiateBlackFLF", sans-serif;
font-size: 10rem;
color: black;
}

</style>
