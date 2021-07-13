import {
  DELETE_SONG,
  SET_CURRENT_INDEX,
  SET_CURRENT_SONG,
  SET_PLAY_LIST,
  SET_PLAYING_STATUS,
  SET_SHOW_PLAY_LIST
} from './actionTypes';
import {ISong} from '@/types';
import {IPlayerState} from './state';

export default {
  /* 设置播放状态 */
  [SET_PLAYING_STATUS](state: IPlayerState, payload: boolean) {
    state.playingStatus = payload;
  },
  /* 设置当前索引 */
  [SET_CURRENT_INDEX](state: IPlayerState, payload: number) {
    state.currentIndex = Number(payload);
  },
  /* 设置当前歌曲 */
  [SET_CURRENT_SONG](state: IPlayerState, payload: ISong) {
    state.currentSong = payload;
  },
  /* 设置播放列表 */
  [SET_PLAY_LIST](state: IPlayerState, payload: ISong[]) {
    state.playList = payload;
  },
  /* 设置是否显示播放列表 */
  [SET_SHOW_PLAY_LIST](state: IPlayerState, payload: boolean) {
    state.showPlayList = payload;
  },
  /* 删除歌曲*/
  [DELETE_SONG](state: IPlayerState, index: number) {
    /* 取出播放列表以及当前索引 */
    const {playList, currentIndex} = state;
    /* 对数据进行过(删除匹配成功的元素) */
    state.playList = playList.filter((item, idx) => index !== idx);
    /* 判断索引是否小于当前索引 */
    if (index < currentIndex) {
      /* 当前索引自减 */
      state.currentIndex--;
    }
  }
};
