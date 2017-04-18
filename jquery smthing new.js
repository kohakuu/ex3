<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
<script>
var clickM = function() {
    var insertV = function () {$("button").html($("p:first").html())};
	$("div").toggle(500,insertV);
    alert($("p:first").html());
   	$("p:last").text("hi");
};

$(document).ready(function(){

    $("button").click(clickM);

});
</script>
</head>
<body>
<button>click </button>
<div class="a">
<p>If you click on me, I will disappear.</p>
<p>Click me away!</p>
<p>Click me too!</p>

</div>
</body>
</html>
