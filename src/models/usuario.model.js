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

const userExist = async ({ email, uuid }) => {
  const db = await connection();
  let user = null;

  if (uuid) {
    user = await db.collection('usuarios').findOne({ uuid });
  } else {
    user = await db.collection('usuarios').findOne({ email });
  }
  return user;
};

const login = async () => null;

export {
  getAll, login, newUser, userExist,
};
