import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';

//components
import Connection from './database/db.js';
import Router from './routes/route.js';

const __dirname = path.resolve();


dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);


app.use(express.static(path.join(__dirname,"./client/build")));

app.get('*', function (_, res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"), function(err){
        res.status(500).send(err);
    })
})

const PORT = process.env.PORT || 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;


const URL= process.env.MONGODB_URI || `mongodb://${username}:${password}@ac-iep8zra-shard-00-00.fkamzw6.mongodb.net:27017,ac-iep8zra-shard-00-01.fkamzw6.mongodb.net:27017,ac-iep8zra-shard-00-02.fkamzw6.mongodb.net:27017/?ssl=true&replicaSet=atlas-t4ajci-shard-0&authSource=admin&retryWrites=true&w=majority`;
  

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

Connection(URL);
