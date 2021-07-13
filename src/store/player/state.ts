import {ISong} from "@/types"

/**
 * 播放状态
 */
export interface IPlayerState {
  /* 是否正在播放 */
  playingStatus: boolean,
  /* 当前进度 */
  currentIndex: number,
  /* 当前歌曲 */
  currentSong: ISong,
  /* 播放列表 */
  playList: ISong[],
  /* 显示播放列表 */
  showPlayList: boolean
}

/**
 * 播放状态默认实现
 */
const state: IPlayerState = {
  playingStatus: false,
  currentIndex: 0,
  currentSong: {
    id: 11,
    name: "123",
    dt: 0,
    al: {},
    ar: [],
  },

  playList: [],
  showPlayList: false
}

export default state
