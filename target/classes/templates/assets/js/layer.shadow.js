(function($){
	
	$.layerShadow = function(){
		
		this.createDom = function(){
			var shadow = $("<div id='layer_shadow'></div>"),
			  span = $("<span>正在处理.....</span>");
			shadow.css({'position':'fixed','top':'0','width':'100%','height':'100%','font-size':'24px','font-family':'monospace','color':'#FFF','background-color':'#000','opacity':'0.7','z-index':'20180310','display':'none'});
			shadow.append(span);
			$("body").append(shadow);
		}
		
		
		this.open = function(){
			$("#layer_shadow").css("display","");
		}
		
		this.close = function(){
			$("#layer_shadow").css("display","none");
		}
		
	}
	
})(jQuery)

var GfyShadow = new jQuery.layerShadow();

$(function(){	
	GfyShadow.createDom();
})