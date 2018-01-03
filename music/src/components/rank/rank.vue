<template>
	<div class="rank" rel="aaa">
		<ul ref="bbb">
			<li v-for="(i,index) in ranks" :tag="index">{{i.id}}</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	import {getData,setData} from '../../common/js/dom'
	export default{
		data(){
			return{
				ranks: [
					{id: 1},
					{id: 2},
					{id: 3},
					{id: 4},
					{id: 5},
				]
			}
		},
		methods: {
			// test(){
			// 	let demo = setData(this.$refs.bbb.children[0],'an','1')
			// 	console.log(demo)
			// },
			test1(){
				let demo = getData(this.$refs.bbb.children[1], 'tag')
				console.log(demo)
			}
		},
		mounted(){
			this.test1()
			// console.log(this.$refs.bbb.children[0])
		}
	}
</script>