import qs from 'query-string';
/**
 * 防重提交就是防抖的实例
 * 防抖是让重复事件的处理函数只在最后一次发生时执行
 * @param fun
 * @param timeout
 */
export const debounce = (fun: Function | void, timeout = 200) => {
  let timer: NodeJS.Timeout | null;
  return (e: any) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fun && fun(e);
    }, timeout);
  };
};

/**
 * 去掉字符串前后的空格
 */
export const trimSpace = (str: string) => {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/gm, "");
};

/**
 *  location获取params参数
 *  遵循qs的url规则
 */
export const getParamsValue =  (urlString: string, name: string) => {
    if (urlString) {
      const params = qs.parseUrl(urlString);
      return params.query ? params.query[name] : '';
    }
    return '';
};

/**
 * 转为5位小数，防止精度丢失 
 * @param number 
 * @param scale 
 */
export const toRound = (number: string, scale:string = '5') => {
  const num = parseFloat(number) * 10 ** parseInt(scale, 10);
  return Math.round(num) / 10 ** parseInt(scale, 10);
};


/**
 *  验证字符串的长度大于等于最小的，并且小于等于最大的，允许为0
 * @param str 
 * @param maxLength 
 * @param minLength 
 */
export const validateLength = (str, maxLength, minLength = 0) => {
  const { length } = str.trim();
  return length >= minLength && length <= maxLength;
};


/**
 * 判断是否不存在
 * @param str 
 */
export const isEmptyString = (str: any) =>
  str === null || str === undefined || str === '';





