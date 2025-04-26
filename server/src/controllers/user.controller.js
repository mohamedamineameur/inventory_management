import { User } from '../models/index.model.js'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

dotenv.config()
const { JWT_SECRET } = process.env
const { saltRounds } = process.env

export const createUser = async (req, res) => {
  const user = {
    username: req.body.username,
    password: req.body.password,
    role: req.body.role || 'user'
  }
  try {
    const hashedPassword = await bcrypt.hash(user.password, parseInt(saltRounds))
    const newUser = await User.create({
      ...user,
      password: hashedPassword
    })
    return res
      .status(201)
      .json({
        message: 'User created successfully',
        user: { id: newUser.id, username: newUser.username, role: newUser.role }
      })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

export const loginUser = async (req, res) => {
  const { username, password } = req.body

  try {
    const user = await User.findOne({ where: { username } })
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' })
    }

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' })

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 1000 * 4
    })

    return res.status(200).json({ message: 'Login successful' })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    return res.status(200).json(users)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

export const me = async (req, res) => {
  try {
    const token = req.cookies.token
    if (!token) {
      return res.status(401).json({ message: 'No token provided' })
    }

    const decoded = jwt.verify(token, JWT_SECRET)
    const user = await User.findByPk(decoded.id)
    const meUser = {
      id: user.id,
      username: user.username,
      role: user.role
    }

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    return res.status(200).json({ user: meUser })
  } catch (error) {
    return res.status(401).json({ message: error })
  }
}

export const deleteUser = async (req, res) => {
  const { id } = req.params
  try {
    const user = await User.findByPk(id)
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    await user.destroy()
    return res.status(200).json({ message: 'User deleted successfully' })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

export const updateUser = async (req, res) => {
  const { id } = req.params
  let updatedUser

  if (req.body.username) {
    updatedUser = {
      username: req.body.username
    }
  }
  if (req.body.password) {
    const hashedPassword = await bcrypt.hash(req.body.password, parseInt(saltRounds))
    updatedUser = {
      password: hashedPassword
    }
  }
  if (req.body.role) {
    updatedUser = {
      role: req.body.role
    }
  }
  try {
    const user = await User.findByPk(id)
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    await user.update({
      ...updatedUser
    })
    await user.save()
    return res
      .status(200)
      .json({
        message: 'User updated successfully',
        user: { id: user.id, username: user.username, role: user.role }
      })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
export const logoutUser = async (req, res) => {
  try {
    res.clearCookie('token')
    return res.status(200).json({ message: 'Logout successful' })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
