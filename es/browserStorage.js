export var session = {
  set: function set(key, val) {
    if (val) {
      sessionStorage.setItem(key, JSON.stringify(val));
    }
  },
  get: function get(key) {
    if (key) {
      var val = sessionStorage.getItem(key);
      return JSON.parse(val);
    }

    return '';
  }
};
export var storage = {
  set: function set(key, val) {
    if (val) {
      localStorage.setItem(key, JSON.stringify(val));
    }
  },
  get: function get(key) {
    if (key) {
      var val = localStorage.getItem(key);
      return JSON.parse(val);
    }

    return '';
  }
};