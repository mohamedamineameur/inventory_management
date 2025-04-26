export const userValidation = async (req, res, next) => {
  const { username, password, role } = req.body
  if (!username) {
    return res.status(400).json({ message: 'Username is required' })
  }
  if (!password) {
    return res.status(400).json({ message: 'Password is required' })
  }
  if (!role) {
    return res.status(400).json({ message: 'Role is required' })
  }
  if (role !== 'admin' && role !== 'user' && role !== 'management') {
    return res.status(400).json({ message: 'Role must be admin, user or management' })
  }
  const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/
  if (!usernameRegex.test(username)) {
    return res.status(400).json({
      message:
        'Username must be 3-20 characters long and can only contain letters, numbers and underscores'
    })
  }
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      message:
        'Password must be at least 8 characters long and contain at least one letter and one number'
    })
  }

  next()
}
