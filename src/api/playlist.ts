import {GET} from '@/utils/request'

/**
 * 请求歌单详情数据
 * @param id
 */
export const requestPlaylistDetail = (id: string) => {
  return GET("/playlist/detail", {id})
}


/**
 * 热门歌单分类
 */
export const requestHotPlayListCategory = () => {
  return GET("/playlist/hot")
}

/**
 * 全部歌单分类
 */
export const requestAllPlayListCategory = () => {
  return GET("/playlist/catlist")
}

/**
 * 获取网友精选歌单
 *
 * 可选参数:
 * order: new | hot 默认为hot
 * cat: 古风、民谣、欧美
 * limit: 歌单数量(默认为50)
 * offset: 偏移数量 用于分页 如 :( 评论页数 -1)*50, 其中 50 为 limit 的值
 */
export const requestPlayList = (order?: string, cat?: string, limit?: number, offset?: number) => {
  return GET("/top/playlist", {
    order, cat, limit, offset
  })
}