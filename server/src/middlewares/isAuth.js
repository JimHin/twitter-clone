import { expressjwt } from 'express-jwt';
import config from '../config';

/**
 * We are assuming that the JWT will come in a Header with the form
 *
 * Authorization: Bearer ${JWT}
 */
const getTokenFromHeader = (req) => {
  if (
    (req.headers.authorization &&
      req.headers.authorization.split(' ')[0] === 'Token') ||
    (req.headers.authorization &&
      req.headers.authorization.split(' ')[0] === 'Bearer')
  ) {
    return req.headers.authorization.split(' ')[1];
  }
  return null;
};

const isAuth = expressjwt({
  secret: config.jwtSecret, // The _secret_ to sign the JWTs
  algorithms: [config.jwtAlgorithm], // JWT Algorithm
  getToken: getTokenFromHeader, // How to extract the JWT from the request
});

export default isAuth;
