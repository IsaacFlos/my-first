<template>
	<div class="m-header">
		<div class="icon"></div>
		<div class="text">网易云音乐</div>
	</div>
</template>
<style scoped lang="stylus" rel="stylesheet/stylus">
	@import "../../common/stylus/variable"
	@import "../../common/stylus/icon"
	.m-header
		position: relative
		height: 44px
		text-align: center
		color: $color-text
		font-size: 0
		.icon
			display: inline-block
			vertical-align: top
			margin-top: 6px
			width: 30px
			height: 30px
			margin-right: 9px
			/*background-image: url('../../common/images/logo.png')*/
			bg-img-png(logo)
			background-size: 30px 30px
		.text
			display: inline-block
			vertical-align: top
			line-height: 44px
			font-size: 18px
			color: $color-text-ll
</style>