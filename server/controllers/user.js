import db from "../connect.js";

export const getUser = async (req, res) => {
  const userId = req.params.userId;
  const q = "SELECT * FROM users WHERE id = $1";

  try {
    const { rows } = await db.query(q, [userId]);
    const { password, ...info } = rows[0];
    return res.status(200).json(info);
  } catch (error) {
    return res.status(500).json(error);
  }
};
