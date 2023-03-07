<template>
	<view class="tomato-item-container" @click="handleClick">
		<div class="grey-color">
			<uni-title title="tomato的标题" type="h2"></uni-title>
			<uni-title title="XXX计划/YYY的OKR" type="h4"></uni-title>
			<text>大段文字，文本域。大段文字，文本域。大段文字，文本域。大段文字，文本域。大段文字，文本域。</text>
		</div>

	</view>
</template>

<script>
	export default {
		name: "tomatoItem",
		props: ['item', 'tabIndex', 'itemIndex'],
		// emits: ['add'], // 添加一个index到今日列表
		data() {
			return {

			};
		},
		created() {
			// this.$on('add')
		},
		methods: {
			handleClick() {
				if (this.tabIndex) { // 今日
					uni.showActionSheet({
						itemList: ['开始任务'],
						success: ({
							tapIndex
						}) => {
							uni.navigateTo({
								url: "/pages/tomato/tomatoTime"
							})
						}
					})
				} else { // 所有
					uni.showActionSheet({
						itemList: ['详情', '添加'],
						success: ({
							tapIndex
						}) => {
							console.log(tapIndex);
							switch (tapIndex) {
								case 1: // 添加到今日
									this.$emit('add', this.itemIndex)
									break;
								default: // 进入到详情
									uni.navigateTo({
										url: '/pages/plan/alterTomato'
									})
							}
						}
					})

				}

			}
		}
	}
</script>

<style lang="scss" scoped>
	.tomato-item-container {
		// padding: 10rpx 20rpx 20rpx;
		// margin-bottom: 20rpx;
		padding-bottom: 20rpx;
	}

	.grey-color {
		background-color: $uni-bg-color-grey;
		padding: 0 20rpx 10rpx;
	}
</style>
