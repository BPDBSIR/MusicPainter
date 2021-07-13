import {ISong} from "@/types"
import {useStore} from "vuex";
import {SET_CURRENT_INDEX, SET_PLAY_LIST, DELETE_SONG, SET_CURRENT_SONG} from "store//player/actionTypes"
import {deepClone} from "@/utils/tools"


export const handleStartMusic = (index: number, playList: ISong[]): void => {
  // const store = useStore()
  console.log("index => ", index, "playList => ", playList)
  // store.commit(SET_CURRENT_INDEX,index)
  /*store.commit(SET_CURRENT_INDEX,index)
  store.commit(SET_PLAY_LIST,playList)*/
}

const usePlay = () => {


  const store = useStore();


  /**
   * 播放整个列表
   * @param songList
   */
  /*  const handleClickPlayAll = (songList: ISong[]): void => {
      store.commit(SET_PLAY_LIST, songList)
      store.commit(SET_CURRENT_INDEX, 0)
    }*/
  /**
   * 播放指定歌曲
   */
  /**
   * 播放指定歌曲
   * @param e
   * @param playList
   */
  /*const handleClickPlay = (e: MouseEvent, playList?: ISong[]): void => {
    const target = e.target as HTMLElement;
    const index = target.dataset.playIndex;
    if (index !== undefined) {
      playList && store.commit(SET_PLAY_LIST, playList);
      store.commit(SET_CURRENT_INDEX, Number(index));
    }
  }*/

  const handleClickPlay = (index: number, playList?: ISong[]): void => {
    if (index !== undefined) {
      playList && store.commit(SET_PLAY_LIST, deepClone(playList));
      store.commit(SET_CURRENT_INDEX, Number(index));
    }
  };

  const handleStartMusic = (index: number, playList: ISong[]): void => {
    // const store = useStore()
    console.log("index => ", index, "playList => ", playList)
    // store.commit(SET_CURRENT_INDEX,index)
    store.commit(SET_CURRENT_INDEX, index)
    store.commit(SET_PLAY_LIST, playList)
  }
  return {
    handleStartMusic,
    handleClickPlay
  }
}
export default usePlay