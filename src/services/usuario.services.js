import { getAll } from '../models/usuario.model';

const allUsers = async () => {
  const users = await getAll();

  return users;
};

const none = async () => null;

export { allUsers, none };
