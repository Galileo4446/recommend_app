$(document).ready(() => {
	let uid = '';
	const firebaseConfig = {
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
	const auth = firebase.auth();
	//console.log(auth);
  	const db = firebase.firestore();

	auth.onAuthStateChanged(async (user) => {
		if (user) {
			//console.log(user);
			//console.log(user.uid);
			uid = user.uid;
			const doc = await db.collection("user").doc(user.uid).get()
			const userData = doc.data()
			console.log(userData);
			
			//document.getElementById("login_btn").innerHTML("herf") = "";
			

		} else {
			// User is signed out
      		//location.href = './login2.html'; // 通常の遷移
		}
	});
	
	$("#cat_menu").click(function(){
		$("#menu1").fadeToggle(300);
		$("#menu2").fadeToggle(350);
		$("#menu3").fadeToggle(400);
		$("#menu4").fadeToggle(450);
	});
});