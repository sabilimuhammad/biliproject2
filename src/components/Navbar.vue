<template>
  <div>
      <div>
    <p v-if="isShow">{{car.type}}, {{car.color}}</p>
  </div>
  <button type="button" @click="isShow = true"> Change Name!</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            message : 'who is this?',
            name : 'bili',
            isShow: false,
            car: {
            type: 'huracan',
            color: 'black',
        },
    };
    },
    methods: {
        changeName(){
            this.isShow = true;
        },
}
}
</script>

<style>
</style>