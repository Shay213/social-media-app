import "./posts.scss";
import profilePic from "../../assets/images/userProfile.jpg";
import img from "../../assets/images/postImg.jpg";
import Post from "./Post";

const POSTS = [
  {
    id: 1,
    name: "John Doe",
    userId: 1,
    profilePic,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi architecto hic cita explicabo laboriosam nisi debitis maxime soluta harum suscipit?",
    img,
  },
  {
    id: 2,
    name: "John Doe",
    userId: 2,
    profilePic,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi architecto hic cita explicabo laboriosam nisi debitis maxime soluta harum suscipit?",
    img,
  },
  {
    id: 3,
    name: "John Doe",
    userId: 3,
    profilePic,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi architecto hic cita explicabo laboriosam nisi debitis maxime soluta harum suscipit?",
    img,
  },
  {
    id: 4,
    name: "John Doe",
    userId: 4,
    profilePic,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi architecto hic cita explicabo laboriosam nisi debitis maxime soluta harum suscipit?",
    img,
  },
];

export default function Posts() {
  return (
    <div className="posts">
      {POSTS.map((post) => (
        <Post
          key={post.id}
          name={post.name}
          profilePic={post.profilePic}
          img={post.img}
          userId={post.userId}
          desc={post.desc}
        />
      ))}
    </div>
  );
}
