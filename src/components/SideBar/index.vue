<template>
  <div id="sidebar">
    <h3 id="title">MusicPainter</h3>
    <menu-item :data="menu"/>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive} from "vue";
import MenuItem from "../SideBarItem.vue";
import {menu} from "@/configs/local";

export default defineComponent({
  name: "SideBar",
  components: {MenuItem},
  setup() {
    return {
      menu
    }
  }
})


</script>

<style lang="scss">
#sidebar {
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 0;
  border-right: 2px solid #EBF2FC;

  #title {
    color: #303E65;
    margin-bottom: 20px;
    line-height: 30px;
  }
}
</style>