import "./comment.scss";

interface CommentsProps {
  name: string;
  desc: string;
  profilePic: string;
}

export default function Comments({ name, desc, profilePic }: CommentsProps) {
  return (
    <div className="comment">
      <img src={profilePic} alt="" />
      <div className="info">
        <span>{name}</span>
        <p>{desc}</p>
      </div>
      <span className="date">1 hour ago</span>
    </div>
  );
}
