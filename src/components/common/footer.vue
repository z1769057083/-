<template>
	<div>
		<div class="main_wrapper">
			<mt-tab-container v-model="selected">
			  <mt-tab-container-item id="home">
			  	<vhome></vhome>
			  	首页
			  </mt-tab-container-item>
			  <mt-tab-container-item id="course">
			  	<course></course>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="message">
			  	消息
			  </mt-tab-container-item>
			  <mt-tab-container-item id="mine">
			  	我的
			  </mt-tab-container-item>
			</mt-tab-container>
		</div>
		<mt-tabbar v-model="selected" fixed>
		  <mt-tab-item id="home">
		    <img slot="icon" v-if="selected=='home'" src="../../assets/imgs/home_hover.svg">
		   <img slot="icon"  v-else src="../../assets/imgs/home_normal.svg">
		    首页
		  </mt-tab-item>
		  <mt-tab-item id="course">
		  	<img slot="icon" v-if="selected=='course'" src="../../assets/imgs/course_hover.svg">
		    <img slot="icon" v-else src="../../assets/imgs/course_normal.svg">
		    
		    教程
		  </mt-tab-item>
		  <mt-tab-item  class="plus">
		    <img slot="icon" src="../../assets/imgs/home__60.gif">
		  </mt-tab-item>
		  <mt-tab-item id="message">
		  	<img slot="icon" v-if="selected=='message'" src="../../assets/imgs/message_hover.svg">
		    <img slot="icon" v-else src="../../assets/imgs/message_normal.svg">
		    消息
		  </mt-tab-item>
		  <mt-tab-item id="mine">
		  	<img slot="icon" v-if="selected=='mine'" src="../../assets/imgs/mine_hover.svg">
		    <img slot="icon" v-else src="../../assets/imgs/mine_normal.svg">
		    
		    我的
		  </mt-tab-item>
		</mt-tabbar>
		<!--<vhome></vhome>-->
	</div>
	
</template>

<script>
	import { Tabbar, TabItem,TabContainer, TabContainerItem} from 'mint-ui'
	import vhome from './home.vue'
	import course from './course'
	export default{
		data(){
			return{
			    "selected":"home"
			}
		},
		components:{
			Tabbar,
			TabItem,
			TabContainer,
			TabContainerItem,
			vhome,
			course
		}
	}
</script>

<style scoped="scoped" lang="scss">
.main_wrapper{
		/*margin-bottom: 55px;*/
		/*height:500px;*/
	}
.plus{
	.mint-tab-item-icon{
		width:36px !important;
		height:48px;
		img{
			height:36px;
			width:36px;
		}
	}
}
</style>