import "./posts.scss";
import Post from "./Post";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

interface IPost {
  id: number;
  name: string;
  profilepic: string;
  img: string;
  userid: number;
  description: string;
  createdat: string;
}

export default function Posts() {
  const { isLoading, error, data } = useQuery(["posts"], async () => {
    const res = await makeRequest.get("/posts");
    return res.data;
  });
  console.log(data);
  return (
    <div className="posts">
      {error
        ? "Something went wrong!"
        : isLoading
        ? "loading"
        : data.map((post: IPost) => (
            <Post
              key={post.id}
              name={post.name}
              profilePic={post.profilepic}
              img={post.img}
              userId={post.userid}
              desc={post.description}
              createdat={post.createdat}
            />
          ))}
    </div>
  );
}
