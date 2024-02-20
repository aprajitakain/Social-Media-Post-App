import { useContext, useRef } from "react";
import { PostFunctions } from "../store/store-post";

const CreatePost = () => {
  const { addPost } = useContext(PostFunctions);
  let heading_enter = useRef();
  let content_enter = useRef();
  let reaction_enter = useRef();
  let hashtags_enter = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    let heading = heading_enter.current.value;
    let content = content_enter.current.value;
    let reaction = reaction_enter.current.value;
    let hashtagsList = hashtags_enter.current.value.split(" ");
    heading_enter.current.value = "";
    content_enter.current.value = "";
    reaction_enter.current.value = "";
    hashtags_enter.current.value = [];
    addPost(heading, content, reaction, hashtagsList);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="InputHeading" className="form-label">
          Heading
        </label>
        <input
          type="text"
          className="form-control"
          id="InputHeading"
          aria-describedby="emailInfo"
          ref={heading_enter}
          placeholder="Write the Heading for the post."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="InputContent" className="form-label">
          Content
        </label>
        <textarea
          type="text"
          rows="4"
          className="form-control"
          id="InputContent"
          placeholder="Tell us more about it"
          ref={content_enter}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to it?"
          ref={reaction_enter}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="hashtags" className="form-label">
          Hashtags
        </label>
        <input
          type="text"
          className="form-control"
          id="hashtags"
          placeholder="Enter your Hashtags here using space!"
          ref={hashtags_enter}
        />
      </div>

      <button type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  );
};
export default CreatePost;
