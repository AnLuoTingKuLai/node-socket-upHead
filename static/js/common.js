$(function(){
	$.ajaxSetup({
 		type: "POST",
 		dataType: "JSON",
 		contentType: "application/json; charset=utf-8",
 		error: function (jqXHR, textStatus, errorThrown) {
 			switch (jqXHR.status) {
 				case (500):
 					alert("服务器系统内部错误");
 					break;
 				case (401):
 					alert("未登录");
 					break;
 				case (403):
 					alert("无权限执行此操作");
 					break;
 				case (408):
 					alert("请求超时");
 					break;
 				default:
 					// alert("未知错误");
 			}
 		},
 		success: function (data) {
 			console.log("操作成功");
 		}
 	});
})