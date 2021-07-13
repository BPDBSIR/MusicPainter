<template>
  <div class="playlist-detail">
    <playlist-info :data="detailData" style="margin-bottom:40px"/>
    <song-list v-for="(item,index) in songList.list" :key="index" :data="item" :index="index" @dblclick="handleClickPlay(index,songList.list)" :class="{active:(currentSong.name === item.name)}"/>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, reactive, ref, toRefs,provide} from "vue";
import {useRoute} from "vue-router";
import PlaylistInfo from "components/PlaylistInfo/index.vue";
import SongList from "components/SongList.vue";
import {IState} from "pages/PlaylistDetail/typing";
import {requestPlaylistDetail} from "@/api/playlist";
import usePlay from "@/hooks/usePlay"
import {useStore} from "vuex";
import {requestSongDetail} from "@/api/song";

export default defineComponent({
  name: "PlaylistDetail",
  components: {SongList, PlaylistInfo},
  setup() {
    const route = useRoute()
    const player = useStore().state.Player
    const state = reactive<IState>({
      queryParam: {
        id: 0,
        limit: 0,
        offset: 0
      },
      detailData: {},
      relatedPlaylist: [],

      playData: [],
    })

    const message = ref({})

    provide("message",message)


    const ids = ref("")
    const songList = reactive({
      list: []
    })
    const playerState = useStore().state.Player
    const init = (): void => {
      const id = route.params.id
      getPlaylistDetail(id.toString())
    }
    const getPlaylistDetail = async (id: string) => {
      const {playlist} = await requestPlaylistDetail(id)
      state.detailData = playlist
      state.playData = playlist.tracks
      playlist.trackIds.forEach((value:any) => {
        ids.value += value.id + ","
      })
      ids.value = ids.value.substr(0,ids.value.length -1)
      const {songs} = await requestSongDetail(ids.value)
      songList.list = songs
      message.value = playlist.creator
    }
    const {handleStartMusic,handleClickPlay} = usePlay()
    onMounted(() => {
      init()
    })
    return {
      ...toRefs(state),
      handleStartMusic,
      handleClickPlay,
      ...toRefs(playerState),
      songList,
      currentSong: computed(() => player.currentSong)
    }
  }
})
</script>

<style lang="scss" scoped>
.playlist-detail {
  padding: 40px;
  .active{
    background-color: #eaeffd;
    color: #335eea;
  }
}
</style>