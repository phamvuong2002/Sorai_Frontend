import React, { useState } from "react";
import useFetch from "../helpers/useFetch";
import BlogList from "../components/Blogs/BlogList";

export const Blogs = () => {
  const { data, isLoading, error } = useFetch("/data/db/blogs.json");

  const [searchTerm, setSearchTerm] = useState("");
  const [searchCategory, setSearchCategory] = useState("None");
  const [searchResults, setSearchResults] = useState([]);
  const [searchArray, setSearchArray] = useState([]);
  const categoryHandler = (searchCategory) => {
    setSearchCategory(searchCategory);

    if (searchCategory !== "None") {
      const newBlogList = data.blogs.filter(
        (blog) => blog.category.toLowerCase() === searchCategory.toLowerCase()
      );
      setSearchArray(newBlogList);
      setSearchResults(newBlogList);
    } else {
      setSearchArray(data.blogs);
      setSearchResults(data.blogs);
    }
  };

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);

    if (searchTerm !== "") {
      const newBlogList = searchArray.filter((blog) => {
        return Object.values(blog)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newBlogList);
    } else {
      setSearchResults(data.blogs);
    }
  };
  return (
    <div>
      <div className="w-4/5 md:w-9/12 mx-auto mt-10"></div>
      {data.length === 0 ? (
        ""
      ) : (
        <BlogList
          blogs={
            // searchTerm.length < 1 && searchCategory === "None"
            //   ? data.blogs
            //   : searchResults
            data.blogs
          }
          searchTerm={searchTerm}
          searchCategory={searchCategory}
          searchHandler={searchHandler}
          categoryHandler={categoryHandler}
        />
      )}
    </div>
  );
};
