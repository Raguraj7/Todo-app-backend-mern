import { ObjectId } from 'mongodb';
import { newDbCluster } from '../../database/DBManager.js';
import Joi from 'joi';

const Db = await newDbCluster();
//  const UserNamevalidator = Joi.string()
//   .min(3)
//   .max(30)
//   .required()
//   .messages({
//     'string.empty': 'UserName is not allowed to empty',
//   });
// const TaskName = Joi.string()
//   .min(3)
//   .max(30)
//   .required()
//   .messages({ 'string.empty': 'TaskName is not allowed to empty' });
//   const Description = Joi.string().required().messages({
//     'Description.empty': 'Description is not allowed to empty',
//     'Description.base': 'Description is must be a string',
//     'any.required': 'Description is required',
//   });
// const Categeoryvalidator = Joi.string()
//   .min(4)
//   .max(30)
//   .required()
//   .messages({
//     'string.empty': ' Categeory is not allowed to empty',
//     'string.min': ' Categeory is must be minimum 4 characters to allowed',
//     'string.max':
//       ' Categeory is  must be minimum 30 only characters to allowed',
//   });
//   const Datevalidator=Joi.date().raw().required()

// const UserlistValidator = Joi.object({
//   username: UserNamevalidator.required(),
//   taskname: TaskName.required(),
//   description: Description.required(),
//   categeory: Categeoryvalidator.required(),
//   date: Datevalidator.required(),
// });
// export const updateValidator = (req, res, next) => {
//   const {username, taskname, description, categeory,date}=req.body
// //   const { error } = UserlistValidator.validate({username, taskname, description, categeory,date}, { abortEarly: false });

//   if (error && error.details?.length > 0) {
//     res.status(400).json({
//       status: 400,
//       error: true,
//       errormsg: error.details.map((err) => err.message),
//     });
//     return;
//   }
//   next();

//   return;
// };

export const completedList = async (req, res) => {
    const { username, taskname, description, categeory,date } = req.body;
   
    const data = await Db.collection('todo-completed').insertOne({
      username,
      taskname,
      description,
      categeory,
      date
    });
    
    res.setHeader('Content-Type', 'application/json');
    // res.status(200).json({ _id: data.insertedId });
    res.status(200).json({ data });
  };