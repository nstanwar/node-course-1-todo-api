const mongoClient = require('mongodb').MongoClient;
const { ObjectID } = require('mongodb');

mongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (error, client) => {
    if(error) {
        return console.log('Not connected with mongoDB');
    }
    console.log('Connected with mongoDB');
    const db = client.db();
    db.collection('Todos')
    .findOneAndDelete({ text: 'Something to do' })
    .then((result) => {
        console.log('Data deleted in Todos collection');
        console.log(JSON.stringify(result, undefined,2));
    }).catch((error) => {
        console.log(error);
    });
    client.close();
});