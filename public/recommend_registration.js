$(document).ready(function(){

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

    // データを読み取る usersを全て取得し、logで出力
    db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().first}`);
            // pタグをid指定で書き換えている。
            // $("#test").html(doc.data().first)
            $('#test').append(`<li id="${doc.id}"><a href="./recommend_detail.html#${doc.id}">${doc.id}</a></li>`);
        });
    });

    $("#button01").on('click',function(){
        console.log("test")
        //   userコレクションに追加
        db.collection("users").add({
            first: "Ada",
            last: "Lovelace",
            born: 1815
        })
        // 成功
        .then(function(docRef) {
            window.location.href = 'パス名'; // 通常の遷移
            console.log("Document written with ID: ", docRef.id);
        })
        // 例外
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });

    });

});
 