import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const gaurdMiddleware = (req, res, next) => {
  const token = req.headers?.token;

  if (!token) {
    return res.status(404).json({ success: false, message: "please login" });
  }
  try {
    const { userId } = jsonwebtoken.verify(token, process.env.SECRET_KEY);
    req.body.userId = userId;
    return next();
  } catch (err) {
    return res.status(404).json({ success: false, error: err.message });
  }
};
