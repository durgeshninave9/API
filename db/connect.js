const mongoose = require("mongoose")

// uri = "mongodb+srv://durgesh09:eaC7dXbnzb8MR6eV@durgeshcluster.tzxx1ri.mongodb.net/DurgeshCluster?retryWrites=true&w=majority"

const connectDB = (uri) => {
    console.log("connect")
    mongoose.connect(uri).catch(error=>console.log(error))
};

module.exports = connectDB;
