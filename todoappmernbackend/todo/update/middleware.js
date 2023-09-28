import { ObjectId } from 'mongodb';
import { newDbCluster } from '../../database/DBManager.js';
import Joi from 'joi';

const Db = await newDbCluster();
// const UserNamevalidator = Joi.string()
//   .alphanum()
//   .min(3)
//   .max(30)
//   .required()
//   .messages({
//     'string.empty': 'UserName is not allowed to empty',
//   });
// const Placevalidator = Joi.string()
//   .alphanum()
//   .min(3)
//   .max(30)
//   .required()
//   .messages({ 'string.empty': 'Place is not allowed to empty' });
//   const Agevalidator = Joi.number().integer() .min(1)
//   .max(3).required().messages({
//     'number.empty': 'Age is not allowed to empty',
//     'number.base': 'Age is must be a number',
//     'number.min': ' Age is must be minimum 1 number to allowed',
//     'number.max':
//       ' Age is  must be Maximum 3 numbers only to allowed',
//     'any.required': 'Age is required',
//   });
// const Categeoryvalidator = Joi.string()
//   .alphanum()
//   .min(4)
//   .max(30)
//   .required()
//   .messages({
//     'string.empty': ' Categeory is not allowed to empty',
//     'string.min': ' Categeory is must be minimum 4 characters to allowed',
//     'string.max':
//       ' Categeory is  must be minimum 30 only characters to allowed',
//   });
  const UserNamevalidator = Joi.string()
  .min(3)
  .max(30)
  .required()
  .messages({
    'string.empty': 'UserName is not allowed to empty',
  });
const TaskName = Joi.string()
  .min(3)
  .max(30)
  .required()
  .messages({ 'string.empty': 'TaskName is not allowed to empty' });
  const Description = Joi.string().required().messages({
    'Description.empty': 'Description is not allowed to empty',
    'Description.base': 'Description is must be a string',
    'any.required': 'Description is required',
  });
const Categeoryvalidator = Joi.string()
  .min(4)
  .max(30)
  .required()
  .messages({
    'string.empty': ' Categeory is not allowed to empty',
    'string.min': ' Categeory is must be minimum 4 characters to allowed',
    'string.max':
      ' Categeory is  must be minimum 30 only characters to allowed',
  });

const UserlistValidator = Joi.object({
  username: UserNamevalidator.required(),
  taskname: TaskName.required(),
  description: Description.required(),
  categeory: Categeoryvalidator.required(),
});
export const updateValidator = (req, res, next) => {
  const {username, taskname, description, categeory}=req.body
  const { error } = UserlistValidator.validate({username, taskname, description, categeory}, { abortEarly: false });

  if (error && error.details?.length > 0) {
    res.status(400).json({
      status: 400,
      error: true,
      errormsg: error.details.map((err) => err.message),
    });
    return;
  }
  next();

  return;
};

export const Updatelist = async (req, res) => {
  const { _id, username, taskname, description, categeory} = req.body;

  const data = await Db.collection('Todo-list').updateOne(
    { _id: new ObjectId(_id) },
    { $set: { username, taskname, description, categeory } }
  );
  console.log(data);
  res.status(200).json({ status: 200, message: 'Update successfully' });
};
