<template>
  <div id="discover">
    <p style="font-family: DIN;margin-bottom: 20px">歌单推荐</p>
    <playlist-item v-for="item in state.hotPlayList" :key="item.id" :data="item"/>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive} from "vue";
import {IState} from '../typing'

import {requestBanner, requestHotPlayList, BannerTypeEnum} from '@/api/discover'
import PlaylistItem from "components/PlaylistItem.vue";

export default defineComponent({
  name: "Discover",
  components: {PlaylistItem},
  setup() {

    const state = reactive<IState>({
      bannerList: [],
      hotPlayList: [],
      albumList: [],
      singerList: [],
      rankList: [],
    })

    onMounted(() => {
      getBannerList()
      getHotPlayList()
    })


    const getBannerList = async () => {
      const {banners} = await requestBanner(BannerTypeEnum.PC)
      state.bannerList = banners
    }

    const getHotPlayList = async () => {
      const {result} = await requestHotPlayList(16)
      state.hotPlayList = result
    }

    return {
      state
    }
  },
})
</script>

<style lang="scss" scoped>
#discover {
  padding: 20px;
}
</style>