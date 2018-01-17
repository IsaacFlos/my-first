<template>
	<div class="search-list" v-show="searches.length">
		<ul>
			<li class="search-item" v-for="item in searches">
				<span class="text">{{item}}</span>
				<span class="icon">
					<i class="icon-delete"></i>
				</span>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		props: {
			searches: {
				type: Array,
				default: []
			}
		},
		methods: {
			
		}
	}
</script>