<template>
	<div class="recommend">
		<div class="recommend-content">
			<div class="slider-wrapper">
				<Slider>
					<div v-for="i in recommends">
						<a :href="i.link"><img :src="i.picUrl"></a>
					</div>
				</Slider>
			</div>
			<div class="recommend-list">
				<h1 class="lits-title">热门歌曲推荐</h1>
				<ul></ul>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import Slider from 'base/slider/slider'
	export default{
		data(){
			return {
				recommends: [
					{id: 1, link: 'http://www.baidu.com', picUrl: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3105304565,1509611228&fm=27&gp=0.jpg'},
					{id: 2, link: 'http://www.baidu.com', picUrl: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=227953490,3054069314&fm=27&gp=0.jpg'},
					{id: 3, link: 'http://www.baidu.com', picUrl: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=958008776,2557398869&fm=27&gp=0.jpg'},
					{id: 4, link: 'http://www.baidu.com', picUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2097996470,2706206864&fm=27&gp=0.jpg'},
					{id: 5, link: 'http://www.baidu.com', picUrl: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=194300842,4244067639&fm=27&gp=0.jpg'},
				]
			}
		},
		components: {
			Slider
		},
		methods: {
			// api
			demo: function(){
				this.$http.get('api/indexType.shtml?type=4').then(function(data){
					var str = data.data;
					var b = str.toString();
				    var m = b.match(/<img src=\"([^\"]*?)\">/gi);
				    console.log(m)
				})
			}
		},
		mounted(){
			this.demo()
		}
	}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
	.recommend
		width: 100%
		overflow: hidden
		.recommend-content
			.slider-wrapper
				img
					height: 200px
</style>