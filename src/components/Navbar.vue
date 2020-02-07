<template>
  <div>
      <div>
    <p v-if="isShow">{{car.type}}, {{car.color}}</p>
  </div>
<!-- <img :src="imageUrl" alt="alt">
  <button type="button" @click="changeimg"> Change Button </button> -->
  <ul>
      <li v-for="name in nameList" :key="name.name">{{name.name}}</li> 
  </ul>
  </div>
</template>

<script>
export default {
    data(){
        return {
            // message : 'who is this?',
            // name : 'bili',
            image1: 'https://www.carlogos.org/logo/Ferrari-logo-2560x1440.png',
            car: {
            // type: 'huracan',
            // color: 'black',
        },
        imageUrl : 'https://www.carlogos.org/logo/Lamborghini-logo-1920x1080.png',
        alt : 'alt',
        nameList: [
            {
            name : 'Laferrari',
        },
        {
            name : 'Aventador',
        },
        ]
    };
    },
    methods: {
        changeimg(){
            this.image1 = this.changeimg;
        },
}
}
</script>

<style>
</style>