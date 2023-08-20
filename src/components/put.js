let { waifus } = require("../database/waifus");

const changeWaifu = (req, res) => {

    const {id} = req.params

    if(isNaN(Number(id))){
        return res.status(400).json({mensagem:"Invalid id. Please, pass a number"})
    }

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

  if (!AnimeManga) {
    return res.status(400).json({ mensagem: "O campo AnimeManga é obrigatório" });
}
if (!Name) {
    return res.status(400).json({ mensagem: "O campo Name é obrigatório" });
}
if (!Age) {
    return res.status(400).json({ mensagem: "O campo Age é obrigatório" });
}
if (!Birthday) {
    return res.status(400).json({ mensagem: "O campo Birthday é obrigatório" });
}
if (!BloodType) {
    return res.status(400).json({ mensagem: "O campo BloodType é obrigatório" });
}
if (!Height) {
    return res.status(400).json({ mensagem: "O campo Height é obrigatório" });
}
if (!Weight) {
    return res.status(400).json({ mensagem: "O campo Weight é obrigatório" });
}
if (!Breasts) {
    return res.status(400).json({ mensagem: "O campo Breasts é obrigatório" });
}
if (!Waist) {
    return res.status(400).json({ mensagem: "O campo Waist é obrigatório" });
}
if (!Breech) {
    return res.status(400).json({ mensagem: "O campo Breech é obrigatório" });
}
if (!Race) {
    return res.status(400).json({ mensagem: "O campo Race é obrigatório" });
}
if (!Gender) {
    return res.status(400).json({ mensagem: "O campo Gender é obrigatório" });
}
if (!Nickname) {
    return res.status(400).json({ mensagem: "O campo Nickname é obrigatório" });
}
if (!HairColor) {
    return res.status(400).json({ mensagem: "O campo HairColor é obrigatório" });
}
if (!EyeColor) {
    return res.status(400).json({ mensagem: "O campo EyeColor é obrigatório" });
}
if (!SkinColor) {
    return res.status(400).json({ mensagem: "O campo SkinColor é obrigatório" });
}
if (!Conduct) {
    return res.status(400).json({ mensagem: "O campo Conduct é obrigatório" });
}
if (!EquipmentAbilities) {
    return res.status(400).json({ mensagem: "O campo EquipmentAbilities é obrigatório" });
}

const waifu = waifus.find(waifu=>waifu.Id === Number(id))

if(!waifu){
    return res.status(404).json({mensagem:"Still didn't this waifu in your colletion"})
}

waifu.AnimeManga = AnimeManga
waifu.Name = Name
waifu.Age = Age
waifu.Birthday = Birthday
waifu.BloodType = BloodType
waifu.Height = Height
waifu.Weight = Weight
waifu.Breasts = Breasts
waifu.Waist = Waist
waifu.Breech = Breech
waifu.Race = Race
waifu.Gender = Gender
waifu.Nickname = Nickname
waifu.HairColor = HairColor
waifu.EyeColor=EyeColor
waifu.SkinColor = SkinColor
waifu.Conduct = Conduct
waifu.EquipmentAbilities= EquipmentAbilities

return res.json({mensagem:"Waifu has been replaced"})

};

module.exports = changeWaifu;
