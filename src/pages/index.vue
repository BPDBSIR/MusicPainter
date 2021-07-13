<template>
  <div class="layout">
    <el-row>
      <el-col :span="3">
        <side-bar/>
      </el-col>
      <el-col :span="21">
        <div class="top" style="height: 60px">
          <div class="top-menu">
            <el-button icon="el-icon-search" circle @click="dialogTableVisible = true"></el-button>
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
          </div>
        </div>
        <container/>
      </el-col>
    </el-row>
    <el-dialog title="请输入搜索内容" v-model="dialogTableVisible">
      <p>SearchContent</p>
    </el-dialog>
    <PlayerBar/>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import SideBar from "../components/SideBar/index.vue";
import Container from "../components/Container/index.vue";
import PlayerBar from "components/PlayerBar/index.vue";

export default defineComponent({
  name: "index",
  components: {PlayerBar, Container, SideBar},
  setup() {
    const dialogTableVisible = ref(false)

    return{
      dialogTableVisible
    }
  }
})
</script>

<style lang="scss" scoped>
.layout{
  .top{
    position: relative;
    .top-menu{
      position: absolute;
      right: 20px;
      top: 50%;
    }
  }
}
</style>