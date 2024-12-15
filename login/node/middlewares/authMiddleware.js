import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
  // Extract the token from the 'Authorization' header
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1]; // Split by space to get the token part

  if (!token) {
    return res.status(401).json({ message: 'Access denied. Token not provided' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user information to the request object
    req.user = decoded;

    // Pass control to the next middleware or route handler
    next();
  } catch (error) {
    // Handle invalid or expired token
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};
