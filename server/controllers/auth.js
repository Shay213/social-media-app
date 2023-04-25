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

export const login = async (req, res) => {
  try {
    const q = "SELECT * FROM users WHERE username = $1";
    const { rows } = await db.query(q, [req.body.username]);
    if (rows.length === 0) return res.status(404).json("User not found!");

    const checkPassword = bcrypt.compareSync(
      req.body.password,
      rows[0].password
    );

    if (!checkPassword)
      return res.status(400).json("Wrong password or username!");

    const token = jwt.sign({ id: rows[0].id }, "secretkey");
    const { password, ...others } = rows[0];

    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const logout = (req, res) => {
  res
    .clearCookie("accessToken", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json("User has been log out");
};
