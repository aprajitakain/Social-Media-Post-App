import { useContext } from "react";
import { PostFunctions } from "../store/store-post";
import styles from "./Post.module.css";
import { AiFillDelete } from "react-icons/ai";

const Post = () => {
  const { postList, deletePost } = useContext(PostFunctions);
  console.log(postList);
  return (
    <>
      {postList.map((post_list) => (
        <div
          key={post_list.reaction}
          className={`card ${styles["cards"]}`}
          style={{ width: "30rem" }}
        >
          <div key={post_list.reaction} className="card-body">
            <h5 className="card-title">{post_list.heading}</h5>
            <p className="card-text">{post_list.content}</p>
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => deletePost(post_list.heading)}
            >
              <AiFillDelete />
            </span>
            {post_list.hashtagsList.map((hastags) => (
              <span className={`badge text-bg-primary ${styles["hashtags"]}`}>
                {hastags}
              </span>
            ))}
            <div
              class={`${styles["reactions"]} alert alert-success `}
              role="alert"
            >{`This Post is Liked by ${post_list.reaction} people`}</div>
          </div>
        </div>
      ))}{" "}
    </>
  );
};
export default Post;
