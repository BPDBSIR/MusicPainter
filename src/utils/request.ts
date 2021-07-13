import axios, {AxiosError, AxiosInstance, AxiosResponse, AxiosRequestConfig} from "axios";
import {IUnknowObject} from '@/types'

interface IResponseData extends IUnknowObject {
  code: number;
  total?: number;
}


const errorHandle = (status: number): void => {
  // HTTP状态码判断
  if (status >= 500) {
    console.log("系统开小差了, 请联系技术管理员或稍后重试")
  } else {
    console.log("网络请求失败, 请刷新重试")
  }
}


const BASE_URL = "http://127.0.0.1:3000"
const TIME_OUT = 1000 * 6

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
})

axiosInstance.interceptors.response.use((res: AxiosResponse) => {
  if (res.status == 200) {
    const code = res.data.code
    if (code === 200) {
      return Promise.resolve(res.data)
    }
  }
  return Promise.reject(res.data)
}, (error: AxiosError) => {
  if (error && error.response) {
    // 请求已发出，但是不在2xx的范围
    errorHandle(error.response.status);
    return Promise.reject(error.response);
  }
  console.log("网络请求失败, 请刷新重试");
  return Promise.reject(error);
})


const GET = (url: string, params?: any): Promise<IResponseData> => axiosInstance.get(url, {params});
const POST = (url: string, params: any, config?: AxiosRequestConfig): Promise<IResponseData> => axiosInstance.post(url, params, config);

export {
  GET,
  POST
};

export default axiosInstance;
