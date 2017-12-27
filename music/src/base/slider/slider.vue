<template>
	<div class="slider" ref="slider">
		<div class="slider-group" ref="sliderGroup">
			<!-- 插槽 -->
			<slot></slot>
		</div>
		<div class="dots">
			<span class="dot" v-for="(i,index) in dots" :class="{active: currentPageIndex === index}"></span>
		</div>
	</div>
</template>

<script type="text/javascript">
	// 引入better-scroll插件
	import BScroll from 'better-scroll'
	// 引入处理className的函数
	import {addClass} from '../../common/js/dom'
	export default{
		data(){
			return {
				dots: [],
				currentPageIndex: 0
			}
		},
		// 通过porps向子组件传递
		props: {
			// 是否轮播
			loop: {
				type: Boolean,
				default: true
			},
			// 自动轮播
			autoPlay: {
				type: Boolean ,
				default: true
			},
			// 自动轮播间隔
			interval: {
				type: Number,
				default: 4000
			}
		},
		mounted(){
			// 初始化缓冲时间【通常页面刷新17秒一次】
			setTimeout(() => {
				this._setSliderWidth()
				this._initDots()
				this._initSlider()

				if(this.autoPlay){
					this._play()
				}
			}, 20)

			// 监听机型变化
			window.addEventListener('resize', () => {
				if(!this.slider){
					return
				}
				this._setSliderWidth(true)
				// 当变化是重新计算
				this.slider.refresh()
			})
		},
		methods: {
			_setSliderWidth(isResize){
				// 获取dom元素用$ref
				this.children = this.$refs.sliderGroup.children

				// sliderGroup的宽度
				let width = 0
				// 最外层容器的宽度【选择器slider】
				let sliderWidth = this.$refs.slider.clientWidth
				// 循环slider包裹的元素
				for(let i=0;i<this.children.length;i++){
					// child是一个数组
					let child = this.children[i]
					// 所以在addClass的函数中首先拆分开，再组合到一起
					addClass(child, 'slider-item')

					// 每个子元素的宽度都等于slider包裹容器的宽度
					child.style.width = sliderWidth + 'px'
					// sliderGroup的宽度是每个子元素宽的和
					width+=sliderWidth
				}

				// loop为true的时候，我们需要克隆
				if(this.loop && !isResize){
					width += 2 * sliderWidth
				}
				this.$refs.sliderGroup.style.width = width + 'px'
			},
			_initDots(){
				this.dots = new Array(this.children.length)
			},
			// 初始化slider
			_initSlider(){
				this.slider = new BScroll(this.$refs.slider, {
					scrollX: true,		//可以横向滚动
					scrollY: false,		//禁止纵向滚动
					momentum: false,	//惯性
					snap: true,
					snapLoop: this.loop,	//循环
					snapThreshold: 0.3,		
					snapSpeed: 400
				})

				// 将currentPageIndex绑定事件
				this.slider.on('scrollEnd', () => {
					let pageIndex = this.slider.getCurrentPage().pageX
					if(this.loop){
						pageIndex -= 1
					}
					this.currentPageIndex = pageIndex

					if(this.autoPlay){
						clearTimeout(this.timer)
						this._play()
					}
				})
			},
			// 自动播放
			_play(){
				let pageIndex = this.currentPageIndex + 1
				if(this.loop){
					pageIndex += 1
				}
				this.timer = setTimeout(() => {
					// goToPage是batter-scroll组件的函数
					// goToPage('横向轮播'，'纵向lunbo'，'间隔')
					this.slider.goToPage(pageIndex, 0, 400)
				},this.interval)
			}
		},
		// ESO优化：当我们代码中含有计时器的时候，在组件销毁的时候需要清楚计时器
		destroyed(){
			clearTimeout(this.timer)
		}
	}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
	.slider
		min-height: 1px
		position: relative
		.slider-group
			overflow: hidden
			white-space: nowrap
			.slider-item
				float: left
				box-sizing: border-box
				overflow: hidden
				text-align: center
				a
					display: block
					width: 100%
		.dots
			position: absolute
			right: 40%
			bottom: 12px
			text-align: center
			font-size: 0
			.dot
				border-radius: 8px
				width: 8px
				height: 8px
				float: left
				margin-left: 5px
				background-color: #ddd
				&.active
					width: 15px
					border-radius: 8px
					background-color: red


</style>
