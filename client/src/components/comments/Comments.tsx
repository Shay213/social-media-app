import "./comments.scss";
import Comment from "./Comment";
import WriteComment from "./WriteComment";
import { useAuthContext } from "../../context/AuthContext";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useRef } from "react";

interface IComment {
  id: number;
  name: string;
  description: string;
  profilepic: string;
  createdat: string;
}

interface NewComment {
  description: string;
  postId: number;
}

export default function Comments({ postId }: { postId: number }) {
  const { currentUser } = useAuthContext();
  const descRef = useRef<null | {
    getDesc: () => string;
    setDesc: (val: string) => () => void;
  }>(null);

  const { isLoading, error, data } = useQuery(["comments"], async () => {
    const res = await makeRequest.get("/comments?postId=" + postId);
    return res.data;
  });

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newComment: NewComment) => {
      return makeRequest.post("/comments", newComment);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["comments"]);
      },
    }
  );

  const handleClick = async (e: MouseEvent) => {
    e.preventDefault();
    const description = descRef.current?.getDesc() ?? "";
    mutation.mutate({ description, postId });
    descRef.current?.setDesc("");
  };

  return (
    <div className="comments">
      <WriteComment
        profilePic={currentUser?.profilepic ?? ""}
        handleClick={handleClick}
        ref={descRef}
      />
      {isLoading
        ? "Loading..."
        : data.map((comment: IComment) => (
            <Comment
              key={comment.id}
              name={comment.name}
              desc={comment.description}
              profilePic={comment.profilepic}
              createdat={comment.createdat}
            />
          ))}
    </div>
  );
}
