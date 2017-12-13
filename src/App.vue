<template>
  <div id="app">
    <vheader></vheader>
    <router-view></router-view>
  	<vfooter></vfooter>
  </div>
</template>

<script>
import vheader from './components/common/header.vue'
import vfooter from './components/common/footer.vue'

export default {
  name: 'app',
  components:{
  	vheader,
  	vfooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
	
}
</style>
