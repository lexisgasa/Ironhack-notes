
<script setup>

</script>

<template>

<!-- 
  easy way
  <div>
  <nav>
    <img src="./images1/Header.png" alt="">
  </nav>
  <main>
    <img src="./images1/IntroSection.png" alt="">
  </main>
  <footer>
    <img src="./images1/USPs.png" alt="">
  </footer>
</div> -->

<header>
  <img src="./images/1.Header/Ironhack_logo.png" alt="">
  <img src="./images/1.Header/Burger_menu.png" alt="">
</header>


<main>
   <img src="./images/2.Main/Vue_logo.png" alt="">
   <h1>Welcome to Vue.js</h1>
   <p>Becoming a coding ninja with the fastest- <br> growing JavaScript framework</p>
   <button>Awesome</button>
</main>

<section>
    <div class="box-1">
      <img src="./images/3.Footer/USP-1.png" alt="">
      <h2>Performant</h2>
      <p>Truly reactive, compiler-optimized rendering system that rarely requires manual optimization.</p>
    </div>
    <div class="box-2">
      <img src="./images/3.Footer/USP-2.png" alt="">
      <h2>Approachable</h2>
      <p>Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation.</p>
    </div>
    <div class="box-3">
      <img src="./images/3.Footer/USP-3.png" alt="">
      <h2>Versatile</h2>
      <p>A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework.</p>
    </div>
</section>
    <footer>
    </footer>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inria+Sans&family=Inter:wght@700;800&display=swap');

* {
  font-family: "inter";
}

body {
  width: 100vw;
}
header {
  display: flex;
  justify-content: space-between;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px;
  gap: 10px;
}

main button {
  color: white;
  background: #34495E;
  border-radius: 13px;  
}


section {
  background: #39B983;
  display: flex;
  text-align: center;
  padding: 80px 40px;
  gap: 100px;
}

footer {
  height: 2vw;

  
}

</style>
