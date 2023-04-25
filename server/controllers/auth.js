import db from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const q = "SELECT * FROM users WHERE username = $1";
    const { rows } = await db.query(q, [req.body.username]);
    if (rows.length) return res.status(409).json("User already exists!");
  } catch (error) {
    return res.status(500).json(error);
  }

  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    const q =
      "INSERT INTO users (username, email, password, name) VALUES ($1, $2, $3, $4)";
    await db.query(q, [
      req.body.username,
      req.body.email,
      hashedPassword,
      req.body.name,
    ]);
    return res.status(200).json("User has been created.");
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const login = async (req, res) => {};

export const logout = (req, res) => {};
