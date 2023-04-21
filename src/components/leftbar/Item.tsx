export default function Item({ name, url }: { name: string; url: string }) {
  return (
    <div className="item">
      <img src={url} alt="" />
      <span>{name}</span>
    </div>
  );
}
