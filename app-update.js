const mongoClient = require('mongodb').MongoClient;
const { ObjectID } = require('mongodb');

mongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (error, client) => {
    if(error) {
        return console.log('Not connected with mongoDB');
    }
    console.log('Connected with mongoDB');
    const db = client.db();
    db.collection('Todos').findOneAndUpdate(
        { _id: new ObjectID('5b630076aa40ecf1df94bf7d')},
        { $set: {text: 'New text update', completed: false }},
        { returnOriginal: false }
    )
    .then((docs) => {
        console.log('Data in Todos collection');
        console.log(JSON.stringify(docs, undefined,2));
    });
    client.close();
});