import Buttons from "./Buttons";
import userPic from "../../assets/images/userProfile.jpg";

export default function Suggestions() {
  return (
    <div className="item">
      <span>Suggestions For You</span>
      <User name="Jane Doedddddddddddddddddddddddddddd" url={userPic} />
      <User name="Jane Doe" url={userPic} />
    </div>
  );
}

export interface UserInfoProps {
  name: string;
  url: string;
}

function User({ name, url }: UserInfoProps) {
  return (
    <div className="user">
      <div className="userInfo">
        <img src={url} alt="" />
        <span>{name}</span>
      </div>
      <Buttons />
    </div>
  );
}
