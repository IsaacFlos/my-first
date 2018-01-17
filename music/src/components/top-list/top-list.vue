<template>
	<transition name="slide">
		<MusicList :title="title" :bg-image="bgImage"></MusicList>
	</transition>
</template>
<script type="text/javascript">
	import MusicList from '../music-list/music-list'
	import {mapGetters} from 'vuex'
	export default {
		computed: {
			title() {
				return this.topList.topTitle
			},
			bgImage() {
				return this.topList.picUrl
			},
			...mapGetters([
				'topList'
			])
		},
		components: {
			MusicList
		}
	}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
	.slide-enter-active, .slide-leave-action
		transition: all 0.3s ease

	.slide-enter, .slide-leave-to
		transform: translate3d(100%, 0, 0)
</style>