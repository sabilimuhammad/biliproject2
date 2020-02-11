<template>
  <div class="d-flex">
    <div class="square">
    <ul>
      <li
        class="lists-item-1"
        v-for="(item, index) in lists"
        :key="item.list"
        @click="moves(item,index)"
      >{{item.list}}</li>
    </ul>
  </div>
  <boxb :movedLists="moved" />
  </div>
</template>
<script>
import boxb from "./ListTwo.vue";
export default {
  components: {
    boxb
  },
  data() {
    return {
      lists: [
        {
          list: "item1"
        },
        {
          list: "item2"
        },
        {
          list: "item3"
        },
        {
          list: "item4"
        },
        {
          list: "item5"
        }
      ],
      moved: []
    };
  },
  methods: {
    moves(item, index) {
      this.moved.push(item);
      this.lists.splice(index, 1);
    },
    backItem(moved, key) {
      this.lists.splice(key, 1);
      this.moved.push(this.list);
    }
  }
};
</script>
<style>
.square {
  border: 2px solid blue;
  list-style: none;
  margin-left: 100px;
  height: 400px;
  width: 200px;
}
.d-flex {
  display:flex;
}
</style>