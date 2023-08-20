const {waifus} = require("../database/waifus")

const showWaifus = (req,res) =>{
    return res.json(waifus)
}
const showSpecificWaifu = (req,res)=>{
    const {id} = req.params
    if(isNaN(Number(id))){
        return res.status(400).json({mensagem:"The identifier is invalid or is negative number"})
    }
    const waifu = waifus.find(waifu=>waifu.Id === Number(id))
    console.log(waifu)
    
    if(!waifu){
        return res.status(400).json({mensagem:"This character still not has in your list"})
    }
    return res.json(waifu)
}
module.exports = {
    showWaifus,
    showSpecificWaifu
}