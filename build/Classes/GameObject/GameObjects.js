import { Assets } from "../Assets.js";
var GameObject = /** @class */ (function () {
    function GameObject() {
        this.position = {
            x: 0,
            y: 0
        };
        this.image = Assets.getDefaultImage();
    }
    return GameObject;
}());
export { GameObject };
