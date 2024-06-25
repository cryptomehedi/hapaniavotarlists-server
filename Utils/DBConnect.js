const {MongoClient, ServerApiVersion }= require("mongodb"); 


const dbConnect = async ()=>{
    const  connectionString = process.env.ATLAS_URI;
    return client = new MongoClient(connectionString, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
          },
          
        
        // serverApi: ServerApiVersion.v1
    });
}

let dbConnection;
module.exports = {
    connectToServer: async function (callback) { 
        try {
            await dbConnect()
            dbConnection = await client.db("HapaniaVotarLists");
            console.log("Successfully connected to MongoDB.");
            return callback();
        } catch (error) {
            return callback(error);
        }
    },

    getDb: function () {
        return dbConnection;
    },
    
};