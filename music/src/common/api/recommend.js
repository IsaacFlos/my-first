// jsonp
import jsonp from '../js/jsonp.js'
import {commonParams} from './config'

export function getRecommend(){
	const url = 'https://c.y.qq.com/splcloud/fcgi-bin/p.fcg'

	const data = Object.assign({}, commonParams, {
		platform: 'h5',
		uin: 0,
		needNewCode: 1
	})

	const options = {
		param: 'jsonpCallback'
	}

	return jsonp(url, data, options)
}