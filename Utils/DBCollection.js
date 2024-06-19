const { getDb } = require("./DBConnect")

module.exports= {
    ServicesCollection : function(){
        return getDb().collection('listingsAndReviews')
    },
    VotarListsCollection : function () {
        return getDb().collection('votarList')
    }
}