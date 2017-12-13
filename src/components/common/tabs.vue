<template>
	<div>
		<div class="navheader">
		<mt-tabbar v-model="tabsBar">
			  <mt-tab-item id="recommend"><a href="javascript:;">推荐</a></mt-tab-item>
			  <mt-tab-item id="follow"><a href="javascript:;">关注</a></mt-tab-item>
			  <mt-tab-item id="photos"><a href="javascript:;">美图</a></mt-tab-item>
			</mt-tabbar>
		</div>
		<div class="navbody">
			<mt-tab-container v-model="tabsBar">
			  <mt-tab-container-item id="recommend">
			    <recommend></recommend>			    	
			  </mt-tab-container-item>
			  <mt-tab-container-item id="follow">
				<attention></attention>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="photos">
				<pictures></pictures>
			  </mt-tab-container-item>
			</mt-tab-container>
		</div>
	</div>
</template>

<script>
	import { Tabbar, TabItem,TabContainer, TabContainerItem } from 'mint-ui';
	import Recommend from "./Recommend.vue";
	import attention from "./attention.vue";
	import pictures from "./pictures.vue";
	export default{
		components:{
			TabContainer,
			TabContainerItem,
			Recommend,
			attention,
			pictures
		},
		data(){
			return {
				tabsBar:'recommend'
			}
		}
		
	}
</script>

<style scoped="scoped" lang="scss">
.navheader{
	position:absolute;
			left:1rem;
			top:7.2rem;
			height:2.275rem;
			width:16.8rem;
			background: #fff;
			border-radius:0.55rem 0.55rem 0 0;
	
	.mint-tab-item{
		background-color: #fff;
		.mint-tab-item-label{
			a{
				color:#333;
			    font-size: 0.925rem;
			}
		}
	}
	.is-selected{
			color:#ffa1d0;
		    border-bottom: 0.1rem solid #ff74b9;
		    background-color: #fff;
	}
	 &::after{
				margin-top:2.375rem;
				width:100%;
				height:0.25rem;
		        display: block;
		        content:'';
				background: linear-gradient(#ffa1d0,#fff);
				opacity: 0.25;
			}
}
.navbody{
	position:absolute;
	top:9.7rem;
	width:100%;
	background: #fff;
	margin-bottom:2.75rem;
	
}
</style>