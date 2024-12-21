import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchBlogById, updatePost } from "../api/blogApi";
import BlogForm from "../components/BlogForm";
import { Blog } from "../types/Blog";

const EditPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [initialBlog, setInitialBlog] = useState<Omit<Blog, "id"> | null>(null);

  useEffect(() => {
    if (id) {
      fetchBlogById(parseInt(id)).then((blog) => {
        setInitialBlog({ title: blog.title, content: blog.content });
      });
    }
  }, [id]);

  const handleEditPost = async (updatedBlog: Omit<Blog, "id">) => {
    if (id) {
      await updatePost(parseInt(id), { id: parseInt(id), ...updatedBlog });
      navigate("/");
    }
  };

  if (!initialBlog) return <p>Loading...</p>;

  return <BlogForm initialData={initialBlog} onSubmit={handleEditPost} />;
};

export default EditPostPage;
