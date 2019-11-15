/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/
const jwt = require('jsonwebtoken');
const Users = require('../users/users-model.js');

module.exports = (req, res, next) => {
	const token = req.headers.authorization;

	if (token) {
		//check validity
		const secret = process.env.JWT_SECRET || "let's keep it secret and keep it safe!";
		jwt.verify(token, secret, (err, decodedToken) => {
			if (err) {
				//bad token
				res.status(401).json({ message: 'Invalid credentials' });
			} else {
				req.decodedJwt = decodedToken;
				next();
			}
		});
	} else {
		res.status(400).json({ message: 'No token or credentials provided' });
	}
};
