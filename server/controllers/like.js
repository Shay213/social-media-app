import db from "../connect.js";

export const getLikes = async (req, res) => {
  const q = "SELECT likesuserid FROM likes WHERE likespostid = $1";

  try {
    const { rows } = await db.query(q, [req.query.postId]);
    return res.status(200).json(rows.map((like) => like.likesuserid));
  } catch (error) {
    return res.status(500).json(error);
  }
};
