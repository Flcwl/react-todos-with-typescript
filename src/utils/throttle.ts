/**
 * 节流函数，在 wait 秒内最多执行 fn 一次的函数。
 * @param {function}  fn 传入函数
 * @param {number}  wait 时间窗长
 * @return {function} 返回节流后函数
 */
export function throttle(fn: () => void, wait: number = 0): () => void {
  let timerId: any = null;
  let previous = 0;

  function clearExistingTimeout() {
    if(timerId) {
      clearTimeout(timerId);
      timerId = null;
    }
  }

  return () => {
    const now = Date.now();
    if(!previous) {
      // 第一次执行回调，不立即执行
      previous = now;
    }
    // console.log(now - previous);

    const delta = wait - (now - previous);
    // 超过一个时间窗口 or 系统时间被改动
    if (delta <= 0 || delta > wait) {
      clearExistingTimeout();
      previous = now;
      fn();
    // 未超过时间窗口，则定时器执行最新fn
    } else {
      clearExistingTimeout();
      timerId = setTimeout(() => {
        fn();
        clearExistingTimeout();
        previous = now + delta;
      }, delta);
    }
  };
}
