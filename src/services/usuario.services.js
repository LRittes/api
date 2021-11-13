import { getAll, newUser, userExist } from '../models/usuario.model';

const allUsers = async () => {
  const users = await getAll();

  return users;
};

const create = async ({ email, senha }) => {
  const userExisted = await userExist({ email });

  if (userExisted) return userExisted;

  const user = await newUser({ email, senha });
  return user;
};

const none = async () => null;

export { allUsers, none, create };
