<template>
	<scroll-view scroll-y="true">
		<uni-swipe-action>
			<uni-swipe-action-item v-for="item of 15">
				<template>
					<PlanItem />
				</template>
				<template v-slot:right>
					<view class="update-btn">
						<uni-icons color="#FFFFFF" type="compose" size="24"></uni-icons>
					</view>
				</template>
			</uni-swipe-action-item>
		</uni-swipe-action>
	</scroll-view>
</template>

<script>
	import PlanItem from "./components/planItem.vue"
	export default {
		components: {
			PlanItem
		},
		data() {
			return {

			};
		},
		methods: {}
	}
</script>

<style lang="scss">
	.update-btn {
		height: calc(100% - 30rpx);
		display: flex;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;

		// padding-bottom: 20rpx;
		background-color: $uni-bg-color-primary;
		border-top-right-radius: 20rpx;
		border-bottom-right-radius: 20rpx;
	}
</style>
