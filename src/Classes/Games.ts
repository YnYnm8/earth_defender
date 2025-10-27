import { GameObject } from "./GameObject/GameObject.js";
export class Game {

    private context: CanvasRenderingContext2D;
    public readonly CANVAS_WIDTH: number = 900;
    public readonly CANVAS_HEIGHT: number = 600;


    constructor() {
        const canvas = document.querySelector("canvas");
        canvas.width = this.CANVAS_WIDTH;
        canvas.height = this.CANVAS_HEIGHT;
        this.context = canvas.getContext("2d");

    }
    public start(): void {

        this.context.fillStyle = "#141414";
        this.context.fillRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
        // J'instancie un GameObject
        const gameObject = new GameObject();
        // Je le dessine
        this.draw(gameObject);
        // Démarre la boucle de jeu
        this.loop();
    }
    //  La fonction draw qui affiche un gameObject
    private draw(gameObject: GameObject) {
        this.context.drawImage(
            gameObject.getImage(),
            gameObject.getPosition().x,
            gameObject.getPosition().y,
            gameObject.getImage().width,
            gameObject.getImage().height
        );
    }
    private loop() {
        setInterval(() => {
            console.log("Frame!");
        }, 10);
        // 1 frame/10ms ---> 100 frames/1000ms ---> 100 frames/1s
    }

}


