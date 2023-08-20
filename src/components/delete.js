let { waifus, nextId } = require("../database/waifus"); 

const deleteWaifu = (req,res)=>{

    const {id} = req.params

    if(isNaN(Number(id))){
        return res.status(404).json({mensagem:" The Id passed don't is a number"})
    }

    const waifuIndex = waifus.findIndex(waifu=>waifu.Id === Number(id))

    waifus.splice(waifuIndex,1)

    return res.json({mensagem:"Waifu has been deleted"})
}

module.exports = deleteWaifu