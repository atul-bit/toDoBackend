const mongoose = require("mongoose");

module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        };
        await mongoose.connect(
            "mongodb+srv://guptaatul:VntmV41CD3ujYq8a@myfirstmongocloud.pn1vubv.mongodb.net/?retryWrites=true&w=majority",
            connectionParams
        );
        console.log("Connected to database.");
    } catch (error) {
        console.log("Could not connect to database.", error);
    }
};
