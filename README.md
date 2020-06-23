# @paas/utils

抽离所有项目中的utils，提供公共方法

## Install

通过命令npm config list 检查是否添加了 registry = "http://npm.***.com/"
如果没有，可以添加对应的仓库 npm config set registry http://npm.***.com/


```bash
$ npm install @paas/utils --save-dev

```

## example

```js
import { isEmptyString } from '@paas/utils';

const Home = () => {
  	if(isEmptyString("")){
      console.log('Yes');
    }
}

export default Home

```



## Development and debugging
-  npm install
-  npm run test



## LICENSE

MIT
