import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../helpers/useFetch";
import ScrollToTop from "../helpers/ScrollToTop";

const BlogDetails = () => {
  const { id } = useParams();
  // const history = useHistory();
  const { data, isLoading, error } = useFetch("../data/db/blogs.json");
  const [blog, setBlog] = useState(null);
  const [liked, setLiked] = useState(false);

  const fillterById = (id, data) => {
    if (!data || data.length === 0) return null;
    return data.blogs.find((blog) => blog.id === parseInt(id));
  };

  // FOR TEST
  useEffect(() => {
    setBlog(fillterById(id, data));
  }, [id, data]);

  useEffect(() => {
    console.log("blog::", blog);
  }, [blog]);

  // const handleDelete = () => {
  //   fetch(`http://localhost:1337/blogs/` + data.blog.id, {
  //     method: "DELETE",
  //   }).then(() => {
  //     // history.push("/");
  //   });
  // };

  // const toggleLike = () => {
  //   let localLiked = liked;
  //   localLiked = !localLiked;
  //   setLiked(localLiked);
  //   if (localLiked) {
  //     console.log("liked");
  //   } else {
  //     console.log("unliked");
  //   }
  // };

  return (
    <>
      <ScrollToTop />
      <div className="w-4/5 md:w-7/12 mx-auto md:mt-10">
        {isLoading && <div>Loading...</div>}
        {error && <div>{error}.</div>}
        {/* {console.log(data.blog)} */}
        {data.length === 0 ? (
          ""
        ) : (
          <div>
            <h2 className="py-2 blog-detail-title">{blog?.title}</h2>
            <p className="text-sub-title text-sm mb-6">
              Written by {blog?.author}
            </p>
            <div>
              <img
                className="w-full object-cover h-40 md:h-4/5 mb-6 rounded"
                src={blog?.blogImage}
                alt="image"
              />
              <p className="text-content text-justify">{blog?.body}</p>
            </div>
            {/* <div className="my-4 flex space-x-4">
              <div
                className="text-red-500 hover:text-black"
                onClick={handleDelete}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </div>
              <div className="" onClick={toggleLike}>
                {liked === false ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current text-red-500 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                )}
              </div>
            </div> */}
          </div>
        )}
      </div>
    </>
  );
};

export default BlogDetails;
