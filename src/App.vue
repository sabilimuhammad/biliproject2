<template>
  <div id="app">
    <Navbar />
    <carousel />
    <Demo />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Carousel from "./components/Carousel.vue";
import Demo from "./components/Demo.vue";
export default {
  name: "app",
  components: {
    Carousel,
    Navbar,
    Demo
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: -moz-inline-block;
  text-align: center;
  color: #2c3e50;
  margin-top: 300px;
}
</style>
