<template>
  <div class="card">
    <img :src="image" alt="Card Image" class="card-image" />
    <div class="team-info textbox">
    
              <h3>{{ name }}</h3>
              <p>{{ role }}</p>
              </div>
            
   
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },

    role:{
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  text-align: center;
  margin-top: 1rem;
  z-index: 2;
  width:300px;
  height:300px;
  margin:4rem auto;
  padding: 1rem;
  color: white;
  background-image: url("@/assets/snow square.png");
}

.card:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}
.card-image {
  width:250px;
  height: 300px;
  gap:1em;
  position: relative;
  overflow: visible;
  object-fit: cover;
  
  top:-60px;
}

.card-title {
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
}

.textbox{
  height:80px;
  background: #1E262F;
  width: 120%;
  position:relative;
  left:-10%;
  border: 4px solid #ccc;
  box-sizing: border-box;
  border-radius: 1rem;
  top:-25%;
  overflow: visible;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  font-family: "Copperplate Gothic", sans-serif;
}

.team-info h3 {
  font-size: 1rem;

  margin-bottom: 0.3rem;
}

.team-info p {
  font-size: 0.8rem;
  color: #ccc;
}

@media (max-width: 827px) {
  .team-info h3 {
  font-size: 0.9rem;
}

.team-info p {
  font-size: 0.7rem;
  color: #ccc;
}
}

@media (max-width: 480px) {
  .team-info h3 {
  font-size: 0.8rem;
}

.team-info p {
  font-size: 0.6rem;
  color: #ccc;
}
}
</style>
