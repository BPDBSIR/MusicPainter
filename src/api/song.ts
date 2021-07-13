import {GET} from "utils/request";

/**
 * 获取歌曲播放地址
 * @param id
 */
export const requestSongUrl = (id: number) => {
  return GET("/song/url", {id})
}

/**
 * 根据歌曲ID获取详情
 * @param ids
 */
export const requestSongDetail = (ids: string) => {
  return GET("/song/detail", {ids})
}