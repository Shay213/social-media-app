import moment from "moment";
import db from "../connect.js";
import jwt from "jsonwebtoken";

export const getComments = async (req, res) => {
  const q = `SELECT c.*, u.id AS userid, name, profilepic FROM comments AS c 
  JOIN users AS u ON u.id = c.commentsuserid 
  WHERE c.postid = $1 
  ORDER BY c.createdat DESC`;

  try {
    const { rows } = await db.query(q, [req.query.postId]);
    return res.status(200).json(rows);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const addComment = async (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", async (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "INSERT INTO comments (description, createdat, postid, commentsuserid) VALUES ($1, $2, $3, $4);";
    const values = [
      req.body.description,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      req.body.postId,
      userInfo.id,
    ];

    try {
      const { rows } = await db.query(q, values);
      return res.status(200).json("Comments has been created");
    } catch (error) {
      return res.status(500).json(error);
    }
  });
};
