$(document).ready(async function(){

    var firebaseConfig = {
        apiKey: "AIzaSyBmO4dLGt5aasYgt9iIcnadjE21Hfw8RCE",
        authDomain: "recommend-app-c2184.firebaseapp.com",
        projectId: "recommend-app-c2184",
        storageBucket: "recommend-app-c2184.appspot.com",
        messagingSenderId: "630278469111",
        appId: "1:630278469111:web:04d2046960c64b4c432af2",
        measurementId: "G-8PSJ51KHDJ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    //   firebase.analytics();
    var db = firebase.firestore();

    //const auth = firebase.auth();

//===================DB setting above===================

	var previous_path = new Array();

	var chosen = [0,0,0,0];

		//get query val.
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

		$('.pic').on('click', function() {
			console.log($(this)[0].src)
			const src = $(this)[0].src;
			const id = parseInt($(this)[0].id.slice(3,4))-1;
			console.log(id);
			//$(this)[0].src = "./images/lgton.png";
			 if (src.match("lgton"))
			 {
				$(this)[0].src = previous_path[id];
			 	chosen[id] = 0;			
			 } 
			 else 
			 {
			 	previous_path[id] = $(this)[0].src;
			 	$(this)[0].src = "./images/lgton.png";
			 	chosen[id] = previous_path[id].substr(-6, 2);
			 }
			 console.log(chosen);
			 console.log(previous_path);
		});

		// const v2 = $("#pic2");
		// $(v2).on('click',async () => {
		// 	if (v2[0].src.match("lgton"))
		// 	{
		// 		v2[0].src = previous_path[1];
		// 		chosen[1] = 0;			
		// 	} 
		// 	else 
		// 	{
		// 		previous_path[1] = v2[0].src;
		// 		v2[0].src = "./images/lgton.png";
		// 		chosen[1] = previous_path[1].substr(-6, 2);
		// 	}
		// });

		// const v3 = $("#pic3");
		// $(v3).on('click',async () => {
		// 	if (v3[0].src.match("lgton"))
		// 	{
		// 		v3[0].src = previous_path[2];
		// 		chosen[2] = 0;			
		// 	} 
		// 	else 
		// 	{
		// 		previous_path[2] = v3[0].src;
		// 		v3[0].src = "./images/lgton.png";
		// 		chosen[2] = previous_path[2].substr(-6, 2);
		// 	}
		// });

		// const v4 = $("#pic4");
		// $(v4).on('click',async () => {
		// 	if (v4[0].src.match("lgton"))
		// 	{
		// 		v4[0].src = previous_path[3];
		// 		chosen[3] = 0;			
		// 	} 
		// 	else 
		// 	{
		// 		previous_path[3] = v4[0].src;
		// 		v4[0].src = "./images/lgton.png";
		// 		chosen[3] = previous_path[3].substr(-6, 2);
		// 	}
		// });

	$("#home").on("click", () => { window.location="./main_page.html" })

	$("#next_btn").on("click", async() => {
		var last ="";

		for(var i=0; i<4; i++) {		
			if(chosen[i] != 0) {
				last += chosen[i]+"%";				
			}
		}

		if(count<2) {
			window.location="test.html?id=2&q="+last;
		}

		else{
			var q_val = getQueryVariable("q");
			q_val += last;
			var res = q_val.split("%");

			try {
				const doc =	await db.collection("users").doc("aHmJnWcgapfKo1HyFU0bjh0cc0J2").set({like_list:res.slice(0,-1)})
				console.log("Document written");
				window.location="./end.html"
			} catch (error) {
				console.error("Error adding document: ", error);
			}
		}
	});



	//recent page num.
	var count = getQueryVariable("id");


	//show pic in order
	for(var i=0;i<4;i++){
		if(count==1){
			document.getElementById("pic"+String(i+1)).src = "./images/0"+(i+1)+".jpg";
		}else
		{
			document.getElementById("pic"+String(i+1)).src = "./images/0"+(i+5)+".jpg";			
		}			
	}    


	console.log(count);
	$("#process").html(count+"/2")

});