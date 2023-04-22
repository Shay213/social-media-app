import { type UserInfoProps } from "./Suggestions";
import userPic from "../../assets/images/userProfile.jpg";

export default function OnlineFriends() {
  return (
    <div className="item">
      <span>Online Friends</span>
      <User name="Jane Doe" url={userPic} />
      <User name="Jane Doe" url={userPic} />
      <User name="Jane Doe" url={userPic} />
      <User name="Jane Doe" url={userPic} />
    </div>
  );
}

function User({ name, url }: UserInfoProps) {
  return (
    <div className="user">
      <div className="userInfo">
        <img src={url} alt="" />
        <div className="online" />
        <span>{name}</span>
      </div>
    </div>
  );
}
