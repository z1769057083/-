<template>
  <div>
    <div>{{haha}}</div>
    <div v-outwenjian id="outer">
      <ul id="inner" >
          <li><a href="">首页start</a></li>
          <li><a href="">美剧1</a></li>
          <li><a href="">电影1</a></li>
          <li><a href="">购物1</a></li>
          <li><a href="">时尚1</a></li>
          <li><a href="">新闻1</a></li>
          <li><a href="">其他1</a></li>
          <li><a href="">热点1</a></li>
          <li><a href="">电视1</a></li>
          <li><a href="">历史1</a></li>
           <li><a href="">首页2</a></li>
          <li><a href="">美剧2</a></li>
          <li><a href="">电影2</a></li>
          <li><a href="">购物2</a></li>
          <li><a href="">时尚2</a></li>
          <li><a href="">新闻2</a></li>
          <li><a href="">其他2</a></li>
          <li><a href="">热点2</a></li>
          <li><a href="">电视2</a></li>
          <li><a href="">结尾end</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import menuScroll from "@/assets/js/menuScroll.js"
  export default {
    data () {
      return {
        haha: '哈哈心平气和！'
      }
    },
    directives: {
      outwenjian: {
        inserted: function (el) {
          menuScroll(el)
        }
      }
    }
  }
</script>

<style>
*{ margin:0; padding:0;}
ul,li{ margin:0; padding:0; list-style:none;}

#outer{ border:1px  solid red; width:300px; height:46px; margin:20px auto; text-align:center; vertical-align:middle; line-height:46px; position:relative; overflow:hidden; background:#eee;}
#outer:hover{ border-color:#333; cursor:pointer;}
#inner{ position:absolute; left:0; top:1px; height:44px; line-height:44px; width:300px; background:#666;  text-align:left; clear:both; overflow:hidden;}
#inner li{ width:auto; height:44px; float:left; display:inline; padding:0 15px; text-align:center;  }
#inner li:hover{ background:#333;}
#inner li a{font-size:14px; color:#fff; display:inline;width:auto; height:44px; line-height:44px; text-decoration:none;}
.translateZ{ -webkit-transform:translateZ(0);transform:translateZ(0);-webkit-backface-visibility: hidden;backface-visibility: hidden;}

.classtest{ background:#333;}
</style>
