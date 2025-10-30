import { Assets } from "../Assets.js"
import { GameObject } from "./GameObject.js"
import { Player } from "./Player.js";

export class Alien extends GameObject {
    private speed: number = 1;

    protected start(): void {

        // Définissez l'image de l'alien
        this.setImage(Assets.getAlienImage());

        // Faites-le apparaître à une position aléatoire dans le canvas
        this.setPosition({
            x: Math.random() * this.getGame().CANVAS_WIDTH,
            y: Math.random() * this.getGame().CANVAS_HEIGHT / 4 - 50,
        })
    }

    protected update(): void {
        // Faites avancer l'alien vers le bas du Canvas
        this.setPosition({
            x: this.getPosition().x,
            y: this.getPosition().y += this.speed
              
        })
    }
    protected collide(other:GameObject){
        if(other instanceof Player){
            console.log("Yum Yum");
            this.getGame().over()
        }
    }


}
// y: this.getPosition().y += this.speed
// y: this.getPosition().y = this.getPosition().y + this.speed