import "./profile.scss";
import Posts from "../../components/posts/Posts";

// img
import profileImg from "../../assets/images/userProfile.jpg";
import background from "../../assets/images/background.jpg";

// icons
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

export default function Profile() {
  return (
    <div className="profile">
      <div className="images">
        <img src={background} alt="" className="cover" />
        <img src={profileImg} alt="" className="profilePic" />
      </div>
      <div className="profileContainer">
        <div className="userInfo">
          <div className="left">
            <a href="http:facebook.com">
              <FacebookIcon fontSize="large" />
            </a>
            <a href="http:facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http:facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http:facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http:facebook.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Jane Doe</span>
            <div className="info">
              <div className="item">
                <PlaceOutlinedIcon />
                <span>USA</span>
              </div>
              <div className="item">
                <LanguageOutlinedIcon />
                <span>example.com</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertOutlinedIcon />
          </div>
        </div>
      </div>
      <div className="postsContainer" style={{ padding: "20px 70px" }}>
        <Posts />
      </div>
    </div>
  );
}
