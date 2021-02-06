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

    const get_like_list = async (user_id) => {
        const querySnapshot = await db.collection("users").get();
        let like_list;
        querySnapshot.forEach(doc => {
            const data = doc.data();
            if (doc.id == user_id) {
                like_list = data.like_list;
            };
            // console.log(data.name)
        });
        console.log(like_list)        
        return like_list;
    };

    const calc_avg = async (like_list) => {
        console.log("calc_avg")
        let sum_color_vividness = 0;
        let sum_color_brightness = 0;
        let sum_formal = 0;
        let sum_decorative = 0;
        let sum_relaxed = 0;
        let sum_glossy = 0;
        let sum_smoothness = 0;
        
        const querySnapshot = await db.collection("clothes").get();

        try {
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
        }
        catch(e) {
            console.log("user情報にアクセスできませんでした。")        
        };
        $('#pic_field').html(
            `
            <div id ="up" style="text-align:center">
            <p>Recommend機能をご利用いただきありがとうございます。</p>
            <p>ホーム画面からお気に入り画像を選んでください！</p>
            <p>お客様の好みに基づいたおすすめ商品をご紹介します！</p>
            </div>
            `
        );

        console.log(like_list.length);
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

    const like_list = await get_like_list("aHmJnWcgapfKo1HyFU0bjh0cc0J2")
    // like_listあり・選択なし
    // const like_list = await get_like_list("yWJ3pPFrtiQY99iFX874")
    // like_listなし
    // const like_list = await get_like_list("4rV18PXYSej1MXP0kEt9")

    // like_listから好みを数値化
    const like_list_avg = await calc_avg(like_list);
    console.log(like_list_avg);

    const recommend_num = await recommend_clothes(like_list_avg);
    console.log(recommend_num);

    $('#pic_field').html(
        `
        <div id ="up" style="text-align:center">
        <p>Recommend For You!!</p>
        <img src="./images/${recommend_num}.jpg" alt="${recommend_num}" width = "640" height ="640">
        <p>Recommend機能をご利用いただきありがとうございます。</p>
        <p>表示されている商品に限り、5%OFFでご提供させていただきます。</p>
        <p>また、店舗購入でさらに10%OFFで購入できます！</p>
        </div>
        `
    );
    $("#home_button").on('click',function(){
        console.log("test")
        window.location.href = './main_page.html'; // 通常の遷移
    });
});
