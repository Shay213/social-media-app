import "./leftbar.scss";

// icons
import fundraiser from "../../assets/images/building-home-house-svgrepo-com.svg";
import events from "../../assets/images/calendar-svgrepo-com.svg";
import gallery from "../../assets/images/camera-svgrepo-com.svg";
import friends from "../../assets/images/chat-conversation-laptop-svgrepo-com.svg";
import marketplace from "../../assets/images/color-lineal-marketplace-svgrepo-com.svg";
import tutorials from "../../assets/images/ebook-elearning-education-laptop-online-online-learning-svgrepo-com.svg";
import gaming from "../../assets/images/gamecontroller-svgrepo-com.svg";
import groups from "../../assets/images/group-svgrepo-com.svg";
import memories from "../../assets/images/image-svgrepo-com.svg";
import messages from "../../assets/images/mail-svgrepo-com.svg";
import watch from "../../assets/images/play-svgrepo-com.svg";
import courses from "../../assets/images/training-elearning-education-tablet-online-electronics-svgrepo-com.svg";
import videos from "../../assets/images/videocameracompact-svgrepo-com.svg";

// components
import Menu from "./menu";

interface Item {
  name: string;
  url: string;
}

export interface MenuSection {
  title: string;
  items: Item[];
}

const menuSections: MenuSection[] = [
  {
    title: "",
    items: [
      { name: "John Doe", url: "" },
      { name: "Friends", url: friends },
      { name: "Groups", url: groups },
      { name: "Marketplace", url: marketplace },
      { name: "Watch", url: watch },
      { name: "Memories", url: memories },
    ],
  },
  {
    title: "Your shortcuts",
    items: [
      { name: "Events", url: events },
      { name: "Gaming", url: gaming },
      { name: "Gallery", url: gallery },
      { name: "Videos", url: videos },
      { name: "Messages", url: messages },
    ],
  },
  {
    title: "Others",
    items: [
      { name: "Fundraiser", url: fundraiser },
      { name: "Tutorials", url: tutorials },
      { name: "Courses", url: courses },
    ],
  },
];

export default function Leftbar() {
  return (
    <div className="leftbar">
      <div className="container">
        {menuSections.map((menuSection, key) => (
          <>
            <Menu title={menuSection.title} items={menuSection.items} />
            {key !== menuSections.length - 1 ? <hr /> : null}
          </>
        ))}
      </div>
    </div>
  );
}
