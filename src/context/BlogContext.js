import React, { createContext } from "react";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  return (
    <BlogContext.Provider value={"hi there"}>{children}</BlogContext.Provider>
  );
};

export default BlogContext;
