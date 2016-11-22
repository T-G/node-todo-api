// const MongoClient = require('mongodb').MongoClient;
// var obj = new ObjectID();
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5832c51cba964a160ced3b16")
    // },
    // {
    //     $set: {
    //         completed: true
    //     }
    // },{
    //     returnOriginal: false
    // }).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5832d1d456ddd5fb0c56026b")
    },{
        $set:{
            name: "Oscar"
        },
    
        $inc: {
            age: 1
        }
    },{
        returnOriginal: false
    }).then((results)=>{
        console.log(JSON.stringify(results,'',2));
    });
    // db.close();
});