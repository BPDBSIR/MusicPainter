import {IAlbumData, IPlayData, IRankData, ISingerData, IUnknowObject} from "@/types";


export interface IBannerData extends IUnknowObject {
  imageUrl: string,
  targetId: number
}
/*
* 数据规范
* */
export interface IState {
  bannerList: IBannerData[],
  hotPlayList: IPlayData[],
  albumList: IAlbumData[],
  singerList: ISingerData[],
  rankList: IRankData[]
}