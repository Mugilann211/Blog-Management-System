import { useEffect, useState } from "react";
import { fetchPosts } from "../api/blogApi";
import { Blog } from "../types/Blog";
import BlogList from "../components/BlogList";

const HomePage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetchPosts().then(setBlogs);
  }, []);

  return <BlogList blogs={blogs} />;
};

export default HomePage;
