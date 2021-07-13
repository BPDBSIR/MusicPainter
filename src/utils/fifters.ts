/**
 * 格式化播放时间
 * @param interval
 */
export function formatPlayTime(interval: number): string {
    interval = interval | 0; // 向下取整
    const minute = ((interval / 60) | 0).toString().padStart(2, '0');
    const second = (interval % 60).toString().padStart(2, '0');
    return `${minute}:${second}`;
}