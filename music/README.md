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
原理：动态创建一个script标签【script标签没有同源的限制】，把script标签的src指向请求真实服务端地址，这个服务端地址与我们ajax的服务端地址的不同：这个服务端地址的参数callback(a)，服务端解析url带有callback=a的参数，返回的数据里会调用a去包裹一个方法，前端执行a这个方法【前端是没有a这个方法的】，发送请求之前，需要在window里注册a方法，在服务端返回a这个方法执行的时候，在这个a方法了就可以获取这段数据了。
jsonp(url, opts, fn)
url:服务端请求的地址
opts:[param]:约定的字段
opts:[timeout]:超时的时间默认1min
opts:[perfix]:
opts:[name]:
fn:callback
引入jsonp=>封装jsonp方法jsonp(url, data, option)【将链接中固定的参数拼接好】=>调用封装的方法

#跨域问题【待解决】【已解决】【开发所用】
/music/config/index.js
'/api': {
    target: 'http://www.weinihaigou.com',
    changeOrigin: true,
    pathRewrite: {
      '^/api': ''
    }
}

#轮播
作者自己开发的轮播组件：https://github.com/ustbhuangyi/better-scroll
使用插槽slot标签=>封装获取className方法=>运用$ref获取dom并为其添加固定style=>使用组件better-scroll=>监听窗口变化bug

#选项卡切换的active效果【待解决】
当 <router-link> 对应的路由匹配成功，将自动设置 class 属性值 .router-link-active，所以你只需要在自己的STYLE文件中，写了.router-link-active的样式，列表选中后，系统就会自动去绑定这个样式

#stylus的使用

#slot标签  插槽

#export与export default的区别
1:export和export default都可用于导出常量、函数、文件、模块等
2:你可以在其他文件或模块中通过import+（常量|函数文件|模块）名的方式将其导入，以便能够对其使用
3:在一个文件或模块中，export、import可以有多个，export default只有一个
4:通过export导入，在导入时要加 {} export default不需要
5:使用export default命令，为模块指定默认输出，不需要知道所需加载模块的变量名

#promise
new Promise( function(resolve, reject) {...} /* executor */  );

#v-html具有转译的作用

#vue提供的修饰符
@touchmove.stop.prevent="onShortcutTouchMove"防止冒泡/浏览器的原生滚动

#forEach
list.forEach((item, index) => {
	item
	index
})

#子路由配置以及转动画实现
创建子路由组件并引入-》设置/router/index.js路由-》在v-for子组件通过this.$emit('派发事件名称','参数i')派发事件(item)给父组件／在v-for创建点击事件(item)-》接受子组件派发的事件并触发事件(实例)／demo(实例){this.$router.push({path:`/实例/${实例.id}`})}

#transition
vue过渡效果

#vuex
/src/main.js 					//引入vuex
/src/store/index.js 			//配置state、mutations、getters、actions等
/src/store/state.js 			//export default
/src/store/mutation-types.js 	//export
/src/store/mutations.js 		//export default
/src/store/getters.js 			//export
/src/store/actions.js 			//export

主组件:通过mutations将需要传输的变量传输给vuex的state
import {mapMutations} from 'vuex'
methods: {
	...mapMutations({
		setSanger: 'SET_SANGER'		//mutations-types.js
	})
}
跳转的组件：通过getters将state映射到相应的组件中
import {mapGetters} from 'vuex'
computed: {
	...mapGetters([
		'singer'	//state
	])
},
created() {
	console.log(this.singer)
}


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
3:懒加载
第三方组件vue-lazyload
命令：v-lazy
4:代码书写规范
【封装方法】多处用到的封装起来再调用此方法export、export default
5:better-scroll的用法
在页面中数据重新渲染完成之前或bom变化场景的，需要调用better-scroll中的refresh方法
6:fastclick与better-scroll冲突导致点击无效时class="needsclick"
7：loading加载
v-show="!descList.length"
```
















