<template>
	<div class="music-list">
		<div class="back" @click="back">
			<i class="icon-back"></i>
		</div>
		<h1 class="title" v-html="title"></h1>
		<div class="bg-image" :style="bgStyle" ref="bgImage">
			<div class="play-wrapper">
				<div class="play" v-show="songs.length>0" ref="playBtn" @click="random">
					<i class="icon-play"></i>
					<span class="text">随机播放全部</span>
				</div>
			</div>
			<div class="filter" ref="filter"></div>
		</div>
		<scroll :data="songs" class="list" ref="list">
			<div class="song-list-wrapper">
				<song-list @select="selectItem" :songs="songs"></song-list>
			</div>
		</scroll>
	</div>
</template>
<script type="text/javascript">
	import Scroll from '../../base/scroll/scroll'
	import SongList from '../../base/song-list/song-list'
	import {mapActions} from 'vuex'
	import {playlistMixin} from '../../common/js/mixin'

	export default {
		mixins: [playlistMixin],
		props: {
			bgImage: {
				type: String,
				default: ''
			},
			songs: {
				type: Array,
				default: []
			},
			title: {
				type: String,
				default: ''
			}
		},
		computed: {
			bgStyle() {
				return `background-image:url(${this.bgImage})`
			}
		},
		methods: {
			// songs
			handlePlaylist(playlist){
				const bottom = playlist.length > 0 ? '60px' : ''
				this.$refs.list.$el.style.bottom = bottom
				this.$refs.list.refresh()
			},
			selectItem(item, index){
				this.selectPlay({
					list: this.songs,
					index
				})
			},
			random() {
				this.randomPlay({
					list: this.songs
				})
			},
			back() {
				this.$router.back()
			},
			...mapActions([
				'selectPlay',
				'randomPlay'
			])
		},
	    mounted() {
	      this.$refs.list.$el.style.top = `${this.$refs.bgImage.clientHeight}px`
	    },
		components: {
			Scroll,
			SongList
		}
	}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
	@import "../../common/stylus/variable"
	.music-list
		position: fixed
		z-index: 100
		top: 0
		left: 0
		bottom: 0
		right: 0
		background: $color-background
		.back
			position: absolute
			top: 0
			left: 6px
			z-index: 50
			.icon-back
				display: block
				padding: 10px
				font-size: $font-size-large-x
				color: $color-theme
		.title
			position: absolute
			top: 0
			left: 10%
			z-index: 40
			width: 80%
			no-wrap()
			text-align: center
			line-height: 40px
			font-size: $font-size-medium-x
		.bg-image
			position: relative
			width: 100%
			height: 0
			padding-top: 70%
			transform-origin: top
			background-size: cover
			.play-wrapper
				position: absolute
				bottom: 20px
				z-index: 50
				width: 100%
				.play
					box-sizing: border-box
					width: 135px
					padding: 7px 0
					margin: 0 auto
					text-align: center
					border: 1px solid $color-theme
					color: $color-theme
					border-radius: 100px
					font-size: 0
					.icon-play
						display: inline-block
						vertical-align: middle
						margin-right: 6px
						font-size: $font-size-medium-x
					.text
						display: inline-block
						vertical-align: middle
						font-size: $font-size-small
			.filter
				position: absolute
				top: 0
				left: 0
				width: 100%
				height: 100%
				background: rgba(7, 17, 27, 0.4)
				background-size: cover
			.bg-layer
				position: relative
				height: 100%
				background: $color-background
			.list
				position: fixed
				top: 0
				bottom: 0
				width: 100%
				background: $color-background
				.song-list-wrapper
					padding: 20px 30px
				.loading-container
					position: absolute
					width: 100%
					top: 50%
					transform: translateY(-50%)
</style>