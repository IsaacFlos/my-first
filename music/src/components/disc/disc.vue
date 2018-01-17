<template>
	<transition name="slied">
		
	</transition>
</template>
<script type="text/javascript">
	import MusicList from '@/components/music-list/music-list'
	export default {

	}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
	.silde-enter-active, .silde-leave-active
		transition: all 0.3s
	.slide-enter, .slide-leave-to
		transfrom: translate3d(100%, 0, 0)
</style>