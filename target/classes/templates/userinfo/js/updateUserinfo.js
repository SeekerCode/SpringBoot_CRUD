(function($){
	
	   function QueryString (name)
       {
           var reg = new RegExp("(^|\\?|&)"+ name +"=([^&]*)(\\s|&|$)", "i");
           if (reg.test(location.href)) return unescape(RegExp.$2.replace(/\+/g, " ")); return "";
       }
	   
		$.userinfo = function(){
			
			var usercode=QueryString("usercode");
			var Myobj = this;
			this.SelectUsersInit = function(){
				$.ajax({
					url:"/getUserinfo",
					type:"post",
					dataType:"json",
					async: false,
					data:{
						"usercode":usercode
					},
					success: function(data){
						if(data.size == 0){
							return;
						}else{
							$("#usercode").val(data[0].usercode);
							$("#username").val(data[0].username);						
							$("#sex").val(data[0].sex);
							$("#age").val(data[0].age);
							$("#major").val(data[0].major)
						}
					},
					error:function(){
						alert("error2");
					}
				});
			};
			submit = function(){
				var index=layer.open({
					content: '是否确认要进行此操作？',
					btn: ['确认', '取消'],
					shadeClose: false,
					yes: function()
					{
						layer.close(index);		
						GfyShadow.open();
						Myobj.submitType = 2;
						var url = "/updateUserinfo";	
						$.ajax({
							type: "POST",
							url: url,
							async: false,
							data: {
								"usercode":$("#usercode").val(),   
								"username":$("#username").val(),
								"sex":$("#sex").val(),
								"age":$("#age").val(),
								"major":$("#major").val()
								
							},
							success: function(data){
								
								GfyShadow.close();
								if(data==1)
								{
								$("#submit").hide();	
								$("#cancel").hide();
								alert("更新成功");					
								}else{
								alert("更新异常");			
								}	}	
						});
					}, 
					no: function()
					{  }
			});
			};
			cancel = function()
			{
			
				layer.confirm('是否清空所有信息', function(index) {
					if(1){
						$("#username").val("");
						$("#sex").val("");
						$("#age").val("");
						$("#major").val("")
					}
					else{
					};

					layer.close(index);		
				});  
			};
			
		}		

})(jQuery);

var users = new jQuery.userinfo();
$(function(){
	users.SelectUsersInit();

});

function outPost()
{
	var usercode = $("#usercode").val();
	 
}
