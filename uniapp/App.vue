<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
			console.log('启动后请求store')
			console.log(this.$store)
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	page {
		padding: 20rpx;
		box-sizing: border-box;
		background-color: $uni-bg-color-grey;
		height: 100%;
	}
</style>
