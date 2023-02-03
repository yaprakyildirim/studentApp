import mongoose, { mongo } from "mongoose";

const conn = () => {
    mongoose.connect(process.env.DB_URI,{
        dbName: 'StudentApp',
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=> {    //promise
        console.log("Connected to the DB successfully.")
    }).catch((err) => {
        console.log(`DB connection err:, ${err}`);
    });
};

export default conn;