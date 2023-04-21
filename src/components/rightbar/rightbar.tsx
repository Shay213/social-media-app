import LatestActivities from "./latestActivites";
import OnlineFriends from "./onlineFriends";
import "./rightbar.scss";
import Suggestions from "./suggestions";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="container">
        <Suggestions />
        <LatestActivities />
        <OnlineFriends />
      </div>
    </div>
  );
}
