$.ajaxSetup({ 
	
		contentType : "application/x-www-form-urlencoded;charset=utf-8", 
		complete : function(XMLHttpRequest, textStatus) { 
			var sessionstatus = XMLHttpRequest.getResponseHeader("sessionstatus"); // 通过XMLHttpRequest取得响应头，sessionstatus， 
			if (sessionstatus == "timeout") { 
				// 如果超时就处理 ，指定要跳转的页面 
				alert("网页过期，请重新登录！");
				window.location.replace("/StudentPlanSystem/goLogIn"); 
			} 
		} 
	}); 

$(function(){
	var date = new Date();
	var str = ""+date+"";
	str = str.replace(/ GMT.+$/, '');// Or str = str.substring(0, 24)
	var d = new Date(str);
	var a = [d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds()];
	for(var i = 0, len = a.length; i < len; i ++) {
	    if(a[i] < 10) {
	        a[i] = '0' + a[i];
	    }
	}
	str = a[0] + '-' + a[1] + '-' + a[2] + ' ' + a[3] + ':' + a[4] + ':' + a[5];
	$("#datetime").val(str);
})

/**
 * 
 * @param obj bootstrap表单对象
 * @param num 距离结束时间的是第几列
 * @param state 状态是第几列
 */
function CountDown(obj,num,state)
{
	var result = obj; 
	for(var i = 1; i < result[0].rows.length; i++){
		var row = result[0].rows[i];
		for(var j = 0; j < row.cells.length; j++)
		{
			if(j == num){ 
				var value = row.cells[j-1].innerText; 
				var year = value.substring(0,4);
        		var month = value.substring(5,7);
        		var day = value.substring(8,10);
        		var shi = value.substring(11,13);
        		var fen = value.substring(14,16);
        		var miao = value.substring(17,19);
        		var now = new Date(); 
        		var endDate = new Date(year, month-1, day,shi,fen,miao); 
        		if(now > endDate){
        			row.cells[j].innerHTML = '<span style="color:red;">已超时</span>';
        		}else{
            		var leftTime = endDate.getTime()-now.getTime(); 
            		var leftsecond = parseInt(leftTime/1000); 
            		//var day1=parseInt(leftsecond/(24*60*60*6)); 
            		var day1=Math.floor(leftsecond/(60*60*24)); 
            		var hour=Math.floor((leftsecond-day1*24*60*60)/3600); 
            		var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60); 
            		var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60); 
            		if(day1 == 0){
            			row.cells[j].innerHTML = '<span style="color:red;">'+hour+"小时"+minute+"分"+second+"秒"+'</span>';
            			continue;
            		}else{
            			row.cells[j].innerHTML = '<span style="color:red;">'+day1+"天"+hour+"小时"+minute+"分"+second+"秒"+'</span>';
            			continue;
            		}
            		if(hour == 0){
            			row.cells[j].innerHTML = '<span style="color:red;">'+minute+"分"+second+"秒"+'</span>';
            			continue;
            		}else{
            			row.cells[j].innerHTML = '<span style="color:red;">'+hour+"小时"+minute+"分"+second+"秒"+'</span>';
            			continue;
            		}
            		if(minute == 0){
            			row.cells[j].innerHTML = '<span style="color:red;">'+second+"秒"+'</span>';
            			continue;
            		}else{
            			row.cells[j].innerHTML = '<span style="color:red;">'+minute+"分"+second+"秒"+'</span>';
            			continue;
            		}
            		
        		} 
			}
			if(j == state){
				var value = row.cells[j].innerText;
				if(value == "补录完成" || value == "无效工单" || value == "已处理" || value == "已驳回" || value == "已上报" || value == "已同意" || value == "已催办" || value == "已问责" || value == "已回复"){
					row.cells[j-1].innerHTML = '<span>-</span>';
				}
			}
		}
	} 
}
