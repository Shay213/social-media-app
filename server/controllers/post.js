import moment from "moment/moment.js";
import db from "../connect.js";
import jwt from "jsonwebtoken";

export const getPosts = async (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", async (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");

    const q = `SELECT p.*, u.id AS userid, name, profilepic FROM posts AS p 
    JOIN users AS u ON u.id = p.userid
    LEFT JOIN relationships AS r ON p.userid = r.followeduserid WHERE r.followeruserid = $1 OR p.userid = $2
    ORDER BY p.createdat DESC`;

    try {
      const { rows } = await db.query(q, [userInfo.id, userInfo.id]);
      return res.status(200).json(rows);
    } catch (error) {
      return res.status(500).json(error);
    }
  });
};

export const addPost = async (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", async (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid");

    const q = `INSERT INTO posts (description, img, userid, createdat) VALUES ($1, $2, $3, $4)`;
    const values = [
      req.body.description,
      req.body.img,
      userInfo.id,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
    ];

    try {
      const { rows } = await db.query(q, values);
      return res.status(200).json("Post has been created");
    } catch (error) {
      return res.status(500).json(error);
    }
  });
};
