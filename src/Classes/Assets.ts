export class Assets {

    public static getDefaultImage() {
        const image: HTMLImageElement = document.querySelector("img#asset_degault");
        if (image == null) {
            throw Error("No assets found");
        }
        return image; 
    }
    // Ajout du getter d'asset player
public static getPlayerImage() : HTMLImageElement{
    const playerImage:HTMLImageElement = document.querySelector("img#asset_player");
    if(playerImage == null){
        throw Error("No seeets found");
    }
    return playerImage;
}
    // public static getEarthImage(): HTMLImageElement{
    //     const image1:HTMLImageElement = document.querySelector("img#earth");
    //     if( image1 == null){
    //         throw Error("No assets found");
    //     }
    //     return image1 ;
    // }
}