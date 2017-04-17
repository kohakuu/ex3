liClick = function(){
	var menu = $("#header").html();
	alert(menu);
	
	$("#content").html(menu);
	$("content").show();
	$("#content").slideUp(4000, function(){
		alert("cafsfasf");
	})
}

$(document).ready(function(){
	$("li").click(liClick);
	
});