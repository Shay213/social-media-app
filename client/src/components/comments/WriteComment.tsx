import { forwardRef, useImperativeHandle, useState } from "react";
import "./writeComment.scss";

const WriteComment = forwardRef(
  (
    {
      profilePic,
      handleClick,
    }: {
      profilePic: string;
      handleClick: (e: any) => Promise<void>;
    },
    ref
  ) => {
    const [desc, setDesc] = useState("");

    useImperativeHandle(ref, () => {
      return {
        getDesc: () => desc,
        setDesc: (val: string) => setDesc(val),
      };
    });

    return (
      <div className="writeComment">
        <img src={profilePic} alt="" />
        <input
          type="text"
          placeholder="Write a comment"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        />
        <button onClick={(e) => handleClick(e)}>Send</button>
      </div>
    );
  }
);

export default WriteComment;
