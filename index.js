import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();
const AccountModel = mongoose.model('Account');

export default () => {
  router.post('/signup', new SignUpRouter().route);
};

class ExpressRouterAdapter {
  static adapt(router) {
    return async (req, res) => {
      const httpRequest = {
        body: req.body,
      };
      const httpResponse = await router.route(httpRequest);
      res.status(httpResponse.statusCode).json(httpResponse.body);
    };
  }
}

class SignUpRouter {
  async route(req, res) {
    const { email, password, repeatPassword } = req.body;
    new SignUpUseCase().SignUp(email, password, repeatPassword);
    return res.status(400).json({ erro: 'senhas não batem' });
  }
}

class SignUpUseCase {
  async SignUp(email, password, repeatPassword) {
    if (repeatPassword === password) {
      new AddAccountRepo().add(email, password);
    }
  }
}

class AddAccountRepo {
  async add(email, password) {
    const user = await AccountModel.create({ email, password });
    return user;
  }
}
