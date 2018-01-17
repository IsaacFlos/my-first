<template>
	<transition name="slide">
		<Musiclist :title="title" :bg-image="bgImage" :songs="songs"></Musiclist>
	</transition>
</template>
<script type="text/javascript">
	import {mapGetters} from 'vuex'
	import {getSingerDetail} from '../../common/api/sunger'
	import {ERR_OK} from '../../common/api/config'
	import {createSong} from '../../common/js/song'
	import Musiclist from '../music-list/music-list'
	export default {
		data() {
			return {
				songs: []
			}
		},
		computed: {
			title() {
				return this.singer.name
			},
			bgImage() {
				return this.singer.avatar
			},
			...mapGetters([
				'singer'
			])
		},
		created() {
			this._getDetail()
			console.log(this.singer)
		},
		methods: {
			_getDetail() {
				// 如果获取不到歌手id，就将页面的链接跳转回/singer
				if(!this.singer.id){
					this.$router.push('/singer')
					return
				}
				getSingerDetail(this.singer.id).then((res) => {
					if(res.code == ERR_OK){
						this.songs = this._normalizeSongs(res.data.list)
						console.log(this.songs)
					}
				})
			},
			_normalizeSongs(list) {
				let ret = []
				list.forEach((item) => {
					let {musicData} = item
					if(musicData.songid && musicData.albummid) {
						ret.push(createSong(musicData))
					}
				})
				return ret
			}
		},
		components: {
			Musiclist
		}
	}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
	@import '../../common/stylus/variable'

	/*.singer-detail
		position: fixed
		z-index: 100
		top: 0
		left: 0
		right: 0
		bottom: 0
		background: $color-background*/

	.slide-enter-active,.slide-leave-active
		transition: all 0.3s
	.slide-enter,.slide-leave-to
		transform: translate3d(100%, 0, 0)
</style>