import { ObjectId } from 'mongodb';
import { newDbCluster } from '../../database/DBManager.js';

const Db = await newDbCluster();

export const deleteOneTODO = async (req, res) => {
  const { _id } = req.query;
  console.log('query', req.query);
  const deletedata = await db
    .collection('Todo-list')
    .deleteOne({ _id: new ObjectId(_id) });
  console.log('deletedata', deletedata);
  res.status(204).json({
    _id,
    message: 'delete successfully',
  });
};
  