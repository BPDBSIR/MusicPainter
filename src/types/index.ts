import {requestAllPlayListCategory} from "@/api/playlist";

export interface IUnknowObject {
  [key: string]: any;
}

export type SizeType = 'small' | 'default' | 'large';

/* 作者 */
export interface ICreator extends IUnknowObject {
  nickname: string,
  avatarUrl: string,
  signature: string
}

/* 歌曲ID */
export interface ITrackId extends IUnknowObject {
  id: number
}

/* 歌曲列表 */
export interface ISong extends IUnknowObject {
  /* Id */
  id: number;
  /* 名称 */
  name: string;
  dt: number;
  /* 专辑 */
  al: Object;
  /* 艺术家 */
  ar: Array<{ id: number; name: string; }>;
}

/* 歌手 */
export interface ISingerData extends IUnknowObject {
  id: number;
  name: string;
  img1v1Url: string;
  picUrl: string;
  alias: Array<string | undefined>;
}

/* 歌单 */
export interface IPlayData extends IUnknowObject {
  id: number;
  name: string;
  copywriter?: string;
  creator: ICreator;
  coverImgUrl: string;
  tags: string[],
  playCount?: number,
  tracks: ISong[],
  picUrl: string,
  description: string,
  trackIds: Array<ITrackId>/*TrackId[]一样的效果*/
}

/* 专辑 */
export interface IAlbumData extends IUnknowObject {
  id: number;
  name: string;
  artists?: ISingerData[];
  picUrl: string;
}

/* 排行榜 */
export interface IRankData extends IPlayData {
  ToplistType?: string;
  updateFrequency: string;
  subscribedCount: number;
  shareCount: number;
  commentCount: number;
}

/* 用户 */
export interface IUser extends IUnknowObject {
  avatarUrl: string;
  nickname: string;
}

/* 歌单分类 */
export interface ICategory extends IUnknowObject{
  name: string,
  id: number,
  type: number,
  hot: boolean,
  usedCount: number,
  category: number,
  createTime: number
}