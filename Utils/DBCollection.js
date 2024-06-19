const { getDb } = require("./DBConnect")

module.exports= {
    VotarListsCollection : function () {
        return getDb().collection('votarLists')
    }
}