import express from 'express';
import cors from 'cors';
import Connection from './database/db.js';
import route from './routes/route.js';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const app = express();
app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Your code here

app.use(express.static(path.join(__dirname, '/build')));
app.use('/', route);

const PORT = 3000;
Connection();

app.listen(PORT,()=>console.log(`Your server is running successfully ${PORT}`))