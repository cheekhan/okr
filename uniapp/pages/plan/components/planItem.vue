<template>
	<view class="plan-item-container" @click="handlePlanItem">
		<view style="display: flex;">
			<view style="width:570rpx;box-sizing: border-box;padding-right: 20rpx;">
				<text class="item-title text-split">这里是计划的标题，有可能很长，直接截断吧</text>
			</view>
			<view style="width: 180rpx;text-align: right;">
				<text class="item-title-label text-split">标签文字</text>
			</view>
		</view>
		<view class="plan-item-time flex-item-right">
			<text>2022-02-02</text>
			<text style="margin:0 20rpx;">——</text>
			<text>2033-09-09</text>
		</view>
		<view class="plan-item-context">
			这里是一大段的文字，超长。用于说明计划的内容、步骤、达到的预期等，可以作为当前一个计划的验收标准。
			这里是一大段的文字，超长。用于说明计划的内容、步骤、达到的预期等，可以作为当前一个计划的验收标准。
			这里是一大段的文字，超长。用于说明计划的内容、步骤、达到的预期等，可以作为当前一个计划的验收标准。
		</view>
	</view>
</template>

<script>
	export default{
		methods:{
			handlePlanItem(){
				console.log('跳转到计划的OKR列表')
			}
		}
	}
</script>

<style lang="scss">
	.plan-item-container {
		margin-bottom: 40rpx;
		// border-radius: 20rpx;
		border-top-left-radius: 20rpx;
		border-bottom-left-radius: 20rpx;
		padding: 20rpx;
		// background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
		background-color: $uni-bg-color-grey;
	}

	.flex-item-right {
		display: flex;
		justify-content: flex-end;
	}

	.item-title {
		color: $uni-main-color;
		font-size: $uni-font-size-lg;
	}

	.item-title-label {
		color: $uni-secondary-color;
		font-size: $uni-font-size-sm;
	}

	.plan-item-time {
		color: $uni-secondary-color;
		font-size: $uni-font-size-sm;
	}

	.plan-item-context {
		color: $uni-base-color;
		font-size: $uni-font-size-base;
	}
</style>
