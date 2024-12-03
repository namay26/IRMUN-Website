<template>
  <div class="landing-page-1">
    <img src="@/assets/Group.png" class="flake snow" />
    <img src="@/assets/Flake2.png" class="flake2 snow" />
    <div class="time">
      <div class="container-1">
        <div class="countdown">
          <h2 class="heading-secondary-time">DAYS</h2>
          <h1 class="heading-primary-time">{{ days }}</h1>
        </div>
        <span class="heading-primary-time">:</span>
        <div class="countdown">
          <h2 class="heading-secondary-time">HOURS</h2>
          <h1 class="heading-primary-time">{{ hours }}</h1>
        </div>
        <span class="heading-primary-time">:</span>
        <div class="countdown">
          <h2 class="heading-secondary-time">MINUTES</h2>
          <h1 class="heading-primary-time">{{ minutes }}</h1>
        </div>
        <span class="heading-primary-time">:</span>
        <div class="countdown">
          <h2 class="heading-secondary-time">SECONDS</h2>
          <h1 class="heading-primary-time">{{ seconds }}</h1>
        </div>
      </div>
      <div class="date">
        <h2 class="heading-secondary-date">17 - 19 January</h2>
      </div>
    </div>
    <img src="@/assets/Flake3.png" class="flake3 snow" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
      eventDate: new Date("2025-01-17T00:00:00"),
    };
  },
  methods: {
    updateCountdown() {
      const now = new Date();
      const timeDifference = this.eventDate - now;

      if (timeDifference <= 0) {
        this.days = this.hours = this.minutes = this.seconds = "00";
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        this.days = String(days).padStart(2, "0");
        this.hours = String(hours).padStart(2, "0");
        this.minutes = String(minutes).padStart(2, "0");
        this.seconds = String(seconds).padStart(2, "0");
      }
    },
  },
  mounted() {
    this.updateCountdown();
    this.countdownInterval = setInterval(this.updateCountdown, 1000);
  },
};
</script>


<style scoped>
@font-face {
  font-family: "Polar";
  src: url("@/assets/fonts/Polar%20Snow.ttf") format("truetype");
}

@font-face {
  font-family: "Iceberg";
  src: url("@/assets/fonts/Iceberg.ttf") format("truetype");
}

.time {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60%;
  background: url("../assets/thomso.png") no-repeat center bottom;
  background-size: cover;
  transform: translate(0%, 80%);
  z-index: inherit;
}

.landing-page-1 {
  background: url("../assets/SnowFall.png") no-repeat center center/cover;
  width: auto;
  height: 100vh;
  display: flex;
  position: relative;
}

.flake {
  position: absolute;
  top: -5%;
  z-index: 1;
}

.flake2 {
  position: absolute;
  right: 0;
  top:-5%;
  z-index: 1;
}

.flake3 {
  position: absolute;
  top: 95%;
  left: 0;
  z-index: 1;
}

.container-1 {
  position: absolute;
  top: -40%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  width: 90%;
}

.heading-secondary-date {
  position: relative;
  margin-top:72%;
  font-family: "Iceberg", sans-serif;
  color: white;
  font-size: 7vw;
}

.heading-secondary-time {
  font-family: "Polar", sans-serif;
  font-size: 3vw;
}

.heading-primary-time {
  font-family: "Polar", sans-serif;
  font-size: 11vw;
}

.countdown {
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}


@media (max-width: 1024px) {
  .snow{
    height:25%;
  }
  .time{
    height:45%;
  }
  .heading-secondary-date{
    margin-top: 70%;
  }
  .flake3{
    top: 65%;
  }
}

@media (max-width: 768px) {
  .snow{
    height:15%;
  }
  .time{
    height:35%;
  }
  .heading-secondary-date{
    margin-top: 70%;
  }
  .flake3{
    top: 52%;
  }
  .flake2, .flake{
    top: -8%;
  }
}

@media (max-width: 425px) {
  .snow{
    height:10%;
  }
  .time{
    height:20%;
  }
  .heading-secondary-date{
    margin-top: 70%;
  }
  .flake3{
    top: 30%;
  }
  .flake2, .flake{
    top: -5%;
  }
}



</style>
