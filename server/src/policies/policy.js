import { User } from "../models/index.model.js";

const policy = async (req, res, role, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findByPk(decoded.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (role === "all") {
      return next();
    }

    if (
      role === "management" &&
      (user.role === "management" || user.role === "admin")
    ) {
      return next();
    }
    if (role === "admin" && user.role === "admin") {
      return next();
    }

    return res.status(403).json({ message: "Forbidden" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const requireRole = (role) => {
    return async (req, res, next) => {
      try {
        await policy(req, res, role, next);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    };
  };
