import { ObjectId } from 'mongodb';
import connection from './mongoConnection';

const getAll = async () => {
  const db = await connection();

  return db.collection('usuarios').find().toArray();
};

const newUser = async ({ email, senha }) => {
  const db = await connection();

  const user = await db.collection('usuarios').insertOne({ email, senha });
  const { insertedId: id } = user;

  return { email, _id: id };
};

const userExist = async ({ email, id }) => {
  const db = await connection();
  let user = null;

  if (id) {
    user = await db.collection('usuarios').findOne({ _id: ObjectId(id) });
  } else {
    user = await db.collection('usuarios').findOne({ email });
  }
  return user;
};

const deletingUser = async ({ id }) => {
  const db = await connection();
  await db.collection('usuarios').deleteOne({ _id: ObjectId(id) });

  return { id };
};

const updatingUser = async ({ email, senha, id }) => {
  const db = await connection();

  await db.collection('usuarios').updateOne({ _id: ObjectId(id) }, { $set: { email, senha } });

  return { email, id };
};

const login = async () => null;

export {
  getAll, login, newUser, userExist, deletingUser, updatingUser,
};
