function getAPI() {

    const request = new XMLHttpRequest();
    var text = document.form.text.value;
    if (text == "") {
        alert("文章を入力してください。");
        return;
    }
    var base_url = "http://ap.mextractr.net/ma9/emotion_analyzer";
    var apikey = "APIkey";
    var text = encodeURI(text)
    var out = "json";

    var check = "[";

    url = base_url + "?apikey=" + apikey + "&out=" + out + "&text=" + text;

    request.open("GET", url);
    request.addEventListener("load", (event) => {
        //console.log(event)
        if (event.target.status !== 200) {
            console.log(`${event.target.status}: ${event.target.statusText}`);
            return;
        }
        console.log(event.target.status);
        var result = decodeURI(event.target.responseText);
        console.log(result);

        var str = result;
        var colon = 0;
        var comma = 0;

        colon = str.indexOf(":", 0);
        comma = str.indexOf(",", 0);

        var ll = str.slice(colon + 1, comma);

        colon = str.indexOf(":", colon + 1);
        comma = str.indexOf(",", comma + 1);

        var js = str.slice(colon + 1, comma);

        colon = str.indexOf(":", colon + 1);
        comma = str.indexOf(",", comma + 1);

        var af = str.slice(colon + 1, comma);

        ll = parseInt(ll);
        js = parseInt(js);
        af = parseInt(af);

        console.log(ll, js, af);

        //ll,js,afそれぞれの説明と色の画像を載せる
        if (ll >= 1 && js >= 1 && -1 < af && af < 1) {
            //愛 ピンク
            var pic = document.getElementById("pic");
            pic.setAttribute("src", "./pink.jpg");
            console.log("愛 ピンク");

        } else if (-1 < ll && ll < 1 && js <= -1 && -1 < af && af < 1) {
            //悲しみ　青
            var pic = document.getElementById("pic");
            pic.setAttribute("src", "./blue.jpg");
            console.log();

        } else if (-1 < ll && ll < 1 && -1 < js && js < 1 && af <= -1) {
            //恐れ　黒
            var pic = document.getElementById("pic");
            pic.setAttribute("src", "./black.jpg");
            console.log("悲しみ　青");

        } else if (ll >= 1 && -1 < js && js < 1 && -1 < af && af < 1) {
            //信頼　オレンジ
            var pic = document.getElementById("pic");
            pic.setAttribute("src", "./orange.jpg");
            console.log("信頼　オレンジ");

        } else if (-1 < ll && ll < 1 && js >= 1 && -1 < af && af < 1) {
            //喜び　黄色
            var pic = document.getElementById("pic");
            pic.setAttribute("src", "./yellow.jpg");
            console.log("喜び　黄色");

        } else if (ll <= -1 && -1 < js && js < 1 && -1 < af && af < 1) {
            //嫌悪　紫
            var pic = document.getElementById("pic");
            pic.setAttribute("src", "./purple.jpg");
            console.log("嫌悪　紫");

        } else if (-1 < ll && ll < 1 && -1 < js && js < 1 && af >= 1) {
            //怒り　赤
            var pic = document.getElementById("pic");
            pic.setAttribute("src", "./red.jpg");
            console.log("怒り　赤");

        } else if (ll >= 1 && -1 < js && js < 1 && af <= -1) {
            //服従　オレンジ×黒
            var pic = document.getElementById("pic");
            pic.setAttribute("src", "./darkbrown.jpg");
            console.log("服従　オレンジ×黒");

        } else if (ll <= -1 && js <= -1 && -1 < af && af < 1) {
            //後悔 青×紫
            var pic = document.getElementById("pic");
            pic.setAttribute("src", "./purpleblue.jpg");
            console.log("後悔 青×紫");

        } else if (ll <= -1 && -1 < js && js < 1 && af >= 1) {
            //軽蔑　紫×赤
            var pic = document.getElementById("pic");
            pic.setAttribute("src", "./redpurple.jpg");
            console.log("軽蔑　紫×赤");

        }

    });
    request.addEventListener("error", () => {
        console.error("Network Error");
    });
    request.send();
}
