<template>
  <div class="playlist-detail-info">
<!--    <el-image style="width: 220px;height: 220px;border-radius: 12px" :src="data.coverImgUrl" fit="fill"/>-->
    <img style="width: 220px;height: 220px;border-radius: 12px" :src="data.coverImgUrl" alt="">
    <div class="playlist-info">
      <p class="name">{{data.name}}</p>
      <div class="user-info">
        <img style="width: 30px;height: 30px;border-radius: 50%" :src="message.avatarUrl" alt=""  >
        <span style="color: #7a7a7b" class="username">{{message.nickname}}</span>
      </div>
      <p class="last-time">
      </p>
      <p class="desc">
        {{data.description}}
      </p>
      <div style="margin-top: 20px">
        <button class="start">播放</button>
        <button class="start">
          <i style="font-size: 20px" class="el-icon-s-opportunity"></i>
        </button>
        <button class="start">
          <i style="font-size: 20px" class="el-icon-more"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, inject, onMounted} from "vue";
import {formatPlayTime} from "@/utils/fifters"

export default defineComponent({
  name: "PlaylistInfo",
  props: {
    data: {
      type: Object
    },
  },
  setup(props) {
    const data = props.data
    onMounted(() => {
    })
    let message = inject("message")
    return{
      formatPlayTime,
      message
    }
  }
})
</script>

<style lang="scss" scoped>

.playlist-detail-info{
  display: flex;
  align-items: center;
  .playlist-info{
    margin-left: 40px;
    .name{
      font-size: 30px;
    }
    .user-info{
      display: flex;
      align-items: center;
      margin-top: 10px;
      .username{
        margin-left: 10px;
      }
    }
    .last-time{
      font-family: DIN;
      color: #7a7a7b;
      margin-top: 10px;
    }
    .desc{
      color: #7a7a7b;
      margin-top: 10px;
      font-size: 14px;
    }
    .start{

      display: inline-block;
      outline: none;
      border: none;
      padding: 12px 20px;
      background-color: #EAEFFD;
      border-radius: 8px;
      color: #335eea;
      font-size: 15px;
      font-weight: bold;
      transition: all 0.2s;
      margin-right: 16px;
      &:hover{
        background-color: #f5f5f7;
        transform: scale(1.1);
      }
    }
  }
}

</style>