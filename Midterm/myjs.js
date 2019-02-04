$(function(){

	var $frenchtxt=$("#french");

	$("button").on("click",function(){

		$.ajax({
			type: 'GET',
			url: 'https://jsonplaceholder.typicode.com/todos',
			success: function(data){
				console.log("french")
				$.each(data, function(i, data){
					$frenchtxt.append('<p>'+data.title+'</p>')
				});
			}
		});
	});
});