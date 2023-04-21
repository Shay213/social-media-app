import "./home.scss";

// components
import Posts from "../../components/posts/Posts";
import Stories from "../../components/stories/Stories";

export default function Home() {
  return (
    <div className="home">
      <Stories />
      <Posts />
    </div>
  );
}
