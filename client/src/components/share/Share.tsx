import { useAuthContext } from "../../context/AuthContext";
import "./share.scss";

// icons
import map from "../../assets/images/map-gps-svgrepo-com.svg";
import image from "../../assets/images/photo-the-most-beautiful-travel-map-svgrepo-com.svg";
import friend from "../../assets/images/add-user-circle-left-svgrepo-com.svg";
import { useState } from "react";

export default function Share() {
  const { currentUser } = useAuthContext();
  const [file, setFile] = useState("");
  const [desc, setDesc] = useState("");

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <img src={currentUser?.coverpic} alt="" />
          <input
            type="text"
            placeholder={`What's on your mind ${currentUser?.name}?`}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="file">
              <div className="item">
                <img src={image} alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src={map} alt="" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src={friend} alt="" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button onClick={handleClick}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
}
