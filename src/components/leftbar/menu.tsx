import Item from "./item";
import { type MenuSection } from "./leftbar";

export default function Menu({ title, items }: MenuSection) {
  return (
    <div className="menu">
      <span>{title}</span>
      {items.map((item, key) => (
        <Item name={item.name} url={item.url} key={key} />
      ))}
    </div>
  );
}
