<template>
	<div class="wrap">
		<header>
			<img src="../../assets/imgs/picture_03.png" alt="" />
			<img src="../../assets/imgs/picture_05.png" alt="" />
			<img src="../../assets/imgs/picture_07.png" alt="" />
			<img src="../../assets/imgs/picture_09.png" alt="" />
			<img src="../../assets/imgs/picture_15.png" alt="" />
			<img src="../../assets/imgs/picture_16.png" alt="" />
			<img src="../../assets/imgs/picture_17.png" alt="" />
			<img class="more" src="../../assets/imgs/picture_19.png" alt="" />
		</header>
		<nav>
			<a  href="javascript:;">热门</a>
			<a href="javascript:;">最新</a>
		</nav>
		<section>
			<img v-for="n in 10" src="../../assets/imgs/picture_25.png" alt="" />
		</section>
	</div>
</template>

<script>
//	import { Cell } from 'mint-ui';
//	export default{
//		components:{
//			Cell
//		}
//	}
</script>

<style scoped="scoped" lang="scss">
	.wrap{
		padding:0 1rem;
		header{
			margin-top:0.7rem;
			img{
				width:3.95rem;
			}
			.more{
				width:1.25rem;
				margin-left:1.4rem;
			}
		}
		nav{
			margin-top:1rem;
			a{
				display: inline-block;
				padding:0.2rem 0.7rem;
				border-radius: 1rem;
				font-size:1.1rem;
				&:first-child{
					background-color: #f3dafb;
				}
				&:last-child{
					color: #ccc;
				}
			}
		}
		section{
			img{
				width:8rem;
				margin:0.1rem;
			}
		}
	}
</style>