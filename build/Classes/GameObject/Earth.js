var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Assets } from "../Assets.js";
import { GameObject } from "./GameObject.js";
var Earth = /** @class */ (function (_super) {
    __extends(Earth, _super);
    function Earth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Earth.prototype.start = function () {
        this.setImage(Assets.getEarthImage());
        this.setPosition({
            x: this.getGame().CANVAS_WIDTH / 2 - this.getImage().width / 2, // 中央に配置,
            y: this.getGame().CANVAS_HEIGHT - this.getImage().height - 20
        });
    };
    return Earth;
}(GameObject));
export { Earth };
// protected update(): void {
//     this.setPosition({
//         x: this.getPosition().x ,
//         y: this.getPosition().y
//     })
