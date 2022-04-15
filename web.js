//ブラウザ上で動かすプログラム
const button = document.getElementById("button");

const ws = new WebSocket("ws://localhost:5005");//サーバ側と合わせる

//WebSocket Serverが繋がったら...
ws.addEventListener("open", () => {
    console.log("WebSocket Server の接続に成功しました");
});

//メッセージが送られてきたら
ws.addEventListener("message", message => {
    console.log(message.origin+"を経由して送られてきたサーバからのメッセージです：" + message.data);
});

//接続が終了したら
ws.addEventListener("close", message => {
    console.log("接続が終了しました");
});

//ボタンがクリックされたとき
button.addEventListener("click", message => {
    console.log("ボタンをクリックしました。\nメッセージを送信します。");

    //サーバにメッセージを送る
    ws.send("button clicked!");
})