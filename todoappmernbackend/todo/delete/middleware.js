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
  // const deletedata = await Db
  //   .collection('Todo-list')
  //   .deleteOne({ _id: new ObjectId(_id) });
  const deletedata = await Db
    .collection('Todo-list')
    .find({ _id: new ObjectId(_id) });
    console.log('deletedata', deletedata);
res.status(204).json({
      _id,
      message: 'delete successfully',deletedata
    });
  
  //  await Db.collection('todo-completed').insertOne({
  //   username,
  //   taskname,
  //   description,
  //   categeory,
  //   date
  // });
  //   const deletedata = await Db
  //     .collection('Todo-list')
  //     .deleteOne({ _id: new ObjectId(_id) });
  //   console.log('deletedata', deletedata);
  //   res.status(200).json({
  //     _id ,
  //     message: 'delete successfully',
  //   });

};