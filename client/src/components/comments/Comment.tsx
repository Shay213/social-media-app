import moment from "moment";
import "./comment.scss";

interface CommentsProps {
  name: string;
  desc: string;
  profilePic: string;
  createdat: string;
}

export default function Comments({
  name,
  desc,
  profilePic,
  createdat,
}: CommentsProps) {
  return (
    <div className="comment">
      <img src={profilePic} alt="" />
      <div className="info">
        <span>{name}</span>
        <p>{desc}</p>
      </div>
      <span className="date">{moment(createdat).fromNow()}</span>
    </div>
  );
}
