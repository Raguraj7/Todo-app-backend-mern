import Joi from 'joi';
import { newDbCluster } from '../../database/DBManager.js';
const Db = await newDbCluster();

const UserNamevalidator = Joi.string()
.alphanum()
.min(3)
.max(30)
.required()
.messages({
  'string.empty': 'UserName is not allowed to empty',
});
const TaskName = Joi.string()
.alphanum()
.min(3)
.max(30)
.required()
.messages({ 'string.empty': 'TaskName is not allowed to empty' });
const Description = Joi.string().required().messages({
  'string.empty': 'Description is not allowed to empty',
  'Description.base': 'Description is must be a string',
  'any.required': 'Description is required',
});
const Categeoryvalidator = Joi.string()
.alphanum()
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

export const createValidator = (req, res, next) => {
  const { error } = UserlistValidator.validate(req.body, { abortEarly: false });

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
export const createController = async (req, res, next) => {
  const { username, taskname, description, categeory } = req.body;
  const data = await Db.collection('Todo-list').insertOne({
    username,
    taskname,
    description,
    categeory,
  });
  console.log(data);
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({ _id: data.insertedId });
};
