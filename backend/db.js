const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://gofood:gofood123@cluster0.unwupj5.mongodb.net/gofoodmern?retryWrites=true&w=majority';

module.exports = function (callback) {
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err) console.log("---" + err)
        else {
            console.log("Sucessfully connected to MongoDB!")
            const foodCollection = await mongoose.connection.db.collection("food_items");
            foodCollection.find({}).toArray(async function (err, data) {
                const categoryCollection = await mongoose.connection.db.collection("foodCategory");
                categoryCollection.find({}).toArray(async function (err, Catdata) {
                    callback(err, data, Catdata);
                })
            });
        }
    })
};
