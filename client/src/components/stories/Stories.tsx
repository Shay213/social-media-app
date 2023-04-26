import "./stories.scss";
import story from "../../assets/images/story.jpg";
import Story from "./Story";
import { useAuthContext } from "../../context/AuthContext";
import Slider from "./Slider";

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
  {
    id: 5,
    name: "Jane Doe",
    url: story,
  },
  {
    id: 6,
    name: "Jane Doe",
    url: story,
  },
  {
    id: 7,
    name: "Jane Doe",
    url: story,
  },
];

export default function Stories() {
  const { currentUser } = useAuthContext();

  return (
    <Slider
      visibleElements={4}
      gap={10}
      height={300}
      options={{ autoFit: true, idealElWidth: 180 }}
    >
      <Story
        name={currentUser?.name ?? ""}
        url={currentUser?.profilepic ?? ""}
        isUser={true}
      />
      {STORIES.map((story) => (
        <Story key={story.id} name={story.name} url={story.url} />
      ))}
    </Slider>
  );
}
