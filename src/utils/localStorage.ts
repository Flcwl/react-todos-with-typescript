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
