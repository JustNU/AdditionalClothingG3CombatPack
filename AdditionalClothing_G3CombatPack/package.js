class Mod
{
    constructor()
    {
		Logger.info("Loading: Additional Clothing - G3 Combat Pack");
		
		ModLoader.onLoad["AdditionalClothingG3Combat"] = require("./src/additionalclothing.js").onLoadMod;
    }
}

module.exports.Mod = new Mod();