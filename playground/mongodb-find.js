const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');

    // find all todos
    // db.collection('Todos').find().toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,'',2));
    // }, (err)=>{
    //     console.log('Unable to fetch todos', err);
    // });
    //--------------------------------------------------------------
    // find record based on search criteria
    //db.collection('Todos').find({completed: false}).toArray().then((docs)=>{
    // db.collection('Todos').find({
    //     _id: new ObjectID('5832c51cba964a160ced3b16')
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,'',2));
    // }, (err)=>{
    //     console.log('Unable to fetch todos', err);
    // });
    //--------------------------------------------------------------
    // count the number of records
    // db.collection('Todos').find().count().then((count)=>{
    //     console.log(`Todos count: ${count}`);
    // }, (err)=>{
    //     console.log('Unable to fetch todos', err);
    // });
    //--------------------------------------------------------------
    db.collection('Users').find({name: 'Oscar'}).toArray().then((docs)=>{

        console.log('Search Result');
        console.log(JSON.stringify(docs,'',2));
    },(err)=>{
        console.log(`Sorry! no result found: ${err}`);
    })


    // db.close();
});