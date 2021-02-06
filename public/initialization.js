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

    // 好み推定用
    var parker1 = {number: 1,
        name: "parker1",
        color_vividness:  4,
        color_brightness: 8,
        formal:           2,
        decorative:       3,
        relaxed:          6,
        glossy:           4,
        smoothness:       7
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

    // レコメンド用
    var parker11 = {number: 11,
        name: "parker11",
        color_vividness:  6,
        color_brightness: 6,
        formal:           2,
        decorative:       3,
        relaxed:          6,
        glossy:           4,
        smoothness:       7
    };
    var parker12 = {number: 12,
        name: "parker12",
        color_vividness:  2,
        color_brightness: 8,
        formal:           1,
        decorative:       3,
        relaxed:          3,
        glossy:           6,
        smoothness:       3
    };
    var sweat11 = {number: 13,
        name: "sweat11",
        color_vividness:  3,
        color_brightness: 6,
        formal:           1,
        decorative:       6,
        relaxed:          6,
        glossy:           4,
        smoothness:       7
    };
    var knit11 = {number:  14,
        name: "knit11",
        color_vividness:  4,
        color_brightness: 4,
        formal:           7,
        decorative:       5,
        relaxed:          4,
        glossy:           4,
        smoothness:       4
    };
    var knit12 = {number:  15,
        name: "knit12",
        color_vividness:  2,
        color_brightness: 8,
        formal:           5,
        decorative:       7,
        relaxed:          6,
        glossy:           3,
        smoothness:       6
    };
    var knit13 = {number:  16,
        name: "knit13",
        color_vividness:  3,
        color_brightness: 4,
        formal:           6,
        decorative:       6,
        relaxed:          3,
        glossy:           2,
        smoothness:       7
    };

    var shirt11 = {number: 17,
        name: "shirt11",
        color_vividness:  8,
        color_brightness: 7,
        formal:           2,
        decorative:       3,
        relaxed:          6,
        glossy:           7,
        smoothness:       4
    };
    var shirt12 = {number: 18,
        name: "shirt12",
        color_vividness:  7,
        color_brightness: 7,
        formal:           2,
        decorative:       5,
        relaxed:          3,
        glossy:           8,
        smoothness:       3
    };
    var shirt13 = {number: 19,
        name: "shirt13",
        color_vividness:  2,
        color_brightness: 2,
        formal:           1,
        decorative:       2,
        relaxed:          7,
        glossy:           4,
        smoothness:       8
    };
    var jacket11 = {number: 20,
        name: "jacket11",
        color_vividness:  1,
        color_brightness: 2,
        formal:           8,
        decorative:       5,
        relaxed:          2,
        glossy:           7,
        smoothness:       3
    };
    // const user_2 = {number: 22,
    //     name: "user2",
    //     color_vividness:  0,
    //     color_brightness: 0,
    //     formal:           0,
    //     decorative:       0,
    //     relaxed:          0,
    //     glossy:           0,
    //     smoothness:       0
    // };


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
        db.collection("clothes_recommend").doc("parker11").set(parker11)
        db.collection("clothes_recommend").doc("parker12").set(parker12)
        db.collection("clothes_recommend").doc("sweat11").set(sweat11)
        db.collection("clothes_recommend").doc("knit11").set(knit11)
        db.collection("clothes_recommend").doc("knit12").set(knit12)
        db.collection("clothes_recommend").doc("knit13").set(knit13)
        db.collection("clothes_recommend").doc("shirt11").set(shirt11)
        db.collection("clothes_recommend").doc("shirt12").set(shirt12)
        db.collection("clothes_recommend").doc("shirt13").set(shirt13)
        db.collection("clothes_recommend").doc("jacket11").set(jacket11)
        // db.collection("users").doc("aHmJnWcgapfKo1HyFU0bjh0cc0J2").set(user_2)


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

    const get_like_list = async (user_id) => {
        const querySnapshot = await db.collection("users").get();
        let like_list;
        querySnapshot.forEach(doc => {
            const data = doc.data();
            if (doc.id == user_id) {
                like_list = data.like_list;
            };
            console.log(data.name)
            console.log(like_list)
        });
        return like_list;
    };

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
    // 商品の中からおすすめを選択し、idで表示。
    const recommend_clothes = async (like_list_avg) => {
        const querySnapshot = await db.collection("clothes_recommend").get();
        let minimum_cost = 10000;
        let recommend_id = "";
        let recommend_num = 0;

        querySnapshot.forEach(doc => {
            const data = doc.data();
            let cost = 0;
            cost += Math.abs(like_list_avg.avg_color_brightness - parseInt(data.color_brightness, 10));
            cost += Math.abs(like_list_avg.avg_color_vividness - parseInt(data.color_vividness, 10));
            cost += Math.abs(like_list_avg.avg_formal - parseInt(data.formal, 10));
            cost += Math.abs(like_list_avg.avg_decorative - parseInt(data.decorative, 10));
            cost += Math.abs(like_list_avg.avg_relaxed - parseInt(data.relaxed, 10));
            cost += Math.abs(like_list_avg.avg_glossy - parseInt(data.glossy, 10));
            cost += Math.abs(like_list_avg.avg_smoothness - parseInt(data.smoothness, 10));
            if (cost < minimum_cost) {
                minimum_cost = cost;
                recommend_id = doc.id;
                recommend_num = data.number;
            };
        });
        return recommend_num;
    };

    // usersのidを引数に、like_listにアクセス。
    // const like_list = await get_like_list("7Y65aOJGorqY7ELWdSBP")
    const like_list = await get_like_list("aHmJnWcgapfKo1HyFU0bjh0cc0J2")

    // like_listから、
    const like_list_avg = await calc_avg(like_list);
    console.log("calc_average")
    console.log(like_list_avg);

    const recommend_num = await recommend_clothes(like_list_avg);
    console.log("recommend id is")
    console.log(recommend_num);

    // おすすめ商品を表示する関数
    $('#next_button').on('click', function() {
        $('#pic_field').html(
            `
            <div id ="up" style="text-align:center">
            <p>Recommend For You!!</p>
            <img src="./images/${recommend_num}.jpg" alt="${recommend_num}" width = "640" height ="640">
            <p>Recommend機能をご利用いただきありがとうございます。</p>
            <p>表示されている商品に限り、5%OFFでご提供させていただきます。</p>
            <p>また、店舗購入でさらに10%OFFで購入できます！</p>
            <input id="home_button" type="button" value="Home"/>
            </div>
            `
        );
    });
});