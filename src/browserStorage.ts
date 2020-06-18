/**
 * session的get， set方法
 */
export const session = {
  set: (key: string, val: any) => {
    if (val) {
      sessionStorage.setItem(key, JSON.stringify(val));
    }
  },
  get: (key: string) => {
    if (key) {
      const val = sessionStorage.getItem(key);
      return JSON.parse(val);
    }
    return "";
  },
};

/**
 * localStorage的get，set方法
 */
export const storage = {
  set: (key: string, val: any) => {
    if (val) {
      localStorage.setItem(key, JSON.stringify(val));
    }
  },
  get: (key: string) => {
    if (key) {
      const val = localStorage.getItem(key);
      return JSON.parse(val);
    }
    return "";
  },
};
