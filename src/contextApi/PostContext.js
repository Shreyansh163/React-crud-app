import { createContext, useEffect, useState } from "react";
import { getAllPostService } from "../apis/services";

export let PostContextApi = createContext();

const PostProvider = ({ children }) => {
  let [state, setState] = useState([]);
  useEffect(() => {
    getAllPostService().then(x => {
      // console.log(x);
      setState(x);
    });
  }, []);

  return (
    <PostContextApi.Provider value={{state, setState}}>
      {children}
    </PostContextApi.Provider>
  );
};

export default PostProvider;
