 
// ---二维码js---
$('.activity').mouseenter(function(){			
			$('.activity .activity-b').hide();
			$(this).children(".activity-b").show();
		});
		$('.activity').mouseleave(function(){
		$(this).children(".activity-b").hide();
		});
// ---切换div---
	   	$('.vote li').eq(0).children('.cover1').animate({'margin-top':'-160'},500);
			$('.vote li').eq(0).children('.cover').animate({'margin-top':'0px'},500);
			$('.vote li').mouseenter(function(){
				$('.vote li').children('.cover').animate({'margin-top':'100'},300);
				$('.vote li').children('.cover1').animate({'margin-top':'0px'},300);
				$(this).children('.cover1').animate({'margin-top':'-160'},300);
				$(this).children('.cover').animate({'margin-top':'0px'},0);
		});		
// --iphone手机视频--

		var mycars=new Array("picture/video1.mp4","picture/video2.mp4","picture/video1.mp4","picture/video2.mp4");
		$('.advantage-left-top').mouseenter(function(){
			$(this).children("span").css("background","#54c2fa");
			var img=$(this).children("span").children("img").attr("src");
			img=img.replace(".png","1.png");
			$(this).children("span").children("img").attr("src",img);	
		});
		$('.advantage-left-top').mouseleave(function(){
			$(this).children("span").css("background","#f7f7f7");		
			var img=$(this).children("span").children("img").attr("src");
			img=img.replace("1","");
			$(this).children("span").children("img").attr("src",img);
			var t=$(this).data("index");
			var src = mycars[t];
			$('video source').attr("src",src);
			document.getElementById("audio").load();
			$('#audio').get(0).play();
		});

//手机端布局
		i=0;
		  $('.menu').click(function(){
		    $('.oneall_nav,.establish').toggle();

		    if(i==0){
		      $(this).addClass("right");
		      $('.move').addClass("right");
		       $(this).html("<i class=\"fa fa-close chart2\"></i>");
		      i=1;
		    }else{
		      $(this).removeClass("right");
		      $('.move').removeClass("right");
		     $(this).html("<i class=\'fa fa-reorder chart\'></i>");
		      i=0;
		    }
		  })


// >>>>>>>>>>>>>>>>>>>>>>> help.html <<<<<<<<<<<<<<<<<<<<<<
//往标签身上加data属性，用来标记单机次数
$('.click_flag').attr("data",0);

$('.click_flag').click(function(){
	//获取标签身上的data值，用来判断显示隐藏
	var num = $(this).attr("data");
	//余数为0，添加向上箭头，同级别的.item_chikd显示
	if(num % 2 == 0 ){
		$(this).next().removeClass("fa-angle-down");
		$(this).next().addClass("fa-angle-up");
		$(this).parent().children(".item_child").hide(500);
	}else{
		//余数为1，添加向下箭头，同级别的.item_chikd隐藏
		$(this).next().addClass("fa-angle-down");
		$(this).next().removeClass("fa-angle-up");
		$(this).parent().children(".item_child").show(500);
	}
	//让data值加1
	$(this).attr("data",parseInt(num)+1);
})
// 点击 right_show 向content里面追加内容 ajax
function right_show(){
	// $(".content").html("<h1>我是追加的内容</h1>");
}
$('.item_child').click(function(){			
		$(this).addClass('class');
		$('.item_child').not($(this)).removeClass('class');
	});
// 距离顶部60px时 执行浏览器定位
$(window).scroll(function() {
	var height = $(document).scrollTop();
	if(height >= 95){
		$(".left").css({"position":"fixed","top":"60px"});
	}else{
		$(".left").css({"position":"static"});
	}
});


// 。。。。。tab 切换。。。。。
  // $('.tabs .hd > li').click(function(){
  //   var i = $(this).index();
  //   $(this).addClass('active').siblings().removeClass('active');
  //   $('.tabs .bd > div').eq(i).addClass('active').siblings().removeClass('active');
  // })
// --------------------------------------------