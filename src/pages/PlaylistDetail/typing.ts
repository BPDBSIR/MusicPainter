import {IPlayData, IRankData,ISong} from "@/types"

/**
 * 请求参数
 */
export interface IQueryParams {
  id: number,
  limit: number,
  offset: number
}

export interface IState {
  queryParam: IQueryParams,
  detailData: IRankData;
  relatedPlaylist: IPlayData[];
  playData: ISong[]
}