  $(document).ready(function () {
	  
	  TabInit = function(){
	  $("#sample-table").bootstrapTable('destroy');
	    $('#sample-table').bootstrapTable({
			url : '/getAllusers',
			contentType : "application/x-www-form-urlencoded; charset=UTF-8",
			dataType : "json",
			method : 'post',
			striped : true,
			pagination: true,
			queryParams : queryParams,
			sidePagination : "server",
			pageNumber: 1,  
	        pageSize: 8, 
	        pageList: [8,15,30,50], 
	        paginationPreText: "上一页",
	        paginationNextText: "下一页",
	        onLoadSuccess : function(data) {
			//console.log(data.rows+"data1");
				
			},
			columns : [
					{
						field : 'id',
						title : '序号',
						formatter : function(value, row,
								index) {
							return index + 1;
						}
					},{
						field : 'usercode',
						title : '学生编号'
					},{
						field : 'username',
						title : '学生姓名'
					},
					{
						field : 'sex',
						title : '性别'
					},
					{
						field : 'age',
						title : '年龄'
					},
					{
						field : 'major',
						title : '专业'
					},{
		            	field:'',
		            	title:'操作',
		                formatter: function(value, row, index){
	return '<a class="btn btn-primary" onclick="deleteUserinfo(\''+row.usercode+'\')" class="btn btn-primary btn-sm">删除</a>&nbsp;<a class="btn btn-primary" onclick="updateUserinfo(\''+row.usercode+'\')" class="btn btn-primary btn-sm">编辑</a>&nbsp;<a class="btn btn-primary" onclick="insertUserinfo()" class="btn btn-primary btn-sm">添加</a>' ;
		                }
		            }]
		});
	  
	    function queryParams(params) {
	        return {
	        	 pageSize: params.limit,
		         pageIndex: params.offset,
	        };
	    };
	    deleteUserinfo = function(usercode){
			var usercode = usercode;
			var index=layer.open({
				content: '是否确认要进行此操作？',
				btn: ['确认', '取消'],
				shadeClose: false,
				yes: function()
				{
					layer.close(index);		
					GfyShadow.open();
					var url = "/deleteUserinfo";	
					$.ajax({
						type: "POST",
						url: url,
						async: false,
						data: {
							"usercode":usercode,   
						},
						success: function(data){
							GfyShadow.close();
							if(data==1)
							{
							alert("删除成功");					
							}else{
							alert("删除异常");			
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
		insertUserinfo = function(){
			window.location.href = "/userinfo/addUserinfo.html";
		}
		
		updateUserinfo	=  function(usercode){
			
			var usercode = usercode;
			layer.open({
				type: 2,
				title: '学生'+usercode+'的详细信息',
				shadeClose: false,
				shade: 0.8,
				maxmin: true, 
				area: ['883px', '350px'],
				content: '/userinfo/updateUserinfo.html?usercode='+usercode+'',
		});
			};
			
	    
	    
	    
	    
	    
	  }

	  TabInit();  
	  this.search= function(majorcode,majorname){
		  alert(majorcode);
		  TabInit(); 
		  
	  }
	  
	  
	  
  });