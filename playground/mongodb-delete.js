// const MongoClient = require('mongodb').MongoClient;
// var obj = new ObjectID();
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');

    
// Delete Many
// db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result)=>{
//     console.log(result);
// });

// Delete One
// db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result)=>{
//     console.log(result);
// });

// find One And Delete
// db.collection('Todos').findOneAndDelete({completed: true}).then((result)=>{
//     console.log(result);
// });

// db.collection('Users').deleteMany({name: 'Oscar'}).then((result)=>{
//     console.log(result);
// });

db.collection('Users').findOneAndDelete({_id: new ObjectID("5832d1d456ddd5fb0c56026a")}).then((result)=>{
    console.log(JSON.stringify(result,'',2));
});

    // db.close();
});