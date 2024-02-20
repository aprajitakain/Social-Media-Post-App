import { useContext } from "react";
import Post from "./Post";
import { PostFunctions } from "../store/store-post";
import { IoIosWarning } from "react-icons/io";

const PostList = () => {
  const { postList } = useContext(PostFunctions);
  console.log("I am postList", postList.length);
  return (
    <>
      {postList.length === 0 ? (
        <center>
          <div class="alert alert-warning" role="alert">
            <IoIosWarning /> Create a Post!
          </div>
        </center>
      ) : (
        <Post />
      )}
    </>
  );
};
export default PostList;
