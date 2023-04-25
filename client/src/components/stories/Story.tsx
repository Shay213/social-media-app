interface StoryProps {
  name: string;
  url: string;
  isUser?: boolean;
}

export default function Story({ name, url, isUser }: StoryProps) {
  return (
    <div className="story">
      <img src={url} alt="" />
      <span>{name}</span>
      {isUser === true ? <button>+</button> : null}
    </div>
  );
}
