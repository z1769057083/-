<template>
	<div class="home-wrap">
		<!--<vheader></vheader>-->
		<nav>
			<vtabs></vtabs>
		</nav>
	</div>
</template>

<script>
	import vtabs from './tabs.vue'
	import vheader from './header.vue'
	export default{
		data(){
		  return {
		  	 
		  } 
		},
		components:{
			vtabs,
			vheader
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.home-wrap{
		/*position:absolute;
		left:0;
		top:0;
		right:0;
		bottom: 3rem;
		background-color: #fff;*/
		nav{
			position:absolute;
			left:0;
			top:2.25rem;
			height:8.425rem;
			width:100%;
			background: url(../../assets/imgs/line_01.png) repeat-x left top;
			}
	}
</style>