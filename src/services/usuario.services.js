import {
  getAll, newUser, userExist, deletingUser, updatingUser,
} from '../models/usuario.model';

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

const deleting = async ({ id }) => {
  const userExisted = await userExist({ id });

  if (!userExisted) return { message: 'User not found!' };

  const user = await deletingUser({ id });

  return user;
};

const updating = async ({ email, senha, id }) => {
  const userExisted = await userExist({ id });

  if (!userExisted) return { menssage: 'User not found' };

  const user = await updatingUser({ email, senha, id });

  return user;
};

const none = async () => null;

export {
  allUsers, none, create, deleting, updating,
};
