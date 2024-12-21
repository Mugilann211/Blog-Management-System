import BlogForm from "../components/BlogForm";
import { createPost } from "../api/blogApi";
import { useNavigate } from "react-router-dom";
import { Blog } from "../types/Blog"; // Import the Blog interface


const NewPostPage = () => {
  const navigate = useNavigate();

  const handleCreatePost = async (newPost: Omit<Blog, "id">) => {
    await createPost(newPost);
    navigate("/");
  };

  return <BlogForm onSubmit={handleCreatePost} />;
};

export default NewPostPage;
