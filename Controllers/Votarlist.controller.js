module.exports.getAllVotar = async (req, res, next) =>{
    try {
        const votar = await VotarListsCollection.find().toArray()
            res.send(votar)
    } catch (error) {
        next(error)
    }
}