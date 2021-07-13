<template>
  <div class="rank">

    <div class="module">
      <p class="title">云音乐特色榜</p>
      <playlist-item v-for="(item,index) in featureList" :key="index" :data="item"/>
    </div>

    <div class="module">
      <p class="title">全球媒体榜</p>
      <playlist-item v-for="(item,index) in globalList" :key="index" :data="item"/>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive, toRefs,computed} from "vue";
import {requestRankList} from "@/api/rank";
import SongList from "components/SongList.vue";
import PlaylistItem from "components/PlaylistItem.vue";

export default defineComponent({
  name: "Rank",
  components: {PlaylistItem, SongList},
  setup() {
    const state = reactive({
      rankList: []
    })
    const getRankList = async () => {
      const {list} = await requestRankList()
      console.log(list)
      state.rankList = list
    }
    const featureList = computed(() => state.rankList.slice(0,4))
    const globalList = computed(() => state.rankList.slice(4, state.rankList.length))
    onMounted(() => {
      getRankList()
    })
    return{
      ...toRefs(state),
      featureList,
      globalList
    }
  }
})
</script>

<style lang="scss" scoped>
.rank{
  padding: 20px;

  .module{
    .title{
      font-size: 16px;
      margin-left: 10px;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
}
</style>