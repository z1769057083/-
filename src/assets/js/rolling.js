var UcanSlide=function(ele,config){
    this.config=config||{};
    this.wrap=document.querySelector(ele);
    this.ul_wrap=this.wrap.querySelector('ul');
    this.ul_wrap.innerHTML+=this.ul_wrap.innerHTML;
    this.oli=this.ul_wrap.querySelectorAll('li');
    this.len=this.oli.length;                    
    this.marginRight=this.config.marginRight||15;//设置li标签的右边距
    this.autoScroll=this.config.autoScroll||true;//设置容器的滚动状态
    this.scrollStep=this.config.scrollSpeed||2;//设置容器滚动的步长
    this.setTime = null;
    this.warp_width=this.wrap.offsetWidth;
    this.ul_wrap_width=0;                        
    this.init();                    
}
UcanSlide.prototype.init=function(){
    var _this=this;                    
    for(var i=0;i<this.len;i++){
        this.oli[i].style.marginRight=this.marginRight+'px';
        this.ul_wrap_width+=(this.oli[i].offsetWidth+this.marginRight);
    }
    this.ul_wrap.style.width=this.ul_wrap_width+'px';
    if(this.ul_wrap_width<this.warp_width){
        return;
    }
    if(this.autoScroll){
         //执行无缝滚动
         this.setTime=setInterval(function(){
         　　_this.move();
         },this.scrollSpeed);
    }      
    //在init()函数里面添加
	this.ul_wrap.addEventListener('touchstart',function(e){
	     _this.touchStart(e);            
	},false);
	this.ul_wrap.addEventListener('touchmove',function(e){                        
	     _this.touchMove(e);
	},false);
	this.ul_wrap.addEventListener('touchend',function(e){
	     _this.touchEnd(e);
	},false);
}
UcanSlide.prototype.touchMove=function(e){
    e.preventDefault();
    this.autoScroll=false;
    this.dirX+=e.targetTouches[0].clientX-this.startX;
    this.startX=e.targetTouches[0].clientX;//记录前一次触屏坐标
    this.move();
};
UcanSlide.prototype.touchEnd=function(e){
    var _this=this;
    this.autoScroll=true;
    this.setTime=setInterval(function(){
        _this.move();
    },this.scrollSpeed);
};

　UcanSlide.prototype.move=function(){
						　　　　if(this.autoScroll){
							　　　　　　//自由滚动状态（自右向左）
							　　　　　　this.dirX=this.dirX-this.scrollStep;
							　　　　　　if(this.dirX<-this.ul_wrap_width/2||this.dirX>0){
								　　　　　　　　this.dirX=0;
							　　　　　　}
						　　　　}else{
　　　　　　//拖动状态
　　　　　　if(this.dirX<-this.ul_wrap_width/2){
								　　　　　　　　this.dirX=0;
							　　　　　　}else if(this.dirX>=0){
								　　　　　　　　this.dirX=-this.ul_wrap_width/2;
							　　　　　　}
						　　　　}
　　　　this.ul_wrap.style.webkitTransform='translate3d('+this.dirX+'px,'+'0px,0px)';
					　};
module.exports={
	UcanSlide
}
