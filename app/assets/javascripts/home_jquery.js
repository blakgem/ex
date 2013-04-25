//=require jquery

$(function(){
	$("#Menu_home").hover(function(){$("#Menu_videos").css( 'top', '30px' );}, function(){$("#Menu_videos").css( 'top', '0px' );});
	$("#Menu_home").hover(function(){$("#Menu_blog").css( 'top', '60px' );}, function(){$("#Menu_blog").css( 'top', '0px' );});

	$("#Menu_videos").hover(function(){$("#Menu_videos").css( 'top', '30px' );}, function(){$("#Menu_videos").css( 'top', '0px' );});
	$("#Menu_videos").hover(function(){$("#Menu_blog").css( 'top', '60px' );}, function(){$("#Menu_blog").css( 'top', '0px' );});

	$("#Menu_blog").hover(function(){$("#Menu_videos").css( 'top', '30px' );}, function(){$("#Menu_videos").css( 'top', '0px' );});
	$("#Menu_blog").hover(function(){$("#Menu_blog").css( 'top', '60px' );}, function(){$("#Menu_blog").css( 'top', '0px' );});
});
