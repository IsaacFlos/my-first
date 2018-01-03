// jsonp
import jsonp from '../js/jsonp.js'
import {commonParams, options} from './config'

// 轮播
export function getRecommend(){
	const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

	// ES6语法
	// Object.assign(目标对象, 源对象)		返回值：目标对象
	const data = Object.assign({}, commonParams, {
		platform: 'h5',
		uin: 0,
		needNewCode: 1
	})

	return jsonp(url, data, options)
}

// 歌单
export function getDiscList(){
	const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'

	const data = Object.assign({}, commonParams, {
		platform: 'yqq',
		hostUin: 0,
		sin: 0,
		ein: 29,
		sortId: 5,
		needNewCode: 0,
		categoryId: 10000000,
		rnd: Math.random()
	})

	return jsonp(url, data, options)
}