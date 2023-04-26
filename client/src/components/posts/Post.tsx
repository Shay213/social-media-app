import "./post.scss";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";

// icons
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { useEffect, useState } from "react";
import moment from "moment";

interface PostProps {
  name: string;
  profilePic: string;
  img: string;
  userId: number;
  desc: string;
  createdat: string;
  postId: number;
}

export default function Post({
  name,
  profilePic,
  img,
  userId,
  desc,
  createdat,
  postId,
}: PostProps) {
  const [commentOpen, setCommentOpen] = useState(false);
  const liked = false;

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={profilePic} alt="" />
            <div className="details">
              <Link to={`/profile/${userId}`} style={{ color: "inherit" }}>
                <span className="name">{name}</span>
              </Link>
              <span className="date">{moment(createdat).fromNow()}</span>
            </div>
          </div>
          <MoreHorizOutlinedIcon />
        </div>
        <div className="content">
          <p>{desc}</p>
          <img src={"upload/" + img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            12 Likes
          </div>
          <div
            className="item"
            onClick={() => {
              setCommentOpen(!commentOpen);
            }}
          >
            <TextsmsOutlinedIcon />
            12 Comments
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments postId={postId} />}
      </div>
    </div>
  );
}
