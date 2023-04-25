import "./comments.scss";
import profilePic from "../../assets/images/userProfile.jpg";
import Comment from "./Comment";
import WriteComment from "./WriteComment";
import { useAuthContext } from "../../context/AuthContext";

const COMMENTS = [
  {
    id: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid error soluta necessitatibus distinctio ero quas praesentium sapiente, perspiciatis nobis quae commodi, optio magnam quasi. Necessitatibus, eaque esse.",
    name: "Jane Doe",
    userId: 1,
    profilePic,
  },
  {
    id: 2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid error soluta necessitatibus distinctio ero quas praesentium sapiente, perspiciatis nobis quae commodi, optio magnam quasi. Necessitatibus, eaque esse.",
    name: "Jane Doe",
    userId: 2,
    profilePic,
  },
  {
    id: 3,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid error soluta necessitatibus distinctio ero quas praesentium sapiente, perspiciatis nobis quae commodi, optio magnam quasi. Necessitatibus, eaque esse.",
    name: "Jane Doe",
    userId: 3,
    profilePic,
  },
];

export default function Comments() {
  const { currentUser } = useAuthContext();

  return (
    <div className="comments">
      <WriteComment profilePic={currentUser?.imgUrl ?? ""} />
      {COMMENTS.map((comment) => (
        <Comment
          key={comment.id}
          name={comment.name}
          desc={comment.desc}
          profilePic={comment.profilePic}
        />
      ))}
    </div>
  );
}
