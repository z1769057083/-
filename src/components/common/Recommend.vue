<template>
	<div class="wrap">
		<mt-cell title="美甲达人">
			<img src="../../assets/imgs/home__18.gif" alt="" />
			<a class="change" href="javascript:;">换一换</a>
		</mt-cell>
		<div class="tj swiper-container">
			<ul ref="oul" class="swiper-wrapper">
				<li class="mjdr swiper-slide" v-for="n in 100" ref="oli">
					<img src="../../assets/imgs/home__22.gif" alt="" />
					<p class="p1">爱说话的小羔羊</p>
					<p class="p2">粉丝: 861</p>
					<p class="p3">已关注</p>
				</li>
			</ul>
		</div>
		<mt-cell title="热门文章">
			<img src="../../assets/imgs/home__33.gif" alt="" />
			<a class="more" href="javascript:;">更多</a>
		</mt-cell>
		 <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" @top-status-change="handleTopChange" ref="loadmore">
			<li v-for="item in list">
				<div class="news">
					<div class="news_t">
						<div class="l">
							<img src="../../assets/imgs/home__37.gif" alt="" />
							<div class="l_i">
								<p class="p1">{{item.author}}</p>
								<p class="p2">{{item.time}}</p>
							</div>
						</div>
						<div class="r">{{item.readNum}}</div>
					</div>
					<div class="news_b">
						<div class="l">
							<p class="p1">{{item.title}}</p>
							<p class="p2">{{item.content}}</p>
							<p class="p3">
								<span class="span1"><img src="../../assets/imgs/home__49.gif" alt="" />44</span>
								<span class="span2"><img src="../../assets/imgs/home__46.gif" alt="" />178</span>
								<span class="span3"><img src="../../assets/imgs/home__43.gif" alt="" />22</span>
							</p>
						</div>
						<div class="r">
							<img src="../../assets/imgs/home__40.gif" alt="" />
						</div>
					</div>
				</div>
			</li>
		</ul>
			<div slot="top" class="mint-loadmore-top">
		      <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
		      <span v-show="topStatus === 'loading'">Loading...</span>
		    </div>
	</mt-loadmore>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Loadmore } from 'mint-ui';
	import '../../../static/lib/swiper-3.4.2.min.js';
	export default {
		components:{
			Loadmore
		},
		data() {
	      return {
	        topStatus: '',
	        list:[{
	        	author:"抹茶小姐",
	        	time:"2017-09-11",
	        	readNum:"阅读1000+",
	        	title:"最适合新手学习的花卉美甲",
	        	content:"新手必备的花卉款做..."
	        }]
	        // ...
	      };
	    },
		methods: {
			 handleTopChange(status) {
		        this.topStatus = status;
		      },
			initWidth() {
				var liw = window.getComputedStyle(this.$refs.oli[0]).width;
				this.$refs.oul.style.width = 6.3 * this.$refs.oli.length + "rem";

			},
			loadTop() {
				setTimeout(()=>{
					this.$refs.loadmore.onTopLoaded();
				},3000)
			  
			},
			loadBottom() {
				for(var i=0;i<10;i++){
					this.list.push(this.list[0])
				}
//			  this.allLoaded = true;// 若数据已全部获取完毕
				setTimeout(()=>{
					this.$refs.loadmore.onBottomLoaded();
				},3000)
			  
			},
			swipe(){
				var mySwiper = new Swiper('.swiper-container', {
					autoplay: 100,
					loop:true
				})
			}
		},
		mounted() {
			this.initWidth();
			this.swipe()
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.wrap {
		
		padding: 0 1rem;
		padding-bottom: 50px;
		.mint-loadmore{
			margin-bottom: 50px;
		}
		.tj {
			height: 8.2rem;
			overflow-x: scroll;
			ul {
				width: 2000px;
			}
		}
		.mint-cell {
			background: none;
			img {
				height: 0.7rem;
			}
			.more {
				margin-left: 0.425rem;
			}
		}
		.mint-cell:first-child .mint-cell-wrapper {
			background: none;
		}
		.change {
			display: inline-block;
			margin-left: 0.425rem;
			font-size: 0.7rem;
		}
		.mjdr {
			width: 5.7rem;
			height: 8.2rem;
			border: 1px solid #ccc;
			border-radius: 5px;
			text-align: center;
			font-size: 0.6rem;
			/*margin-right: 0.6rem;*/
			display: inline-block;
			img {
				width: 2.9rem;
				margin-top: 0.75rem;
			}
			.p2 {
				color: #ccc;
				margin: 0.4rem 0;
			}
			.p3 {
				display: inline-block;
				padding: 0.25rem 0.9rem;
				background-color: #dddddd;
				border-radius: 0.45rem;
				font-size: 0.6rem;
			}
		}
		.news {
			border-bottom: 1px solid #f1f1f1;
			margin-bottom: 0.6rem;
			.news_t {
				display: flex;
				img {
					width: 1.45rem;
				}
				.l {
					flex: 1;
					.l_i {
						display: inline-block;
						.p1 {
							font-size: 0.6rem;
						}
						.p2 {
							font-size: 0.5rem;
							color: #ccc;
						}
					}
				}
				.r {
					flex: 1;
					text-align: right;
					font-size: 0.5rem;
					color: #ccc;
					display: inline-block;
				}
			}
			.news_b {
				display: flex;
				.l {
					flex: 3;
					padding-right: 0.7rem;
					.p1 {
						font-size: 0.8rem;
					}
					.p2 {
						font-size: 0.6rem;
					}
					.p3 {
						font-size: 0.4rem;
						text-align: right;
						.span1 {
							margin-left: 0.6rem;
							color: #ccc;
							img {
								width: 0.9rem;
								margin-right: 0.3rem;
								margin-top: 3px;
							}
						}
						.span2 {
							margin-left: 0.6rem;
							color: #ccc;
							img {
								margin-right: 0.3rem;
								width: 0.7rem;
								margin-top: 3px;
							}
						}
						.span3 {
							margin-left: 0.6rem;
							color: #ccc;
							img {
								margin-right: 0.3rem;
								width: 0.8rem;
								margin-top: 3px;
							}
						}
					}
				}
				.r {
					flex: 1;
					text-align: right;
					img {
						width: 5.6rem;
						height: 3.8rem;
					}
				}
			}
		}
	}
</style>