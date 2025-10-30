import { GameObject } from "./GameObject/GameObject.js";
import { Player } from "./GameObject/Player.js";
import { Input } from "./Input.js";
import { Alien } from "./GameObject/Alien.js";
import { Star } from "./GameObject/Star.js";
import { Earth } from "./GameObject/Earth.js";
export class Game {

    // キャンバス描画用のコンテキスト
    private context: CanvasRenderingContext2D;

    // ゲーム画面のサイズ
    public readonly CANVAS_WIDTH: number = 900;
    public readonly CANVAS_HEIGHT: number = 600;

    // プレイヤー、敵（エイリアン）、星などのオブジェクト
    private player: Player;
    private alien: Alien;
    private star: Star;
    private earth: Earth;

    // ゲーム上に存在する全てのオブジェクトをまとめる配列
    private gameObjects: GameObject[] = [];

    // 生成するエイリアンと星の数
    private nbAliens: number = 10;
    private nbStars: number = 100;

    constructor() {
        // キャンバス要素を取得
        const canvas = document.querySelector("canvas");

        // キャンバスサイズを設定
        canvas.width = this.CANVAS_WIDTH;
        canvas.height = this.CANVAS_HEIGHT;

        // 2D描画コンテキストを取得
        this.context = canvas.getContext("2d");
    }

    // GameObjectをゲーム上に追加する関数
    public instanciate(gameObject: GameObject): void {
        this.gameObjects.push(gameObject);
    }

    // ゲーム開始時に一度だけ呼ばれる初期化関数
    public start(): void {
        // 画面を初期化（黒背景）
        this.context.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
        this.context.fillStyle = "#141414";
        this.context.fillRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);

        this.instanciate(new Earth(this)); // ←ここを追加！
        
        // テスト用の基本オブジェクト（親クラス）
        const gameObject = new GameObject(this);
        this.draw(gameObject);

        // プレイヤーを生成して配列に追加
        this.player = new Player(this);
        this.instanciate(this.player);

        // エイリアンを複数生成して配列に追加
        for (let i = 0; i < this.nbAliens; i++) {
            this.instanciate(new Alien(this));
        }

        // 星を複数生成して配列に追加
        for (let i = 0; i < this.nbStars; i++) {
            this.instanciate(new Star(this));
        }

        // キー入力を監視開始
        Input.listen();

        // ゲームループ（毎フレーム実行）
        this.loop();
    }
    public over(): void {
        alert("Game Over!")
        window.location.reload();

    }
    public getPlayer(): Player {
        return this.player;
    }
    public destroy(gameObject: GameObject): void {
        this.gameObjects = this.gameObjects.filter(go => go != gameObject);
        // Supprimer gameObject du tableau de gameObjects

    }

    // 1つのGameObjectを画面に描画する関数
    private draw(gameObject: GameObject) {
        this.context.drawImage(
            gameObject.getImage(),
            gameObject.getPosition().x,
            gameObject.getPosition().y,
            gameObject.getImage().width,
            gameObject.getImage().height
        );
    }

    // 毎フレーム実行されるループ処理
    private loop() {
        setInterval(() => {
            // 1) 前のフレームを消す
            this.context.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);

            // 2) 背景を再描画（黒）
            this.context.fillStyle = "#141414";
            this.context.fillRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);

            // 3) すべてのオブジェクトを更新＆描画
            this.gameObjects.forEach(go => {
                go.callUpdate();  // 各オブジェクトの動作更新
                this.draw(go);    // 新しい位置で描画

                this.gameObjects.forEach(other => {
                    // Je dois donc créer une méthode overlap ...
                    if (other != go && go.overlap(other)) {
                        console.log("Deux GameObject différents se touchent");
                        go.callCollide(other); // J'appelle la méthode collide de mon GameObject
                    }
                });
            });
        }, 10); // 約100FPSでループ実行（1秒間に100回）

    }

}


