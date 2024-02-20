import { createContext, useContext, useReducer } from "react";

export const PostFunctions = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});
function PostReducerFunc(currentPostList, action) {
  let newItems = currentPostList;
  if (action.type === "ADD_ITEM") {
    if (
      action.payload.heading != "" &&
      action.payload.content != "" &&
      action.payload.heading != undefined &&
      action.payload.content != undefined
    ) {
      console.log("reducer", action.payload.hashtagsList);
      newItems = [
        ...currentPostList,
        {
          heading: action.payload.heading,
          content: action.payload.content,
          reaction: action.payload.reaction,
          hashtagsList: action.payload.hashtagsList,
        },
      ];
    } else {
      newItems = [...currentPostList];
    }
  } else if (action.type === "DELETE_ITEM") {
    newItems = currentPostList.filter(
      (item) => item.heading !== action.payload.heading
    );
  }
  return newItems;
}
const PostFunctionsProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(PostReducerFunc, [
    {
      heading: "Heading_Example_Input",
      content: "Content_Example_Input",
      reaction: "2",
      hashtagsList: ["#hashtag1", "#hashtag2", "#hashtag3"],
    },
  ]);
  const addPost = (heading, content, reaction, hashtagsList) => {
    console.log(hashtagsList);
    const addItemAction = {
      type: "ADD_ITEM",
      payload: {
        heading: heading,
        content: content,
        reaction: reaction,
        hashtagsList: hashtagsList,
      },
    };
    dispatchPostList(addItemAction);
  };
  const deletePost = (heading) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: { heading: heading },
    };
    dispatchPostList(deleteItemAction);
  };
  return (
    <PostFunctions.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostFunctions.Provider>
  );
};
export default PostFunctionsProvider;
