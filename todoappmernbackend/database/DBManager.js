// const { MongoClient  } = require('mongodb');
import { MongoClient } from 'mongodb';
// const ObjectId = require('mongodb').ObjectId;

import env from 'dotenv';
env.config();

// const dbName = process.env.dbName;
// const url = process.env.URL;
const dbName = 'Todo-App'
const url = 'mongodb+srv://raguraj9843:tVqtOJvGP5yo2bLv@todo-app-mern.zdbbuag.mongodb.net/?retryWrites=true&w=majority'

let db;

export const newDbCluster = async () => {
  try {
    if (db) {
      console.log('db connected alredy');
      return db;
    }
    const client = new MongoClient(url);
    const connect = await client.connect();
    db = connect.db(dbName);
    console.log('db connected succefully');
    return db;
  } catch (error) {
    console.log('mongodb connnection error', error.message);
  }
};
// MongoClient.connect(url)
//   .then((client) => {
//     console.log('connected successfully to the server');
//     const dbCon = client.db(dbName);
//     const collection = dbCon.collection(collectionName);
//     return collection.find({}).toArray();
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log('connection error', err));
