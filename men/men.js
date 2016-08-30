window.onload=function(){
	new TabSwitch('tab');

	$('.home_img').click(function () {
		$(this).fadeOut(2200);
		setCookie('one','display',1);
	});
	var home_img=document.createElement('img');
	home_img.src="../images/home_img.jpg";
	$('.home_img').append(home_img);

	var one=GetCookie('one');
	if (one=="display") $('.home_img').remove();




	$(function() {
 	   $("img.lazy").lazyload({
  	      event : "sporty",
  	      effect : "fadeIn",
  	      skip_invisible : false,
  	  });
	}); 
	$('.iload').height($('.iload').width()-10);

	$('.slider1').bxSlider({
        slideWidth: $('.cover').width(),
        minSlides: 1,
        maxSlides: 1,
        slideMargin: 1,
		hideControlOnEnd: true,
		adaptiveHeight: true,
		startSlides: 0, 
    });
	
	var bx_top=($('.slide').first().height()-10)+'px';
	$('.bx-pager').css('top',bx_top);


		

};



$(window).bind("load", function() {

	$('.flatbtn , #lean_overlay').click(function(){
		$('#lean_overlay').toggle();
  		$('.linetop').toggleClass("line-top");
  		$('.linemet').toggleClass("line-meat");
  		$('.linebot').toggleClass("line-bottom");
  	});

	//  $('.icon-llama , .icon').click(function(){
	// 	$('#seracn').toggle({
	// 		duration:500,
	// 		opacity:"-=.1",
	// 	});
	// })


  	$(this).scroll(function(){
		if ($(this).scrollTop()>80) {
			$('.gtop').animate({opacity:0.5},0);
		}
		else{
			$('.gtop').animate({opacity:0},0);
		}
	});
  	$('.gtop').bind({
  		click:function () {
  			$(this).animate({'scrollTop':0},100);
  		}
  	});
});  



//xuanxiang
function TabSwitch(id) {
		var _this=this;
		var oDiv=document.getElementById(id);
		this.aBtn=oDiv.getElementsByTagName('ol');
		this.aDiv=oDiv.getElementsByTagName('div');

		for (var i = 0; i < this.aBtn.length; i++) {
			this.aBtn[i].index=i;
			this.aBtn[i].onclick=function(){
				_this.fnBtn(this);	
			} 
		}
};
TabSwitch.prototype.fnBtn=function(oBtn){
			for (var i = 0; i < this.aBtn.length; i++) {
					this.aBtn[i].className='tab-hd-con';
					this.aDiv[i].style.display="none";
				}
				$(oBtn).addClass("tab-active");
				this.aDiv[oBtn.index].style.display='block';
};

//Cookie
		function setCookie(name,value,daysToLive){
			var oDate=new Date();
			var cookie=name+"="+encodeURIComponent(value);
			if (typeof daysToLive ==="number")
				cookie += "; max-age="+(daysToLive*60*60*24);
			document.cookie=cookie;
		};

		function GetCookie(c_name){
			var all=document.cookie;
			if (all.length>0) {
				c_start=all.indexOf(c_name+'=');
				if (c_start!=-1) {
    				c_start=c_start + c_name.length+1 ;
    				c_end=document.cookie.indexOf(";",c_start);
    				if (c_end==-1) c_end=document.cookie.length;
    				return unescape(document.cookie.substring(c_start,c_end));
				};
			};
			return "";
		};