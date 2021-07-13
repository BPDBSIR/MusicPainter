import {GET} from "utils/request";

/**
 * 获取排行榜
 */
export const requestRankList = () => {
  return GET("/toplist/detail")
}