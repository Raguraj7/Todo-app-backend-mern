import Joi from 'joi';
// import { Db } from 'mongodb';
// import { newDb } from '../../mongodb.js';
import { newDbCluster } from '../../database/DBManager.js';

const Db = await newDbCluster();
// const db = await newDb();

const UserNamevalidator = Joi.string()
  .alphanum()
  .min(3)
  .max(30)
  .required()
  .messages({
    'string.empty': 'UserName is not allowed to empty',
  });
const Placevalidator = Joi.string()
  .alphanum()
  .min(3)
  .max(30)
  .required()
  .messages({ 'string.empty': 'Place is not allowed to empty' });
const Agevalidator = Joi.number().integer().required().messages({
  'number.empty': 'Age is not allowed to empty',
  'number.base': 'Age is must be a number',
  'any.required': 'Age is required',
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
  UserName: UserNamevalidator.required(),
  place: Placevalidator.required(),
  Age: Agevalidator.required(),
  categeory: Categeoryvalidator.required(),
});

export const createValidator = (req, res, next) => {
  console.log('hiiii valid', req.body);
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
export const createMiddleware = async (req, res, next) => {
  // const { categeory } = req.body;
  // const data = await Db.collection('list').findOne(categeory);
  // console.log(data);

  next();
  return;
};
export const createController = async (req, res, next) => {
  console.log('hiiii', res.data);

  const { UserName, place, Age, categeory } = req.body;
  const data = await Db.collection('Todo-list').insertOne({
    UserName,
    place,
    Age,
    categeory,
  });
  console.log(data);
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({ _id: data.insertedId });
};
