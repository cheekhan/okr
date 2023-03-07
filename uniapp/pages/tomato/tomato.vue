<template>
	<view class="tomato-index-container">
		<uni-segmented-control :values="tabs" @clickItem="handleClickItem" />
		<scroll-view scroll-y="true" style="flex-grow: 1;padding:20rpx 0 0 0;">
			<TomatoItem v-for="(item,index) of (currentIndex?task:allTask)" :item="item" :item-index="index"
				:tab-index="currentIndex" @add="moveTask">
			</TomatoItem>
		</scroll-view>
	</view>
</template>

<script>
	import TomatoItem from "@/components/tomatoItem.vue"
	export default {
		components: {
			TomatoItem
		},
		data() {
			return {
				tabs: ['番茄钟池', '今日任务'],
				currentIndex: 0, // 当前tab
				allTask: [1, 2, 4], // 所有钟
				task: [1], // 今日
			};
		},
		methods: {
			// 点击tab
			handleClickItem({
				currentIndex
			}) {
				console.log('点击了tab：', currentIndex);
				this.currentIndex = currentIndex;

			},
			//  将一个任务，从所有，移动到当日
			moveTask(index) {
				console.log('处理：添加任务', index)
				this.task.push(this.allTask.splice(index, 1))
			}

		}
	}
</script>

<style lang="scss" scoped>
	.tomato-index-container {
		height: 100%;
		// background-color: $uni-bg-color-grey;
		display: flex;
		flex-direction: column;
	}
</style>
