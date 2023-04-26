import db from "../connect.js";
import jwt from "jsonwebtoken";

export const getLikes = async (req, res) => {
  const q = "SELECT likesuserid FROM likes WHERE likespostid = $1";

  try {
    const { rows } = await db.query(q, [req.query.postId]);
    return res.status(200).json(rows.map((like) => like.likesuserid));
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const addLike = async (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", async (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q = "INSERT INTO likes (likesuserid, likespostid) VALUES ($1, $2)";
    const values = [userInfo.id, req.body.postId];

    try {
      const { rows } = await db.query(q, values);
      return res.status(200).json("Post has been liked.");
    } catch (error) {
      return res.status(500).json(error);
    }
  });
};

export const deleteLike = async (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", async (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q = "DELETE FROM likes WHERE likesuserid = $1 AND likespostid = $2";
    const values = [userInfo.id, req.body.postId];

    try {
      const { rows } = await db.query(q, values);
      return res.status(200).json("Post has been disliked");
    } catch (error) {
      return res.status(500).json(error);
    }
  });
};
