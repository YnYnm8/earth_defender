import { GameObject } from "./GameObject/GameObject.js";
var Game = /** @class */ (function () {
    function Game() {
        this.CANVAS_WIDTH = 900;
        this.CANVAS_HEIGHT = 600;
        var canvas = document.querySelector("canvas");
        canvas.width = this.CANVAS_WIDTH;
        canvas.height = this.CANVAS_HEIGHT;
        this.context = canvas.getContext("2d");
    }
    Game.prototype.start = function () {
        this.context.fillStyle = "#141414";
        this.context.fillRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
        // J'instancie un GameObject
        var gameObject = new GameObject();
        // Je le dessine
        this.draw(gameObject);
        // Démarre la boucle de jeu
        this.loop();
    };
    //  La fonction draw qui affiche un gameObject
    Game.prototype.draw = function (gameObject) {
        this.context.drawImage(gameObject.getImage(), gameObject.getPosition().x, gameObject.getPosition().y, gameObject.getImage().width, gameObject.getImage().height);
    };
    Game.prototype.loop = function () {
        setInterval(function () {
            console.log("Frame!");
        }, 10);
        // 1 frame/10ms ---> 100 frames/1000ms ---> 100 frames/1s
    };
    return Game;
}());
export { Game };
