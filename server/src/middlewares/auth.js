/**
 * Fluxo do middleware de autenticacao:
 * Client <--> Node.js -> Express -> Middlewares -> Controller
 */
export default async (req, res, next) => {
  const authenticated = true;

  if(authenticated) {
    return next();
    // next eh a funcao q vai liberar o fluxo caso a req de certo
  }

}