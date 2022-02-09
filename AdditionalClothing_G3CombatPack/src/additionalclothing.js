"use strict";

class AdditionalClothingG3Combat
{
	static onLoadMod() 
	{
		// Constants
		const db = `user/mods/AdditionalClothing_G3CombatPack/db/`;

		// add tops
		JustNUCore.AddTop(db, "AddClothingG3Combat_BlackCryeACUpper",				"AddClothingG3Combat/Tops/top_cryeac_black.bundle", 			"AddClothingG3Combat/Hands/hands_cryac_black.bundle",			"5cde95fa7d6c8b04737c2d13");
		JustNUCore.AddTop(db, "AddClothingG3Combat_KhakiCryeACUpper",				"AddClothingG3Combat/Tops/top_cryeac_khaki.bundle", 			"AddClothingG3Combat/Hands/hands_cryac_khaki.bundle",			"5cde95fa7d6c8b04737c2d13");
		JustNUCore.AddTop(db, "AddClothingG3Combat_MulticamAridCryeACUpper",		"AddClothingG3Combat/Tops/top_cryeac_multicam_arid.bundle", 	"AddClothingG3Combat/Hands/hands_cryac_multicam_arid.bundle",	"5cde95fa7d6c8b04737c2d13");
		JustNUCore.AddTop(db, "AddClothingG3Combat_MulticamBlackCryeACUpper",		"AddClothingG3Combat/Tops/top_cryeac_multicam_black.bundle", 	"AddClothingG3Combat/Hands/hands_cryac_multicam_black.bundle",	"5cde95fa7d6c8b04737c2d13");
		JustNUCore.AddTop(db, "AddClothingG3Combat_MulticamTropicCryeACUpper",		"AddClothingG3Combat/Tops/top_cryeac_multicam_tropic.bundle", 	"AddClothingG3Combat/Hands/hands_cryac_multicam_tropic.bundle",	"5cde95fa7d6c8b04737c2d13");
		JustNUCore.AddTop(db, "AddClothingG3Combat_RangerGreenCryeACUpper",			"AddClothingG3Combat/Tops/top_cryeac_ranger_green.bundle", 		"AddClothingG3Combat/Hands/hands_cryac_ranger_green.bundle",	"5cde95fa7d6c8b04737c2d13");
		JustNUCore.AddTop(db, "AddClothingG3Combat_MulticamCryeACUpper",			"AddClothingG3Combat/Tops/top_cryeac_multicam.bundle", 			"AddClothingG3Combat/Hands/hands_cryac_multicam.bundle",		"5cde95fa7d6c8b04737c2d13");

		// add bottoms
		JustNUCore.AddBottom(db, "AddClothingG3Combat_BlackCryePresLower",			"AddClothingG3Combat/Bottoms/bottom_cryeprecision_black.bundle");
		JustNUCore.AddBottom(db, "AddClothingG3Combat_KhakiCryePresLower",			"AddClothingG3Combat/Bottoms/bottom_cryeprecision_khaki.bundle");
		JustNUCore.AddBottom(db, "AddClothingG3Combat_MulticamAridCryePresLower",	"AddClothingG3Combat/Bottoms/bottom_cryeprecision_multicam_arid.bundle");
		JustNUCore.AddBottom(db, "AddClothingG3Combat_MulticamBlackCryePresLower",	"AddClothingG3Combat/Bottoms/bottom_cryeprecision_multicam_black.bundle");
		JustNUCore.AddBottom(db, "AddClothingG3Combat_MulticamTropicCryePresLower", "AddClothingG3Combat/Bottoms/bottom_cryeprecision_multicam_tropic.bundle");
		JustNUCore.AddBottom(db, "AddClothingG3Combat_RangerGreenCryePresLower",	"AddClothingG3Combat/Bottoms/bottom_cryeprecision_ranger_green.bundle");
		JustNUCore.AddBottom(db, "AddClothingG3Combat_MulticamCryePresLower",		"AddClothingG3Combat/Bottoms/bottom_cryeprecision_multicam.bundle");
	}
}
	
module.exports = AdditionalClothingG3Combat;