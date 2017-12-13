<template>
	<header class="head-wrap">
			<div class="head_top">
				<p class="search_wrap">
					<a class="head_search" href="javascript:;">
						<img src="../../assets/imgs/home__08.gif" alt="" />
					</a>
					<input type="text" name="search" placeholder="搜索文章,动态,美图,用户"/>
					<a href="javascript:;" class="head_say">
						<img src="../../assets/imgs/home__11.gif" alt="" />
					</a>
				</p>
				<a href="javascript:;" class="head_photo">
					<img src="../../assets/imgs/home__05.gif" alt="" />
				</a>
			</div>
		</header>
</template>

<script>
</script>

<style scoped="scoped" lang="scss">
	.head-wrap{
			height: 2.35rem;
			background:url(../../assets/imgs/line_02.png) repeat-x;
			
			.head_top{
				height:1.6rem;
				position:absolute;
				left:0;
				top:0.5rem;
				right:0;
				
				.search_wrap{
				width:14rem;
				height:1.6rem;
				border-radius: 0.625rem;
				background-color: #fce2f4;
				position: absolute;
				left: 1rem;
				top:0;
				input{
					background-color: #fce2f4;
					border: none;
					position: absolute;
					left:2.3rem;
					width:10rem;
					top:50%;
					height: 100%;
					transform: translateY(-50%);
					&::-webkit-input-placeholder{
						color:#aaaaaa;
						font-size: 0.625rem;
					}
				}
				.head_search{
					img{
						width:0.95rem;
						height:0.95rem;
						display: block;
					}
					position:absolute;
					left: 0.675rem;
					top:50%;
					transform: translateY(-50%);
				}
				.head_say{
					position:absolute;
					right:0.75rem;
					top:50%;
					transform: translateY(-50%);
					img{
						width:0.5rem;
						height: 0.775rem;
						display: block;
					}
				}
			}
			.head_photo{
				position:absolute;
				right:1.05rem;
				top:50%;
				transform: translateY(-50%);
				img{
					display: block;
					width:1.4rem;
					height:1.2rem;
				}
			}
			}
			
		}
</style>