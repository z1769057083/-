<template>
	<div class="wrap">
		<mt-cell title="我的关注">
			<p class="img_w">
				<img src="../../assets/imgs/attention_03.png" alt="" />
		    	<img src="../../assets/imgs/attention_14.png" alt="" />
		    	<img src="../../assets/imgs/attention_03.png" alt="" />
			</p>
	    	
	    	<a class="change" href="javascript:;">
	    		<img src="../../assets/imgs/home__33.gif" alt="" />
	    	</a>
	    </mt-cell>
	    <div class="msg" v-for="n in 10">
	    	<div class="msg_t">
	    		<img src="../../assets/imgs/attention_03.png" alt="" />
	    		<span>白色小仙女</span>
	    	</div>
	    	<div class="msg_c">
	    		<p class="p1">不要太乖，不想做的事可以拒绝，做不到的事不用勉强，不喜欢的话假装没听见。人生不是用来讨好别人的，而是要善待自己，就是这么简单.....</p>
	    		<p class="p2">全文</p>
	    	</div>
	    	<div class="msg_i">
	    		<img src="../../assets/imgs/attention_07.png" alt="" />
	    		<img src="../../assets/imgs/attention_11.png" alt="" />
	    		<img src="../../assets/imgs/attention_07.png" alt="" />
	    		<img src="../../assets/imgs/attention_11.png" alt="" />
	    		<img src="../../assets/imgs/attention_07.png" alt="" />
	    		<img src="../../assets/imgs/attention_11.png" alt="" />
	    		<img src="../../assets/imgs/attention_07.png" alt="" />
	    		<img src="../../assets/imgs/attention_11.png" alt="" />
	    	</div>
	    	<div class="msg_b">
	    		<p class="l">
	    			一分钟前
	    		</p>
	    		<p class="r">
		    		<span class="span1"><img src="../../assets/imgs/home__49.gif" alt="" />44</span>
	    			<span class="span2"><img src="../../assets/imgs/home__46.gif" alt="" />178</span>
	    			<span class="span3"><img src="../../assets/imgs/home__43.gif" alt="" />22</span>
	    		</p>
	    	</div>
	    </div>
	</div>
</template>

<script>
</script>

<style scoped="scoped" lang="scss">
.wrap{
	padding:0 1rem;
	.img_w{
		img{
			width:1.25rem;
			margin-right:0.3rem;
		}
	}
	.mint-cell {
		background: none;
	}
	.mint-cell:first-child .mint-cell-wrapper {
		background: none;
	}
	.change{
		img{
			height:0.7rem;
		}
	}
	.msg{
		font-size:0.7rem;
		border-bottom: 1px solid #ccc;
		margin-bottom:0.7rem;
		padding-bottom:0.7rem;
		.msg_t{
			img{
				width:1.3rem;
				vertical-align: middle;
				margin-left:0.3rem;
			}
			span{
				vertical-align: middle;
				font-size:0.8rem;
			}
		}
		.msg_c,.msg_i,.msg_b{
			
			margin-left: 1.8rem;
		}
		.msg_c .p2{
			text-align: right;
			color: #86569e;
			margin:0.6rem 0;
		}
		.msg_i{
			img{
				width:4.8rem;
			}
		}
		.msg_b{
			display: flex;
			margin-top: 0.5rem;
			.l{
				flex:1;
				text-align: left;
			}
			.r{
				flex: 3;
			}
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
}
</style>