<template>
  <div>
    <!-- <h1></h1> -->
    <input type="text" v-model="input1" />
    <input type="text" v-model="input2" />
    <div>
      <!-- <h1>{{result}}</h1> -->
      <button type="button" @click="countValue">Count it!</button>
      <DemoChild :child1="result" />
    </div>
  </div>
</template>

<script>
import DemoChild from "./DemoChild.vue";
export default {
  components: {
    DemoChild
  },
  data() {
    return {
      input1: null,
      input2: null,
      result: null
    };
  },
  methods: {
    countValue() {
      //   const input1 = '';
      //   const input2 = '';
      this.result = this.input1 * this.input2;
    }
  }
};
</script>

<style>
</style>