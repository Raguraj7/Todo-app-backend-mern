import { ObjectId } from 'mongodb';
import { newDbCluster } from '../../database/DBManager.js';

const Db = await newDbCluster();

// export const deleteOneTODO = async (req, res) => {
//   const { _id } = req.query;
//   console.log('query', req.query);
//   const deletedata = await Db
//     .collection('Todo-list')
//     .deleteOne({ _id: new ObjectId(_id) });
//   console.log('deletedata', deletedata);
//   res.status(204).json({
//     _id,
//     message: 'delete successfully',
//   });
// };

export const deleteOneTODO = async (req, res) => {
  const { _id } = req.query;
  const getObject = await Db
  .collection('Todo-list')
  .findOne({ _id: new ObjectId(_id) });
   await Db.collection('todo-completed').insertOne({
   ...getObject
  });
    const deletedata = await Db
      .collection('Todo-list')
      .deleteOne({ _id: new ObjectId(_id) });
    console.log('deletedata', deletedata);
    res.status(200).json({
      _id ,
      message: 'delete successfully',
    });

};