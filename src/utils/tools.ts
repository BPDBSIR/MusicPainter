/**
 * 简易深克隆
 * @param data 被克隆的值
 */
export const deepClone = <T>(data: T): T => {
  return JSON.parse(JSON.stringify(data));
};