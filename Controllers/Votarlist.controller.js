module.exports.getAllVotar = async (req, res, next) =>{
    try {
        const votar = await votarCollection.find().toArray()
            res.send(votar)
    } catch (error) {
        next(error)
    }
}