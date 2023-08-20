const { waifus } = require("../database/waifus");

const showWaifus = async (req, res) => {
  return res.json(waifus);
};
const showSpecificWaifu = async (req, res) => {

  const { id } = req.params;

  const specialChars = ['!', '@', '#', '$', '%', '*', '(', ')', '[', ']', '{', '}', '-', '_', '+', '=',"/","?"];

  if ([...id].some(char => specialChars.includes(char))) {
    return res
      .status(400)
      .json({ mensagem: "The identifier is invalid" });
  }
  
  const waifu = waifus.find((waifu) => waifu.Id === Number(id) || waifu.Name === id);

  if (!waifu) {
    return res
      .status(400)
      .json({ mensagem: "This character still not has in your list" });
  }
  return res.json(waifu)
};
module.exports = {
  showWaifus,
  showSpecificWaifu,
};
