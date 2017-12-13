<template>
	<div class="mian_wrapper">
		<div>{{mainSelect}}</div>
		<mt-tab-container v-model="mainSelect">
		  <mt-tab-container-item id="home">
		    <mt-cell  :title="''">
		    </mt-cell>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="course">
		    <mt-cell  :title="''"></mt-cell>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="message">
		    <mt-cell :title="''"></mt-cell>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="mine">
		    <mt-cell :title="''"></mt-cell>
		  </mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>

<script>
	
	import {TabContainer, TabContainerItem} from 'mint-ui'
	export default{
		data(){
			return{
				
			}
		},
		props:['mainSelect'],
		components:{
			TabContainer,
			TabContainerItem
			
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.mian_wrapper{
		margin-top:2.625rem;
		margin-bottom: 55px;
	}
</style>