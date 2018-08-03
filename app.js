const mongoClient = require('mongodb').MongoClient;

mongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (error,client) => {
    if(error) {
        return console.log('Not connected with mongoDB');
    }
    console.log('Connected with mongoDB server');
    const db = client.db('TodoApp');
    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: true
    }, (error, result) => {
        if(error) {
            return console.log('Not able to write in DB', error);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });
    client.close();
});

