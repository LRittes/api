import {
  allUsers, create, deleting, updating,
} from '../services/usuario.services';

const getAll = async (req, res) => {
  const users = await allUsers();

  const id = '_id';

  const newList = users.map((user) => ({
    email: user.email,
    _id: user[`${id}`],
  }));

  return res.status(200).json(newList);
};

const createUser = async (req, res) => {
  const { email, senha } = req.body;

  const { email: mail, _id } = await create({ email, senha });

  return res.status(200).json({ mail, _id });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  const user = await deleting({ id });

  return res.status(200).json(user);
};

const updateUser = async (req, res) => {
  const { email, senha } = req.body;
  const { id } = req.params;

  const user = await updating({ email, senha, id });

  return res.status(200).json(user);
};

const login = async () => null;

export {
  getAll, login, createUser, deleteUser, updateUser,
};
