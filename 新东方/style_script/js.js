//新东方百日行动派

$(function(){
	var div1="<div class='img_grid01_grid_masking'></div>",div_loading="<div class='loading'>Loading.....</div>",
		win_w=$(window).width(),win_h=$(window).height(),header_h=win_h*0.05;
		$("#box").height(win_h);
		$(".img_grid01_sidebar").height((win_h-header_h)/4);
		
		$(".img_grid01_sidebar").css({
			"max-height":"192px",
			"min-height":"160px"
		});
		$("#main").css("min-height",win_h-header_h);
		if (win_w>780&&win_h<900) {
			$(".main_container,.header_con").css("width","740px");
			$(".img_grid01_sidebar").css("min-height","0");
			if(win_w>780&&win_h<600){
				$(".main_container").css("width","680px");
			}
		}
	
	if(!!window.ActiveXObject || "ActiveXObject" in window) { 
            $("body").append(div_loading);//IE
        }
	setTimeout(function(){
			$(".img_grid01_0").addClass("fadein");
		},1000);
		setTimeout(function(){
			$(".img_grid01_1").addClass("fadein");
		},2000);
		setTimeout(function(){
			$(".img_grid01_2,.kv2_grid_img3").addClass("fadein");
			$(".kv2_grid_img3").addClass("kv2_grid_img3_play");
		},2200);
		setTimeout(function(){
			$(".img_grid01_3,.kv2_grid_img4").addClass("fadein");
			$(".box_bg").css("display","none");
		},2700);
		setTimeout(function(){
			$(".img_grid01_4,.kv2_grid_img1").addClass("fadein");
		},1400);
		setTimeout(function(){
			$(".img_grid01_5").addClass("fadein");
		},1800);
		setTimeout(function(){
			$(".img_grid01_6").addClass("fadein");
		},3400);
		setTimeout(function(){
			$(".img_grid01_7,.kv2_grid_img2").addClass("fadein");
		},2100);
		setTimeout(function(){
			$(".img_grid01_8").addClass("fadein");
		},2200);
		setTimeout(function(){
			$(".img_grid01_9,.kv2_grid_img5").addClass("fadein");
		},3000);
	if(win_w<800){
		setTimeout(function(){
			$(".hand").fadeOut(1000);
			
		},2000);
		$(".img_grid01_grid").click(function(){
			var ttt=$(this).find("img").attr('src');
			$(".pop_up").css("z-index","9");
			$(".pop_up_grid").append("<img src='images/"+ttt.substring(8)+"' class='pop_up_img'>");
		});
		$(".pop_up_x").click(function(){
			$(".pop_up").css("z-index","-1");
			$(".pop_up_img").remove();
		});
	}
	if(win_w>800){
		$(".pop_up").css("background","none");
		$(".pop_up_x").remove();
		$(".img_grid01_grid").hover(function(){
		    $(this).append(div1).addClass("transform");
		},function(){
		    $(".img_grid01_grid div").remove(".img_grid01_grid_masking");
		    $(this).removeClass("transform");
		});
		
		$(".img_grid01_grid_style").mouseover(function(){
			var gg=$(".img_grid01_7").offset(top);
			var ttt=$(this).find("img").attr('src');
			$(".main_container").append("<div class='pop_up_grid2 img_grid01_grid_style'></div>");
			$(".pop_up_grid2").css("z-index","9");
			$(".pop_up_grid2").append("<img src='images/"+ttt.substring(8)+"' class='pop_up_img'>");
		});

		$(".img_grid01_grid_style").mouseout(function(){
			$(".pop_up_grid2").css("z-index","-11");
			$(".pop_up_grid2,.pop_up_img,.pop_up").remove();
			
		});
	}
	$(window).resize(function(){
		var res_win_height=$(window).height();
		$("#box").height(res_win_height);
	});
	function setTime(){
		
		/*setTimeout(function(){
			$(".img_grid01_10").addClass("fadein");
		},1600);*/
	}
	setTimeout(function(){
		$(".loading").html(" ").fadeOut(500);
	},800);
});

//wuxc20190310



