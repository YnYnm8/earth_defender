var Assets = /** @class */ (function () {
    function Assets() {
    }
    Assets.getDefaultImage = function () {
        var image = document.querySelector("img#asset_degault");
        if (image == null) {
            throw Error("No assets found");
        }
        return image;
    };
    // Ajout du getter d'asset player
    Assets.getPlayerImage = function () {
        var playerImage = document.querySelector("img#asset_player");
        if (playerImage == null) {
            throw Error("No seeets found");
        }
        return playerImage;
    };
    return Assets;
}());
export { Assets };
