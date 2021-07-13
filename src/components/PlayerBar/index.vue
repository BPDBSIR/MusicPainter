<template>
  <div class="player-bar">
    <div class="content">
      <audio ref="audioElement" :autoplay="true" :src="songUrl" @ended="handlePlayEnded"/>
      <img class="cover" :src="picUrl" alt="">
      <button style="display: none" @click="currentIndex = Math.random();playingStatus = !playingStatus">点我回调</button>
      <button style="display: none" @click="togglePlayStatus(!playingStatus)">切换播放状态</button>
      <div class="desc">
        <p class="name">{{ songName }}</p>
        <p class="writer">{{ singer }}</p>
      </div>
      <div class="controller">
        <i @click="handlePlayPrevSong" class="iconfont icon-skip-back-mini-fill"></i>
        <i v-if="playingStatus" @click="togglePlayStatus(false)" class="iconfont icon-pause-mini-fill"></i>
        <i v-else @click="togglePlayStatus(true)" class="iconfont icon-play-mini-fill"></i>
        <i @click="handlePlayNextSong" class="iconfont icon-skip-forward-mini-fill"></i>
      </div>
      <div class="menu">
        <i style="display: none" class="iconfont icon-play-list-fill"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref, toRefs, watch} from "vue";
import {useStore} from "vuex";
import {requestSongUrl} from "@/api/song";
import {SET_CURRENT_INDEX, SET_CURRENT_SONG, SET_PLAYING_STATUS} from "store/player/actionTypes";

export default defineComponent({
  name: "PlayerBar",
  components: {
  },
  setup() {
    const store = useStore()

    /* 获取播放全局状态 */
    const state = store.state.Player

    /* DOM */
    const audioElement = ref<HTMLAudioElement | null>(null)


    /* 播放地址 Eg: http://m7.music.126.net/20210606101141/ff9b8a100e6d61cd5d63a1934806cd8e/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/3398327900/9e69/561e/c7bb/41f095ef3e8ba2a4b48eecdbdb875868.mp3 */
    const songUrl = ref<string>("")

    /* 歌曲图片 Eg: https://p1.music.126.net/vDXcwE1NqRhoU-genmWzZg==/109951165651193628.jpg*/
    const picUrl = ref<string>("https://p2.music.126.net/RtN6VzXNzOPAOhCiQSfjkQ==/109951163754607895.jpg?param=512y512")

    /* 歌曲名称 */
    const songName = ref<string>('未播放歌曲')

    /* 歌手 */
    const singer = ref<string>('')

    /* 以前的歌曲ID */
    const preSongId = ref<string>('');

    onMounted(() => {
    })
    /* 获取歌曲Url */
    const getSongUrl = async (id: number) => {
      const {data} = await requestSongUrl(id)
      songUrl.value = data[0].url
    }

    /* 改变索引 */
    const changeCurrentIndex = (index: number): void => {
      const ci: number = state.currentIndex
      if (index === ci) return
      store.commit(SET_CURRENT_INDEX, index)
    }

    /* 上一首 */
    const handlePlayPrevSong = (): void => {
      let index: number = state.currentIndex - 1
      if (index < 0) {
        index = state.playList.length - 1
      }
      changeCurrentIndex(index)
    }

    /* 下一首 */
    const handlePlayNextSong = (): void => {
      let index: number = state.currentIndex + 1
      if (index >= state.playList.length) {
        index = 0
      }
      changeCurrentIndex(index)
    }

    /* 歌曲播放完成回调 */
    const handlePlayEnded = (): void => {
      handlePlayNextSong()
    }

    /**
     * 切换播放状态
     */
    const togglePlayStatus = (status: boolean): void => {
      /* 设置播放状态 */
      store.commit(SET_PLAYING_STATUS, status);
    }


    watch(
        /* 监听对象为: 当前索引、播放列表 */
        () => [state.currentIndex, state.playList],
        ([curIndex]) => {
          /* 播放列表如果为0返回 true || 播放列表索引元素为0返回true || 当前索引 === -1返回true || 播放列表索引内id === 旧的Id返回true */
          if (!state.playList.length || !state.playList[curIndex] || curIndex === -1 || state.playList[curIndex].id === preSongId.value)
            return;
          /* 当前歌曲 */
          const currentSong = state.playList[curIndex];
          /* 设置当前歌曲 */
          store.commit(SET_CURRENT_SONG, state.playList[state.currentIndex]);
          getSongUrl(currentSong.id)
          // songUrl.value = url
          picUrl.value = currentSong.al.picUrl
          songName.value = currentSong.name
          singer.value = currentSong.ar[0].name
          /* 更新歌曲Id */
          preSongId.value = currentSong.id;
          /* 改变播放状态 */
          store.commit(SET_PLAYING_STATUS, true);
          togglePlayStatus(true);
          console.log("歌曲地址: ", songUrl.value)
        }, {immediate: true})
    /**
     * 监听播放状态
     */
    watch(() => state.playingStatus, (status, prevStatus) => {
      const audioDom = audioElement.value as HTMLAudioElement
      status ? audioDom.play() : audioDom.pause()
    })
    return {
      ...toRefs(state),
      audioElement,
      picUrl,
      songUrl,
      songName,
      singer,
      handlePlayEnded,
      togglePlayStatus,
      handlePlayPrevSong,
      handlePlayNextSong
    }
  }
})
</script>

<style lang="scss" scoped>
.player-bar {
  position: fixed;
  bottom: 0;
  height: auto;
  background-color: #FFFFFF;
  border-top: 2px solid rgba(215, 215, 219, 0.56);
  width: 100%;
  padding: 10px 0;

  .content {
    width: 82%;
    margin: auto;
    display: flex;
    align-items: center;
    position: relative;

    .cover {
      width: 46px;
      height: 46px;
      border-radius: 10px;
    }

    .desc {
      margin-left: 20px;

      .name {
        font-family: DIN;
        font-size: 16px;
        opacity: 0.8;
      }

      .writer {
        font-family: DIN;
        font-size: 12px;
        opacity: .58;
        color: black;
      }
    }


    i {
      font-size: 26px;
      margin-left: 8px;
      margin-right: 8px;

      &:hover {
        color: #409eff;
      }
    }

    .controller {
      position: absolute;
      left: 50%;
    }

    .menu {
      position: absolute;
      right: 0;
    }
  }

}
</style>