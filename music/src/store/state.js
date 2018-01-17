import {playMode} from '../common/js/config'
import {loadSearch} from '../common/js/cache'

const state = {
	singer: {},
	playing: false,			//播放状态
	fullScreen: false,		//播放器展开收起状态
	playlist: [],			//播放列表
	sequenceList: [],		//播放模式列表
	mode: playMode.sequence,//播放模式
	currentIndex: -1,		//当前播放歌曲索引
	topList: [],
	searchHistory: loadSearch()
}

export default state