import { allUsers } from '../services/usuario.services';

const getAll = async (req, res) => {
  const users = await allUsers();

  return res.status(200).json(users);
};

const login = async () => null;

export { getAll, login };
