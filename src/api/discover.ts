import {GET} from "@/utils/request";

export enum BannerTypeEnum {
  PC = 0,/* PC */
  ANDROID = 1,/* 安卓 */
  IPHONE = 2,/* 苹果 */
  IPAD = 3,/* 平板 */
}

/**
 * 获取Banner
 * @param type Banner类型
 */
export const requestBanner = (type: BannerTypeEnum) => {
  return GET("/banner", {type})
}

/**
 * 获取最热歌单
 * @param limit 数量
 */
export const requestHotPlayList = (limit: number) => {
  return GET("/personalized", {limit})
}