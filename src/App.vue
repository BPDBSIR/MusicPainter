<template>
  <router-view/>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "App"
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  /*text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
}
</style>
