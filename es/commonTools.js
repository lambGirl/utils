import { parse } from 'query-string';
export var debounce = function debounce(fun, timeout) {
  if (timeout === void 0) {
    timeout = 200;
  }

  var timer;
  return function (e) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      fun && fun(e);
    }, timeout);
  };
};
export var trimSpace = function trimSpace(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/gm, '');
};
export var getParamsValue = function getParamsValue(urlString, name) {
  if (urlString) {
    var params = parse(urlString);
    return params.query ? params.query[name] : '';
  }

  return '';
};
export var toRound = function toRound(number, scale) {
  if (scale === void 0) {
    scale = '5';
  }

  var num = parseFloat(number) * 10 * parseInt(scale, 10);
  return Math.round(num) / 10 * parseInt(scale, 10);
};
export var validateLength = function validateLength(str, maxLength, minLength) {
  if (minLength === void 0) {
    minLength = 0;
  }

  var length = str.trim().length;
  return length >= minLength && length <= maxLength;
};
export var isEmptyString = function isEmptyString(str) {
  return str === null || str === undefined || str === '';
};