# music

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 课程概述：

``` bash
#做什么？
开发一个媲美原声的移动端音乐APP

#哪些功能？
歌手页面、歌手详情页、播放器内核搜索页面、歌曲列表页面等

#技术栈？
业务层：	推荐页面、歌手页面、歌手详情页、播放器页面、歌单页面、排行榜页面、榜单列表页、搜索页面、歌曲列表页、用户中心页

		构架支撑：基础组件库、状态管理vuex、路由vue-router、服务端通信axios&jsonp、第三方插件
支撑层：		MVVM框架：Vue.js[2.x]
		工具支撑：脚手架工具vue-cli、自动化构建工具webpack、代码检查工具eslint（忽略）
```

# 知识点：

```bash
#jsonp
引入jsonp=>封装jsonp方法=>调用封装的方法

#轮播
作者自己开发的轮播组件：https://github.com/ustbhuangyi/better-scroll
使用插槽slot标签=>封装获取className方法=>运用$ref获取dom并为其添加固定style=>使用组件better-scroll
```
















