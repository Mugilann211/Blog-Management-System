import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchBlogById } from "../api/blogApi";
import { Blog } from "../types/Blog";

const ViewPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    if (id) {
      fetchBlogById(parseInt(id)).then((data) => setBlog(data));
    }
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <Link to="/">Back to Blog List</Link>
    </div>
  );
};

export default ViewPostPage;
