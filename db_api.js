var mongo = require('mongodb').MongoClient;

function iniciarPool() {
    mongo.connect('mongodb://admin:admin123@ds215822.mlab.com:15822/prizeship_io', (err, db) => {
        if(err)
            console.log("error: ", err);
        else 
            /*db.db('votacao').collection('votos').update({object: "pool"}, {$set: {sim: 0, nao: 0}}, {upsert: true}, (err, result) => {
                if(err)
                    console.log("erro: ", err);
                else
                    console.log("resultado: ", result);*/
        
            console.log("db", db.getUsers());
                db.close();
            });
   // })
}

iniciarPool();






//var mongo = require('mongodb').MongoClient;

//insercao



/*mongo.connect('mongodb://localhost:27017/', (error, db) => {
    if(error)
        console.log("erro de conexao: ", error);
    else
        db.db('teste').collection('colecao').insertOne(giovanni, (err, result) => {
            if(err)
                console.log("erro de insercao: ", err);
            else
                console.log("resultado: ", result);
        });
});*/

//busca

/*mongo.connect('mongodb://localhost:27017/', (error, db) => {
    if(error)
        console.log("erro de conexao: ", error);
    else
        db.db('teste').collection('colecao').find({nome: "giovanni"}).toArray(function(error, array) {
            if(error)
                console.log("error: ", error);
            else
                console.log("array: ", array);
            db.close();
        });
})*/

//modificar

/*mongo.connect('mongodb://localhost:27017/', (error, db) => {
    if(error)
        console.log("erro de conexao: ", error);
    else
        db.db('teste').collection('colecao').findOneAndUpdate({nome: "giovanni"}, {$set: {voto: false, sobrenome: "forastieri"}}, {}, (err, res) => {
             if(error)
                console.log("erro de conexao: ", err);
            else       
                console.log("reultado: ", res);
            db.close();
        });
});*/