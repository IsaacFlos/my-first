<template>
	<div class="recommend">
		<div class="recommend-content">
			<div v-if="recommends.length" class="slider-wrapper">
				<Slider>
					<div v-for="i in recommends">
						<a :href="i.linkUrl"><img :src="i.picUrl"></a>
					</div>
				</Slider>
			</div>
			<div class="recommend-list">
				<h1 class="list-title">热门歌曲推荐</h1>
				<ul></ul>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import Slider from 'base/slider/slider'
	import {getRecommend, getDiscList} from '../../common/api/recommend'
	import {ERR_OK} from '../../common/api/config'
	export default{
		data(){
			return {
				recommends: []
			}
		},
		components: {
			Slider
		},
		created(){
			this._getRecommend()
			// this._getDiscList()
		},
		methods: {
			// api
			_getRecommend(){
				// promise中的then
				getRecommend().then((res) => {
					if(res.code === ERR_OK){
						// console.log(res.data.slider)
						this.recommends = res.data.slider
					}
				})
			},
			// _getDiscList(){
			// 	getDiscList().then((res) => {
			// 		if(res.code === ERR_OK){
			// 			console.log(res)
			// 		}
			// 	})
			// }
		}
	}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
	@import '../../common/stylus/variable'
	.recommend
		width: 100%
		overflow: hidden
		.recommend-list
			text-align: center
			margin-top: 10px
			.list-title
				font-size: $font-size-medium-x
				color: $color-sub-theme
</style>