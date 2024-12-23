const { default: mongoose } = require("mongoose");



module.exports.db = async () => {
    try {
        await mongoose.connect('mongodb+srv://Product-category:Product-category@cluster0.4nbcf.mongodb.net/');
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
}
