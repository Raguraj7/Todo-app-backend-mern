import { newDbCluster } from '../../database/DBManager.js';

const Db = await newDbCluster();
export const collectionList = async (req, res) => {
  const data = await Db.collection('Todo-list').find().toArray();
  console.log(data);
  res.status(200).json({ data });
};
