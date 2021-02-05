	function ChooseOwn(){
		window.location ="test.html?id=1";	
	}
	
	$(document).ready(function(){
		$("#cat_menu").click(function(){
			$("#menu1").fadeToggle(300);
			$("#menu2").fadeToggle(350);
			$("#menu3").fadeToggle(400);
			$("#menu4").fadeToggle(450);

		});
	});