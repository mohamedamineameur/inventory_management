export const categoryValidation = async (req, res, next) => {
  const name = req.body.name;

  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }
  if (typeof name !== "string") {
    return res.status(400).json({ message: "Name must be a string" });
  }

  next();
};
