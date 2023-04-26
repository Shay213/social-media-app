import "./profile.scss";
import Posts from "../../components/posts/Posts";

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
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useLocation } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

export default function Profile() {
  const userId = useLocation().pathname.split("/")[2];
  const { currentUser } = useAuthContext();

  const { isLoading, error, data } = useQuery(["user"], async () => {
    const res = await makeRequest("/users/find/" + userId);
    return res.data;
  });

  return (
    <div className="profile">
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <div className="images">
            <img src={data?.coverpic ?? ""} alt="" className="cover" />
            <img src={data?.profilepic ?? ""} alt="" className="profilePic" />
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
                <span>{data?.name}</span>
                <div className="info">
                  {data?.city && (
                    <div className="item">
                      <PlaceOutlinedIcon />
                      <span>{data.city}</span>
                    </div>
                  )}
                  {data?.website && (
                    <div className="item">
                      <LanguageOutlinedIcon />
                      <span>{data.website}</span>
                    </div>
                  )}
                </div>
                {+userId === currentUser?.id ? (
                  <button>Update</button>
                ) : (
                  <button>Follow</button>
                )}
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
        </>
      )}
    </div>
  );
}
