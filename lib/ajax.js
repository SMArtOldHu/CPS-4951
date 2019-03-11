
//readyState==0	（未初始化）还没有调用open()方法
//readyState==1	（载入）已调用send()方法，正在发送请求
//readyState==2	（载入完成）send()方法已经完成，已收到全部响应内容
//readyState==3	（解析）正在解析响应内容
//readyState==4	（完成）响应内容解析已经完成，可以在客户端调用了
function MyAjax(inputData,fn)
{
	$.ajax({
		type: "post",
		url:"http://" + inputData.server_address + inputData.api_address,
		contentType: "application/json;charset=utf-8",
		data : inputData.data,
		dataType: "json",
		beforeSend: function (XMLHttpRequest) {
			//XMLHttpRequest.setRequestHeader("Authorization", getCookie('token'));
		},
		success: function (data) {

			if(data['status'] =='success' )
			{
				//alert(JSON.stringify(data));

				if(fn)
				{
					fn(data);
				}
			}
			else if(data['status'] =='fail' )
			{
				window.location.assign('login.html');
			}
			else
			{
				alert(data.msg);
			}
		},error:function(error){
			console.log(error);
		}
	});
}