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


    // データ取得
    // db.collection("clothes").get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         console.log(`${doc.data().name} => ${doc.data().number}`);
    //         console.log(doc.data().color_vividness)
    //         console.log(doc.data().color_brightness)
    //         console.log(doc.data().formal)
    //         console.log(doc.data().decorative)
    //         console.log(doc.data().relaxed)
    //         console.log(doc.data().glossy)
    //         console.log(doc.data().smoothness)
    //     });
    // });

    // db.collection("clothes").get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         console.log(`${doc.data().name} => ${doc.data().number}`);
    //         console.log(doc.data().color_vividness)
    //         console.log(doc.data().color_brightness)
    //         console.log(doc.data().formal)
    //         console.log(doc.data().decorative)
    //         console.log(doc.data().relaxed)
    //         console.log(doc.data().glossy)
    //         console.log(doc.data().smoothness)
    //     });
    // });


    let like_list = ["parker1", "shirt1", "jacket1"];

    const calc_avg = async (like_list) => {
        let sum_color_vividness = 0;
        let sum_color_brightness = 0;
        let sum_formal = 0;
        let sum_decorative = 0;
        let sum_relaxed = 0;
        let sum_glossy = 0;
        let sum_smoothness = 0;
        
        const querySnapshot = await db.collection("clothes").get();
        
        querySnapshot.forEach(doc => {
            const data = doc.data();
            if (like_list.includes(doc.id)) {
                sum_color_vividness += parseInt(data.color_vividness, 10);
                sum_color_brightness+= parseInt(data.color_brightness, 10);
                sum_formal += parseInt(data.formal, 10);
                sum_decorative += parseInt(data.decorative, 10);
                sum_relaxed += parseInt(data.relaxed, 10);
                sum_glossy += parseInt(data.glossy, 10);
                sum_smoothness += parseInt(data.smoothness, 10);
            }
        });
        
        // console.log(sum_color_vividness);
        // console.log(sum_color_vividness / like_list.length);
        const avg_color_vividness = sum_color_vividness / like_list.length;
        const avg_color_brightness = sum_color_brightness / like_list.length;
        const avg_formal = sum_formal /like_list.length;
        const avg_decorative = sum_decorative /like_list.length;
        const avg_relaxed = sum_relaxed /like_list.length;
        const avg_glossy = sum_glossy /like_list.length;
        const avg_smoothness = sum_smoothness /like_list.length;
        return ({
            avg_color_vividness,
            avg_color_brightness,
            avg_formal,
            avg_decorative,
            avg_relaxed,
            avg_glossy,
            avg_smoothness
        });
    };
    const like_list_avg = await calc_avg(like_list);
    console.log(like_list_avg);

    const recommend_clothes = async (like_list) => {
        // clothes 全て見て、おすすめの服のidをreturn

    }
    
});