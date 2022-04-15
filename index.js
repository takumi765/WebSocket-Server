//サーバ側のプログラム
const ws = require('ws');

//WebSocketをサーバの生成する
const server = new ws.Server({port:5005});//port番号は適当でよい

//WebSocket Serverが繋がったら...
server.on("connection", ws => {
    //index.jsがメッセージを受信したら...
    ws.on("message", message => {
        //送ってきたクライアントにメッセージを送信する
        ws.send("hello from server");
        //送られてきたメッセージを表示する
        console.log("クライアントからメッセージを受け取りました："+Buffer.from(message).toString('utf8'));
    });

    ws.on("close", () => {
        console.log("接続終了");
    })
});