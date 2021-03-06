import {mapGetters} from 'vuex'
export const playlistMixin = {
	computed: {
		...mapGetters([
			'playlist'
		])
	},
	// document.ready
	muunted() {
		this.handlePlaylist(this.playlist)
	},
	// keep-alive
	activated() {
		this.handlePlaylist(this.playlist)
	},
	watch: {
		playlist(newVal) {
			this.handlePlaylist(newVal)
		}
	},
	methods: {
		handlePlaylist() {
			throw new Error('component must implement handlePlaylist method')
		}
	}
}