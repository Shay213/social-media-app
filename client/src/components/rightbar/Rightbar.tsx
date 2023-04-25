import LatestActivities from "./LatestActivites";
import OnlineFriends from "./OnlineFriends";
import "./rightbar.scss";
import Suggestions from "./Suggestions";

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
