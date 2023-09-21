import { ObjectId } from 'mongodb';
import { newDbCluster } from '../../database/DBManager.js';

const Db = await newDbCluster();

export const Updatelist = async (req, res) => {
  console.log('updatelist', req.body);
  const { _id, UserName, place, Age, categeory } = req.body;

  const data = await Db.collection('Todo-list').updateOne(
    { _id: new ObjectId(_id) },
    { $set: { UserName, place, Age, categeory } }
  );
  console.log(data);
  res.status(200).json({ status: 200, message: 'Update successfully' });
};
