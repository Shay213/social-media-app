import "./stories.scss";
import story from "../../assets/images/story.jpg";
import Story from "./Story";
import { useAuthContext } from "../../context/AuthContext";

const STORIES = [
  {
    id: 1,
    name: "Jane Doe",
    url: story,
  },
  {
    id: 2,
    name: "Jane Doe",
    url: story,
  },
  {
    id: 3,
    name: "Jane Doe",
    url: story,
  },
  {
    id: 4,
    name: "Jane Doe",
    url: story,
  },
];

export default function Stories() {
  const { currentUser } = useAuthContext();

  return (
    <div className="stories">
      <Story
        name={currentUser?.name ?? ""}
        url={currentUser?.imgUrl ?? ""}
        isUser={true}
      />
      {STORIES.map((story) => (
        <Story key={story.id} name={story.name} url={story.url} />
      ))}
    </div>
  );
}
