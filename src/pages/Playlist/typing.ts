import {ICategory, IRankData} from "@/types"


export interface AllCategory {
  all: {
    name: string,
    type: number
  },
  categories: string[],
  sub: Tag[]
}

interface Tag {
  category: number,
  hot: boolean,
  name: string,
  type: number
}

export interface IParamPlayList{
  order: string,
  cat: string,
  limit: number,
  offset: number
}
export interface IState {
  hotPlayListCategory: ICategory[],
  allPlayListCategory: AllCategory[],
  playList: IRankData[],
  cat: string
  limit: number,
  offset: number,
  order: string
}