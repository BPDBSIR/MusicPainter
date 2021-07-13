<template>
  <div class="song-list">

    <span class="num">{{ index + 1 }}</span>
    <el-image
        style="width: 44px; height: 44px;border-radius: 6px;margin-left: 20px"
        :src="data.al.picUrl"
        fit="fill"
        :preview-src-list="srcList"></el-image>
    <div class="song-desc">
      <p class="name">
        {{ data.name }}
      </p>
      <p class="singer">{{ data.ar[0].name }}</p>
    </div>
    <span class="time">{{ formatPlayTime(data.dt / 1000) }}</span>

  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import {ISong} from "@/types"
import {formatPlayTime} from "@/utils/fifters"

export default defineComponent({
  name: "SongList",
  props: {
    data: Object as PropType<ISong>,
    index: {
      type: Number
    }
  },
  setup() {
    const srcList = [
      'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
      'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
    ]

    return {
      formatPlayTime,
      srcList
    }
  }
})
</script>

<style lang="scss" scoped>
.song-list {
  display: flex;
  align-items: center;
  margin: 4px 0;
  padding: 8px 10px;
  border-radius: 6px;
  position: relative;

  &:hover {
    background-color: #F5F5F7;
  }

  .num {
    font-family: DIN;
    font-size: 20px;
  }

  .cover {
    width: 52px;
    height: 52px;
    border-radius: 6px;
    margin-left: 20px;
  }

  .song-desc {
    margin-left: 20px;

    .name {
      font-size: 17px;

    }

    .singer {
      font-size: 14px;
      margin-top: 4px;
      color: #7a7a7b;
    }
  }

  .time {
    font-family: DIN;
    position: absolute;
    right: 20px;
  }
}
</style>