<template>
	<div class="singer">
		<Listview @select="selectSinger" :data="singers"></Listview>
		<router-view></router-view>
	</div>
</template>
<script type="text/javascript">
	import {getSingerList} from '../../common/api/sunger'
	import {ERR_OK} from '../../common/api/config'
	import Singer from '../../common/js/singer'
	import Listview from '../../base/listview/listview'
	import {mapMutations} from 'vuex'

	const HOT_NAME = '热门'
	const HOT_SINGER_LIN = 10

	export default{
		data(){
			return {
				singers: []
			}
		},
		created(){
			this._getSingerList()
		},
		methods: {
			selectSinger(singer) {
				this.$router.push({
					path: `/singer/${singer.id}`
				})
				this.setSinger(singer)
			},
			// api
			_getSingerList(){
				getSingerList().then((res) => {
					if(res.code === ERR_OK){
						var f_data = this._normalizeSinger(res.data.list)
						this.singers = f_data
						console.log(this.singers)
					}
				})
			},
			// 规范化singers数据【按照页面的布局】
			_normalizeSinger(list) {
				// 创建自己想要的对象，然后将需要的数据填充进去
				// 热门数据
				let map = {
					hot: {
						title: HOT_NAME,
						items: []
					}
				}
				// 参数list
				list.forEach((item, index) => {
					// 热门的歌手	前十名
					if(index < HOT_SINGER_LIN){
						map.hot.items.push(new Singer({
							id: item.Fsinger_mid,
							name: item.Fsinger_name
						}))
					}
					// 将对象里的排序字母赋值给key
					const key = item.Findex
					// 创建一个map[key]对象,当map[key]没有key的时候
					if(!map[key]){
						map[key] = {
							title: key,
							items: []
						}
					}
					// 将排序字母放到map[key]对象里
					map[key].items.push(new Singer({
						id: item.Fsinger_mid,
						name: item.Fsinger_name
					}))
				})
				// 为了得到有序列表，需要处理map
				let hot = []	//热门
				let ret = []	//非热门
				for(let key in map){
					let val = map[key]
					if(val.title.match(/[a-zA-Z]/)){
						ret.push(val)
					}else if(val.title === HOT_NAME){
						hot.push(val)
					}
				}
				// 排序不是热门的歌手
				ret.sort((a, b) => {
					return a.title.charCodeAt(0) - b.title.charCodeAt(0)
				})
				return hot.concat(ret)
			},
			...mapMutations({
				setSinger: 'SET_SINGER'
			})

		},
		components: {
			Listview
		}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	.singer
		position: fixed
		top: 88px
		bottom: 0
		width: 100%
</style>