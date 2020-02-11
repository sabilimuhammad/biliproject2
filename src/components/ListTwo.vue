<template>
    <div class="boxb">
        <ul>
            <li v-for="(moved, key) in movedLists" :key="key" @click="$emit('backItem', moved, key)">
                {{moved.list}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
     props: {
         movedLists: Array, 
         },
    }
</script>
<style>
.boxb {
  border: 2px solid blue;
  list-style: none;
  margin-left: 100px;
  height: 400px;
  width: 200px;
}
</style>