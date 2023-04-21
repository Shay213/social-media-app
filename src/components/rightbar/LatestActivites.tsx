import { type UserInfoProps } from "./Suggestions";

export default function LatestActivities() {
  return (
    <div className="item">
      <span>Latest Activities</span>
      <div className="user">
        <UserInfo name="Jane Doe" url="" action="changed their cover picture" />
        <span>1 min ago</span>
      </div>
    </div>
  );
}

type ActivitiesUserInfoProps = UserInfoProps & { action: string };

function UserInfo({ name, url, action }: ActivitiesUserInfoProps) {
  return (
    <div className="userInfo">
      <img src={url} alt="" />
      <p>
        <span>{name} </span>
        {action}
      </p>
    </div>
  );
}
