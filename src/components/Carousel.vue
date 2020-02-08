<template>
  <section class="slider">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div v-for="(image,index) in imgs" :key="index" class="carousel-item active">
          <img :src="image" class="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      imgs: [
        "@/assets/images/huracan1.jpg",
        "@/assets/images/aventador1.jpg",
        "@/assets/images/sian.jpg"
      ]
    };
  }
};
</script>

<style>
</style>