
(function($){
		$.userinfo = function(){
			var Myobj = this;
			submit = function(){
				var index=layer.open({
					content: '是否确认要添加此学生？',
					btn: ['确认', '取消'],
					shadeClose: false,
					yes: function()
					{
						layer.close(index);		
						GfyShadow.open();
						Myobj.submitType = 2;
						var url = "/insertUserinfo";	
						$.ajax({
							type: "POST",
							url: url,
							async: true,
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
								alert("插入成功");					
								}
								else{
									alert("插入异常");
								}
							}	
						});

					}, 
					no: function()
					{
						
						//这里是取消事件不需要写任何代码 Layer.open 会自动关闭
					}
			});
			};
			cancel = function()
			{
			
				layer.confirm('是否清空所有信息', function(index) {
					if(1){
						$("#usercode").val("");
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



