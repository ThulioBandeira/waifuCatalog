let { waifus } = require("../database/waifus");

const replaceSomeInformation = async (req, res) => {
  const {
    AnimeManga,
    Name,
    Age,
    Birthday,
    BloodType,
    Height,
    Weight,
    Breasts,
    Waist,
    Breech,
    Race,
    Gender,
    Nickname,
    HairColor,
    EyeColor,
    SkinColor,
    Conduct,
    EquipmentAbilities,
  } = req.body;

  const { id } = req.params;

  const waifu = waifus.find((waifu) => waifu.Id === Number(id));

  if (!waifu) {
    return res
      .status(404)
      .json({ mensagem: "Waifu does not exist in your list" });
  }

  if (AnimeManga) {
    waifu.AnimeManga = AnimeManga;
  }
  if (Name) {
    waifu.Name = Name;
  }
  if (Age) {
    waifu.Age = Age;
  }
  if (Birthday) {
    waifu.Birthday = Birthday;
  }
  if (BloodType) {
    waifu.BloodType = BloodType;
  }
  if (Height) {
    waifu.Height = Height;
  }
  if (Weight) {
    waifu.Weight = Weight;
  }
  if (Breasts) {
    waifu.Breasts = Breasts;
  }
  if (Waist) {
    waifu.Waist = Waist;
  }
  if (Breech) {
    waifu.Breech = Breech;
  }
  if (Race) {
    waifu.Race = Race;
  }
  if (Gender) {
    waifu.Gender = Gender;
  }
  if (Nickname) {
    waifu.Nickname = Nickname;
  }
  if (HairColor) {
    waifu.HairColor = HairColor;
  }
  if (EyeColor) {
    waifu.EyeColor = EyeColor;
  }
  if (SkinColor) {
    waifu.SkinColor = SkinColor;
  }
  if (Conduct) {
    waifu.Conduct = Conduct;
  }
  if (EquipmentAbilities) {
    waifu.EquipmentAbilities = EquipmentAbilities;
  }

  return res.json({
    mensagem: "Some informations of Waifu selected has been modified",
  });
};

module.exports = replaceSomeInformation;
