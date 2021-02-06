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

	 	const v1 = $("#pic1");
		$(v1).on('click',async () => {
			if (v1[0].src.match("lgton"))
			{
				v1[0].src = previous_path[0];
				chosen[0] = 0;			
			} 
			else 
			{
				previous_path[0] = v1[0].src;
				v1[0].src = "./images/lgton.png";
				chosen[0] = previous_path[0].substr(-6, 2);
			}
		});

		const v2 = $("#pic2");
		$(v2).on('click',async () => {
			if (v2[0].src.match("lgton"))
			{
				v2[0].src = previous_path[1];
				chosen[1] = 0;			
			} 
			else 
			{
				previous_path[1] = v2[0].src;
				v2[0].src = "./images/lgton.png";
				chosen[1] = previous_path[1].substr(-6, 2);
			}
		});

		const v3 = $("#pic3");
		$(v3).on('click',async () => {
			if (v3[0].src.match("lgton"))
			{
				v3[0].src = previous_path[2];
				chosen[2] = 0;			
			} 
			else 
			{
				previous_path[2] = v3[0].src;
				v3[0].src = "./images/lgton.png";
				chosen[2] = previous_path[2].substr(-6, 2);
			}
		});

		const v4 = $("#pic4");
		$(v4).on('click',async () => {
			if (v4[0].src.match("lgton"))
			{
				v4[0].src = previous_path[3];
				chosen[3] = 0;			
			} 
			else 
			{
				previous_path[3] = v4[0].src;
				v4[0].src = "./images/lgton.png";
				chosen[3] = previous_path[3].substr(-6, 2);
			}
		});

	$("#home").on("click", ()=>{window.location="./main_page.html"})


	$("#next_btn").on("click", ()=>{
		var last ="";

		for(var i=0;i<4;i++){		
			if(chosen[i]!=0){
				last += chosen[i]+"%";				
			}
		}

		if(count<2){
			window.location="test.html?id=2&q="+last;
		}
		else{
			var q_val = getQueryVariable("q");
			q_val += last;
			var res = q_val.split("%");


			db.collection("user").doc("aHmJnWcgapfKo1HyFU0bjh0cc0J2").set({likelist:res.slice(0,-1)})
		//db.collection("user").add({likelist:num})
		// 成功
		.then(function(docRef) {
			// window.location.href = 'パス名'; // 通常の遷移
			console.log("Document written");
		})
		// 例外
		.catch(function(error) {
			console.error("Error adding document: ", error);
		});
		setTimeout(()=>{window.location="./end.html"},2000);
		}
		//console.log(q_val);
		//console.log(res);

	}
	);



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

	function jump(){
		window.location = "end.html";
	}

});