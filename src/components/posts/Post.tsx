import "./post.scss";

interface PostProps {
  name: string;
  profilePic: string;
  img: string;
}

export default function Post({ name, profilePic, img }: PostProps) {
  return (
    <div className="post">
      <div className="user"></div>
      <div className="content"></div>
      <div className="info"></div>
    </div>
  );
}
