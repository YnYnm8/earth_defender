import { GameObject } from "./GameObject/GameObject.js";
import { Player } from "./GameObject/Player.js";
import { Input } from "./Input.js";
import { Alien } from "./GameObject/Alien.js";
import { Star } from "./GameObject/Star.js";
import { Earth } from "./GameObject/Earth.js";
var Game = /** @class */ (function () {
    function Game() {
        // ゲーム画面のサイズ
        this.CANVAS_WIDTH = 900;
        this.CANVAS_HEIGHT = 600;
        // ゲーム上に存在する全てのオブジェクトをまとめる配列
        this.gameObjects = [];
        // 生成するエイリアンと星の数
        this.nbAliens = 10;
        this.nbStars = 100;
        // キャンバス要素を取得
        var canvas = document.querySelector("canvas");
        // キャンバスサイズを設定
        canvas.width = this.CANVAS_WIDTH;
        canvas.height = this.CANVAS_HEIGHT;
        // 2D描画コンテキストを取得
        this.context = canvas.getContext("2d");
    }
    // GameObjectをゲーム上に追加する関数
    Game.prototype.instanciate = function (gameObject) {
        this.gameObjects.push(gameObject);
    };
    // ゲーム開始時に一度だけ呼ばれる初期化関数
    Game.prototype.start = function () {
        // 画面を初期化（黒背景）
        this.context.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
        this.context.fillStyle = "#141414";
        this.context.fillRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
        this.instanciate(new Earth(this)); // ←ここを追加！
        // テスト用の基本オブジェクト（親クラス）
        var gameObject = new GameObject(this);
        this.draw(gameObject);
        // プレイヤーを生成して配列に追加
        this.player = new Player(this);
        this.instanciate(this.player);
        // エイリアンを複数生成して配列に追加
        for (var i = 0; i < this.nbAliens; i++) {
            this.instanciate(new Alien(this));
        }
        // 星を複数生成して配列に追加
        for (var i = 0; i < this.nbStars; i++) {
            this.instanciate(new Star(this));
        }
        // キー入力を監視開始
        Input.listen();
        // ゲームループ（毎フレーム実行）
        this.loop();
    };
    Game.prototype.over = function () {
        alert("Game Over!");
        window.location.reload();
    };
    Game.prototype.getPlayer = function () {
        return this.player;
    };
    Game.prototype.destroy = function (gameObject) {
        this.gameObjects = this.gameObjects.filter(function (go) { return go != gameObject; });
        // Supprimer gameObject du tableau de gameObjects
    };
    // 1つのGameObjectを画面に描画する関数
    Game.prototype.draw = function (gameObject) {
        this.context.drawImage(gameObject.getImage(), gameObject.getPosition().x, gameObject.getPosition().y, gameObject.getImage().width, gameObject.getImage().height);
    };
    // 毎フレーム実行されるループ処理
    Game.prototype.loop = function () {
        var _this = this;
        setInterval(function () {
            // 1) 前のフレームを消す
            _this.context.clearRect(0, 0, _this.CANVAS_WIDTH, _this.CANVAS_HEIGHT);
            // 2) 背景を再描画（黒）
            _this.context.fillStyle = "#141414";
            _this.context.fillRect(0, 0, _this.CANVAS_WIDTH, _this.CANVAS_HEIGHT);
            // 3) すべてのオブジェクトを更新＆描画
            _this.gameObjects.forEach(function (go) {
                go.callUpdate(); // 各オブジェクトの動作更新
                _this.draw(go); // 新しい位置で描画
                _this.gameObjects.forEach(function (other) {
                    // Je dois donc créer une méthode overlap ...
                    if (other != go && go.overlap(other)) {
                        console.log("Deux GameObject différents se touchent");
                        go.callCollide(other); // J'appelle la méthode collide de mon GameObject
                    }
                });
            });
        }, 10); // 約100FPSでループ実行（1秒間に100回）
    };
    return Game;
}());
export { Game };
