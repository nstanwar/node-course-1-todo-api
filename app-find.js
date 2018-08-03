const mongoClient = require('mongodb');
const { ObjectID } = require('mongodb');

mongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(error, client) => {
    if(error) {
        return console.log('Not connected with mongoDB');
    }
    const db = client.db('TodoApp');
    db.collection('Todos')
    .find({ _id: new ObjectID('5b62f421270564d6df2dbdb0')})
    .toArray()
    .then((docs) => {
        console.log('Data in Todos collection');
        console.log(JSON.stringify(docs, undefined,2));
    })
    .catch((error) => {
        console.log(error);
    });
    client.close();
});