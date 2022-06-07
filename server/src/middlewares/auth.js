/**
 * Fluxo do middleware de autenticação:
 * Client <--> Node.js -> Express -> Middlewares -> Controller
 */
import jwt from 'jsonwebtoken';
import authConfig from '../config/auth';

export default async (req, res, next) => {
  const authenticated = true;

  if(authenticated) {
    return next();
    // 'next' é a função que vai liberar o fluxo, caso a condição seja 'true'
  } else {
    return res.status(401).json();
  }

}