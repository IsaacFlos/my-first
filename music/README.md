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
使用插槽slot标签=>封装获取className方法=>运用$ref获取dom并为其添加固定style=>使用组件better-scroll=>监听窗口变化bug

#选项卡切换的active效果【待解决】
当 <router-link> 对应的路由匹配成功，将自动设置 class 属性值 .router-link-active，所以你只需要在自己的STYLE文件中，写了.router-link-active的样式，列表选中后，系统就会自动去绑定这个样式

#stylus的使用

#跨域问题【待解决】【已解决】【开发所用】

#slot标签  插槽

#export与export default的区别
1:export和export default都可用于导出常量、函数、文件、模块等
2:你可以在其他文件或模块中通过import+（常量|函数文件|模块）名的方式将其导入，以便能够对其使用
3:在一个文件或模块中，export、import可以有多个，export default只有一个
4:通过export导入，在导入时要加 {} export default不需要
5:使用export default命令，为模块指定默认输出，不需要知道所需加载模块的变量名

#promise
new Promise( function(resolve, reject) {...} /* executor */  );

#优化
1:选项卡
每次切换选项卡时都会重新请求一次，在router-view标签外加一个keep-alive标签，把他们的dom都缓存到内存中
<keep-alive>
	<router-view></router-view>
</keep-alive>
2:计时器
当我们代码中含有计时器的时候，在组件销毁的时候需要清楚计时器
destroyed(){
	clearTimeout(this.timer)
}
```
















