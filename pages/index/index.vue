<template>
	<view class="content">
		<swiper class="swiper" v-if="bannerList.length"  autoplay="true" interval="10000" duration="1000" circular="true">
			<swiper-item v-for="item in bannerList"  :key="item.id" class="swiperItem">
				<!-- <image :src="item.filePath":style="{ width: widthpx, height: heightpx }"  /> -->
				<image :src="item.filePath" style="width:100%" />
			</swiper-item>
		</swiper>
		<view class="Commonly" v-if="moduleList.length">
			<text class="filling"></text>
			<text class="title">常用模块</text>
		</view>
		<view class="grids" v-if="moduleList.length">
			<view class="item" v-for="(item, index) in moduleList"  :key="index">
				<image :src="item.imgPath" />
				<text>{{ item.moduleName }}</text>
			</view>
		</view>	
		<view class="footer" v-if="list.length">
			<image src="../../static/image/footer.png" mode=""></image>
			<view class="company">· 低 压 研 究 院 智 慧 平 台 ©1.0.30·</view>
		</view>
		<view class="bottom">
			<view class="footerICon" v-for="(item, index) in iconList" :key="item">
				<view class="iconitem" :class="item.show ? 'active' : ''" >
					<image :src="item.show ? item.name2 : item.name1" />
					<view class="tabName">{{ item.name3 }}</view>
					<view class="bcr" v-if="item.show"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>

export default {
	data() {
		return {
			widthpx: null,
			heightpx: null,
			widthpx2: null,
			heightpx2: null,
			list: [],
			bannerList: [],
			iconList: [
				{
					name2: '../../static/icon/homeHighlight.png',
					name1: '../../static/icon/homeGrey.png',
					name3: '首页',
					show: true
				},
				{
					name2: '../../static/icon/notifyHighlight.png',
					name1: '../../static/icon/notifyGrey.png',
					name3: '通知',
					show: false
				},
				{
					name2: '../../static/icon/meHighlight.png',
					name1: '../../static/icon/meGrey.png',
					name3: '我的',
					show: false
				}
			],

			moduleList: [],
			MainBanner: {},
			current: '1',
			size: '100'
		};
	},

	mounted() {
		this.bannerList=[{filePath:"https://www.powerchina.cn/picture_old/0/1511081934502996445.jpg"},{filePath:"https://www.powerchina.cn/picture_old/0/1511081934504266975.jpg"},{filePath:"https://www.powerchina.cn/picture_old/0/1511081934505378789.jpg"},{filePath:"../../static/image/banner2.png"}]
		this.moduleList=[{imgPath:"../../static/icon/tb.png",moduleName:"入职培训"},{imgPath:"../../static/icon/tb.png",moduleName:"项目简介"},{imgPath:"../../static/icon/tb.png",moduleName:"施工方案"},{imgPath:"../../static/icon/tb.png",moduleName:"施工进度"},{imgPath:"../../static/icon/tb.png",moduleName:"考勤管理"},{imgPath:"../../static/icon/tb.png",moduleName:"劳模选取"},{imgPath:"../../static/icon/tb.png",moduleName:"施工日志"},{imgPath:"../../static/icon/tb.png",moduleName:"施工计算"},{imgPath:"../../static/icon/tb.png",moduleName:"技术专栏"},{imgPath:"../../static/icon/tb.png",moduleName:"文件模板"},{imgPath:"../../static/icon/tb.png",moduleName:"知识进阶"},]
},
	methods: {}
};
</script>

<style scoped>
.content {
	min-height: 100%;
	background-color: #f4f4f4;
	padding-bottom: 10px;
}
.swiperItem {
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	width: 100%;
	/* padding: 10upx;
	box-sizing: border-box; */
}
.swiper {
	min-height: 430upx;
	width: 100%;
	margin-bottom: 30upx;
}

.swiper image {
	min-width: 720upx;
}
.Commonly {
	padding-left: 30upx;
	font-weight: 600;
	display: flex;
	height: 40upx;
	align-items: center;
}
.filling {
	width: 10upx;
	height: 32upx;
	background-color: #2549d2;
	border-radius: 5upx;
}

