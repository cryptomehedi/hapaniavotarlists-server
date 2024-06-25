const { VotarListsCollection } = require("../Utils/DBCollection")

module.exports.getAllVotar = async function (req, res, next) {
    try {
        const votarList = await VotarListsCollection().find().toArray()
        res.send(votarList)
    } catch (error) {
        next(error)
    }
}

module.exports.postVotar = async function (req, res, next) {
    try {
        const request = await req.body
        const votar = {SLN: +request.SLN, NID: +request.NID , father: request.father, mother: request.mother, gender: request.gender, name: request.name}
        const query = {SLN: votar.SLN, gender: votar.gender}
        const existingVotar =await VotarListsCollection().findOne(query)
        if(existingVotar){
            return res.send({success: false, massage: "This Serial Number Already Added", votar: existingVotar})
        }
        const existingNID =await VotarListsCollection().findOne({NID: votar.NID})
        if(existingNID){
            return res.send({success: false, massage: "This NID Already Added" , votar: existingNID})
        }
        const result = await VotarListsCollection().insertOne(votar) 
        res.send({success: true, result })
    } catch (error) {
        next(error)
    }
}