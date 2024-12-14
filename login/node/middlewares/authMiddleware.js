import jwt from 'jsonwebtoken'

export const authMiddleware = (req, res) => {
  const token = req.headers['authorization']?.split('')[1];

  if (!token) {
    return res.status(401).json({ message: 'Acces denied. Token not provided' })
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // user infromation in the request
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid Token or expired' })
  }
};