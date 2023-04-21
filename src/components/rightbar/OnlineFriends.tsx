import { type UserInfoProps } from "./Suggestions";

export default function OnlineFriends() {
  return (
    <div className="item">
      <span>Online Friends</span>
      <div className="user">
        <UserInfo name="Jane Doe" url="" />
      </div>
    </div>
  );
}

function UserInfo({ name, url }: UserInfoProps) {
  return (
    <div className="userInfo">
      <img src={url} alt="" />
      <div className="online" />
      <span>{name}</span>
    </div>
  );
}
