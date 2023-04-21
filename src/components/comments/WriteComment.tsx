import "./writeComment.scss";

export default function WriteComment({ profilePic }: { profilePic: string }) {
  return (
    <div className="writeComment">
      <img src={profilePic} alt="" />
      <input type="text" placeholder="Write a comment" />
      <button>Send</button>
    </div>
  );
}
