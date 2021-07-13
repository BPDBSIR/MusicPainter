<template>
  <div class="playlist">
    <div class="controller">
      <ul class="tag-ul">
        <li class="tag-li" v-for="(item,index) in hotPlayListCategory" @click="changeCat(item.name)" :key="index" :class="{active:item.name === cat}">
          {{ item.name }}
        </li>
      </ul>
      <ul class="order-controller">
        <li :class="{active:order === 'hot'}" @click="order = 'hot'" class="tag-li">最热</li>
        <li :class="{active:order === 'new'}" @click="order = 'new'" class="tag-li">最新</li>
      </ul>
    </div>
    <playlist-item v-for="(item,index) in playList" :key="index" :data="item"/>
    <el-pagination
        style="margin-bottom: 100px;text-align: center;margin-top: 20px"
        @current-change="currentChange"
        layout="prev, pager, next"
        :page-count="limit"
        :total="total">
    </el-pagination>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive, ref, toRefs, watch} from "vue";
import {requestAllPlayListCategory, requestHotPlayListCategory, requestPlayList} from "@/api/playlist";
import {IState, IParamPlayList} from "pages/Playlist/typing";
import SongList from "components/SongList.vue";
import PlaylistItem from "components/PlaylistItem.vue";

export default defineComponent({
  name: "index",
  components: {PlaylistItem, SongList},
  setup() {
    const state = reactive<IState>({
      hotPlayListCategory: [],
      allPlayListCategory: [],
      playList: [],
      cat: "民谣",
      limit: 40,
      offset: 0,
      order: "hot",
    })

    const total = ref(0)

    const getHotPlayListCategory = async () => {
      const {tags} = await requestHotPlayListCategory()
      state.hotPlayListCategory = tags
    }

    const getAllPlayListCategory = async () => {
      state.allPlayListCategory = await requestAllPlayListCategory()
      console.log(state.allPlayListCategory)
    }

    const getPlayList = async (param: IParamPlayList) => {
      const data = await requestPlayList(param.order, param.cat, param.limit,param.offset)
      state.playList = data.playlists
      total.value = data.total
      console.log(state.playList)
    }

    const changeCat = (cat: string) => {
      state.cat = cat
    }


    const currentChange = (value: number) => {
      state.offset = (value -1) * state.limit
      /*getPlayList({
        order: state.order,
        cat: state.cat,
        limit: state.limit,
        offset: value * state.limit
      })*/
    }
    onMounted(() => {
      getHotPlayListCategory()
      getAllPlayListCategory()
      getPlayList({
        order: state.order,
        cat: state.cat,
        limit: state.limit,
        offset: state.offset
      })
    })
    watch(() => [state.cat,state.order,state.offset], ((value, oldValue) => {
      getPlayList({
        order: state.order,
        cat: state.cat,
        limit: state.limit,
        offset: state.offset
      })
    }))
    return {
      ...toRefs(state),
      changeCat,
      total,
      currentChange
    }
  }
})
</script>

<style lang="scss" scoped>
.playlist {
  padding: 20px;

  .active{
    background-color: #1ECE9A !important;
    color: white !important;
  }
  .controller {
    margin-bottom: 20px;
    position: relative;
    .tag-ul{
    }
    .tag-li{
      background-color: #F7F7F7;
      border-radius: 22px;
      display: inline-block;
      margin-left: 5px;
      margin-right: 5px;
      color: #161E27;
      font-size: 13px;
      padding: 8px 20px;
      transition: all 0.3s;

      &:hover {
        background-color: #1ECE9A;
        color: white;
      }
    }

    .order-controller{
      position: absolute;
      right: 10px;
      top: 0;
      bottom: 0;
    }

  }
}
</style>