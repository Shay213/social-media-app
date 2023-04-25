import { type UserInfoProps } from "./Suggestions";
import userPic from "../../assets/images/userProfile.jpg";

export default function LatestActivities() {
  return (
    <div className="item">
      <span>Latest Activities</span>
      <User
        name="Jane Doe"
        url={userPic}
        action="changed their cover picture"
        date="1 min ago"
      />
      <User
        name="Jane Doe"
        url={userPic}
        action="changed their cover picture"
        date="1 min ago"
      />
    </div>
  );
}

type ActivitiesUserInfoProps = UserInfoProps & { action: string; date: string };

function User({ name, url, action, date }: ActivitiesUserInfoProps) {
  return (
    <div className="user">
      <div className="userInfo">
        <img src={url} alt="" />
        <p>
          <span>{name} </span>
          {action}
        </p>
      </div>
      <span>{date}</span>
    </div>
  );
}
