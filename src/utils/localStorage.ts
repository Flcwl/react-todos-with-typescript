/*
 * @Description: localStorage Utils
 * @Author: Flcwl
 * @LastEditors: flcwl
 * @Date: 2019-04-07 17:49:05
 * @LastEditTime: 2019-06-25 15:35:36
 * @ref: https://gist.github.com/ali-master/b36c1fb5e0673107d090cd8a2d6a1f1e
 */

export const localStore = {
  checkIsSupport() {
    try {
      /* tslint:disable:no-string-literal */
      return "localStorage" in window && window["localStorage"] !== null;
    } catch(e) {
      return false;
    }
  },

  get(key :string) :any {
    try {
      return window.localStorage.getItem(key);
    } catch(e) {
      return null;
    }
  },

  set(key :string, value: string | number | object) :boolean {
    if (this.checkIsSupport()) {
      // const isObject = typeof value === 'object' && object !== null
      try {
        if (typeof value === 'string') {
          window.localStorage.setItem(key, value);
        } else {
          window.localStorage.setItem(key, JSON.stringify(value));
        }
        return true;
      } catch(e) {
        throw new TypeError('Exceeded Storage Quota!');
      }
    } else {
      throw new TypeError("No support for localStorage.");
    }
  }
};
