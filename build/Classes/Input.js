// +
var Input = /** @class */ (function () {
    function Input() {
    }
    Input.getAxisX = function () {
        return this.axisX;
    };
    Input.getIsShooting = function () {
        return Input.isShooting;
    };
    Input.listen = function () {
        window.addEventListener("keydown", function (event) {
            switch (event.key) {
                case "d":
                case "D":
                    Input.axisX = 1;
                    break;
                case "q":
                case "Q":
                    Input.axisX = -1;
                    break;
                case " ":
                    Input.isShooting = true;
                    break;
                default:
                    break;
            }
        });
        window.addEventListener("keyup", function (event) {
            switch (event.key) {
                case "d":
                case "D":
                case "q":
                case "Q":
                    Input.axisX = 0;
                    break;
                case " ":
                    Input.isShooting = false;
                    break;
                default:
                    break;
            }
        });
    };
    // private static axisX : Direction = 0;
    // public static getAxisX(): Direction {
    //     return this.axisX;
    // }
    Input.axisX = 0;
    Input.isShooting = false;
    return Input;
}());
export { Input };
