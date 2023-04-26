import { useAuthContext } from "../../context/AuthContext";
import "./share.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// icons
import map from "../../assets/images/map-gps-svgrepo-com.svg";
import image from "../../assets/images/photo-the-most-beautiful-travel-map-svgrepo-com.svg";
import friend from "../../assets/images/add-user-circle-left-svgrepo-com.svg";
import { useState } from "react";
import { makeRequest } from "../../axios";

interface NewPost {
  description: string;
  img: string;
}

export default function Share() {
  const { currentUser } = useAuthContext();
  const [file, setFile] = useState("");
  const [description, setDesc] = useState("");

  const queryClient = useQueryClient();

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const mutation = useMutation(
    (newPost: NewPost) => {
      return makeRequest.post("/posts", newPost);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    let imgUrl = "";
    if (file) imgUrl = await upload();
    mutation.mutate({ description, img: imgUrl });
    setDesc("");
    setFile("");
  };

  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <div className="left">
            <img src={currentUser?.coverpic} alt="" />
            <input
              type="text"
              placeholder={`What's on your mind ${currentUser?.name}?`}
              onChange={(e) => setDesc(e.target.value)}
              value={description}
            />
          </div>
          <div className="right">
            {file && (
              <img
                className="file"
                alt=""
                src={URL.createObjectURL(file as any)}
              />
            )}
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e: any) => setFile(e.target.files[0])}
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
