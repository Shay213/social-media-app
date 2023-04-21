import Buttons from "./buttons";

export default function Suggestions() {
  return (
    <div className="item">
      <span>Suggestions For You</span>
      <div className="user">
        <UserInfo name="Jane Doe" url="" />
        <Buttons />
      </div>
    </div>
  );
}

export interface UserInfoProps {
  name: string;
  url: string;
}

function UserInfo({ name, url }: UserInfoProps) {
  return (
    <div className="userInfo">
      <img src={url} alt="" />
      <span>{name}</span>
    </div>
  );
}
