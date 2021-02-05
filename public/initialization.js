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

    var parker1 = {number: 1,
        name: "parker1",
        color_vividness:  1,
        color_brightness: 2,
        formal:           8,
        decorative:       5,
        relaxed:          3,
        glossy:           7,
        smoothness:       3
    };
    var parker2 = {number: 2,
        name: "parker2",
        color_vividness:  2,
        color_brightness: 3,
        formal:           1,
        decorative:       3,
        relaxed:          3,
        glossy:           6,
        smoothness:       3
    };
    var sweat1 = {number: 3,
        name: "sweat1",
        color_vividness:  6,
        color_brightness: 6,
        formal:           3,
        decorative:       3,
        relaxed:          6,
        glossy:           4,
        smoothness:       7
    };
    var knit1 = {number:  4,
        name: "knit1",
        color_vividness:  4,
        color_brightness: 7,
        formal:           5,
        decorative:       5,
        relaxed:          8,
        glossy:           4,
        smoothness:       4
    };
    var knit2 = {number:  5,
        name: "knit2",
        color_vividness:  3,
        color_brightness: 3,
        formal:           5,
        decorative:       7,
        relaxed:          6,
        glossy:           3,
        smoothness:       6
    };
    var knit3 = {number:  6,
        name: "knit3",
        color_vividness:  3,
        color_brightness: 7,
        formal:           4,
        decorative:       6,
        relaxed:          7,
        glossy:           2,
        smoothness:       7
    };

    var shirt1 = {number: 7,
        name: "shirt1",
        color_vividness:  1,
        color_brightness: 9,
        formal:           7,
        decorative:       3,
        relaxed:          3,
        glossy:           7,
        smoothness:       4
    };
    var shirt2 = {number: 8,
        name: "shirt2",
        color_vividness:  7,
        color_brightness: 7,
        formal:           5,
        decorative:       5,
        relaxed:          3,
        glossy:           8,
        smoothness:       3
    };
    var shirt3 = {number: 9,
        name: "shirt3",
        color_vividness:  6,
        color_brightness: 6,
        formal:           4,
        decorative:       2,
        relaxed:          7,
        glossy:           4,
        smoothness:       8
    };
    var jacket1 = {number: 10,
        name: "jacket1",
        color_vividness:  1,
        color_brightness: 2,
        formal:           8,
        decorative:       5,
        relaxed:          3,
        glossy:           7,
        smoothness:       3
    };

    $("#button_init").on('click',function(){
        //   userコレクションに追加
        db.collection("clothes").doc("parker1").set(parker1)
        db.collection("clothes").doc("parker2").set(parker2)
        db.collection("clothes").doc("sweat1").set(sweat1)
        db.collection("clothes").doc("knit1").set(knit1)
        db.collection("clothes").doc("knit2").set(knit2)
        db.collection("clothes").doc("knit3").set(knit3)
        db.collection("clothes").doc("shirt1").set(shirt1)
        db.collection("clothes").doc("shirt2").set(shirt2)
        db.collection("clothes").doc("shirt3").set(shirt3)
        db.collection("clothes").doc("jacket1").set(jacket1)
        // 成功
        .then(function(docRef) {
            // window.location.href = 'パス名'; // 通常の遷移
            console.log("Document written");
        })
        // 例外
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    });

});