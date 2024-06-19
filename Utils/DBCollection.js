const { getDb } = require("./DBConnect")

module.exports= {
    ServicesCollection : function(){
        return getDb().collection('listingsAndReviews')
    }
}