.grids {
	border-radius: 10px;
	margin: 10px;
	display: flex;
	flex-wrap: wrap;
	/* background-color: #fff; */
	/* border-left: 1upx solid #eee;
	  border-bottom: 1upx solid #eee; */
	color: #888;
	font-size: 28upx;
}

.grids .item {
	/* background-color: #fff; */
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 25%;
	height: 200upx;
	box-sizing: border-box;
}

.grids .item image {
	width: 100upx;
	height: 100upx;
}
.grids .item text {
	margin-top: 10upx;
	color: #888;
	font-size: 28upx;
}
.bottom {
	background-color: #fff;
	height: 110upx;
	width: 100%;
	display: flex;

	align-items: center;
	position: fixed;
	z-index: 999;
	left: 0;
	bottom: 0;
	box-sizing: 0;
}

.footerICon {
	height: 100%;
	width: 25%;
	margin: 0;
	padding: 0;
	box-sizing: 0;
	flex: 1;
}

.iconitem {
	line-height: 35upx;
	text-align: center;
	position: relative;
}
.iconitem image {
	width: 60upx;
	height: 60upx;
}



.read {
	border-radius: 10px;
	margin: 10px 10upx 0;
	padding: 10upx;
	box-sizing: border-box;
}

.readTitle {
	width: 100%;
	display: flex;
	align-items: center;
	height: 50upx;
	margin-bottom: 20upx;
	padding-left: 10upx;
}

.title {
	font-weight: 600;
	margin: 0 10px;
	font-size: 16px;
}

.huanyipi {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 150upx;
	background-color: #4086ff;
	color: #fff;
	border-radius: 25upx;
	height: 40upx;
	font-size: 24upx;
}

.fillbox {
	flex: 1;
}

.more {
	margin-right: 10px;
	font-size: 28upx;
	color: #949494;
}

.readContent {
	display: flex;
	margin: 10upx;
	padding: 10upx;
	box-sizing: border-box;
	align-items: center;
	/* background-color: #fff; */
	height: 200upx;
	border-radius: 15upx;
}

.contentImg {
	width: 300upx;
	height: 200upx;

	margin-right: 10px;
	border-radius: 10upx;
}

.contentItem {
	height: 100%;

	flex: 1;
	position: relative;
}
.contents {
	margin-bottom: 20upx;
	font-weight: 600;

	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
}

.activetype {
	position: absolute;
	bottom: 5%;
	left: 100upx;
}

.readNum {
	font-size: 24upx;
	color: #999;
	margin-bottom: 10upx;
	display: flex;
	justify-content: space-between;
}
.activetime {
	display: flex;
	justify-content: flex-end;
}
.activeing {
	background-color: #e8f2fe;
	color: #4086ff;
	width: 120upx;
	text-align: center;
	border-radius: 10upx;
}
.activeoff {
	background-color: #ffebf7;
	color: #f5483c;
	width: 120upx;
	text-align: center;
	border-radius: 10upx;
}
.beforactive {
	background-color: fff;
	color: #9eea6a;
	width: 120upx;
	text-align: center;
	border-radius: 10upx;
}

.footer {
	position: absolute;
	bottom: 0;
	left: 0;
	height: 250upx;
	position: relative;
	/* background-color: #fff; */
}

.footer image {
	width: 100%;
	height: 100%;
}

.tabName {
	font-size: 22upx;
}
.bcr {
	width: 80upx;
	height: 80upx;
	border-radius: 50%;
	background-color: #fff;
	position: absolute;
	left: 50%;
	transform: translate(-50%, 0);
	top: -25%;
	z-index: -1;
}
.company {
	position: absolute;
	left: 50%;
	top: 80upx;
	transform: translate(-50%);
	text-align: center;
	font-size: 20upx;
}
.module {
	position: absolute;
	width: 80upx;
	height: 30upx;
	line-height: 30upx;
	text-align: center;
	background: #ffe8c6;
	color: #ff9500;
	left: 0;
	bottom: 5%;
	font-size: 24upx;
	border-radius: 5upx;
}
</style>
<!-- https://wxapplet.chint-eletech.com:8081/WXImage/LV/ -->
