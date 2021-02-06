	var previous_path = new Array();

	var chosen = new Array();

	function chooseImg(id,src){

		element = document.getElementById(id)
		if (element.src.match("lgton"))
		{
			element.src = previous_path[id];
			chosen[id.slice(3)] = 0;			
		} 
		else 
		{
			previous_path[id] = src;
			element.src = "../images/lgton.jpg";
			chosen[id.slice(3)] = 1;
		}
	 }

	function show(){
		var total;
		total = "";			
		for (var i=0;i<=chosen.length;i++){
			if (chosen[i] == 1){
			total += String(i);			
			}			
		}
		if (total != ""){
			alert(total);			
		}			
		//console.log(total);		
	}
	

	function getQueryVariable(variable)
	{
	    var query = window.location.search.substring(1);
	    var vars = query.split("&");
	    for (var i=0;i<vars.length;i++) {
	        var pair = vars[i].split("=");
	        if(pair[0] == variable){return pair[1];}
	    }
	    return(false);
	}


	var count = getQueryVariable("id");

	function Next(){
		if(count==NaN||count==false){
			window.location = "test.html?id=2";	
		}
		else{
			if (count<2){			
				count = parseInt(count)+1;
				window.location = "test.html?id="+count;
			}
			else
			{
				window.location = "end.html";
			}	
		}	
	}
	