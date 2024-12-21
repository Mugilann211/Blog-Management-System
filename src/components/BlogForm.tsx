import { Blog } from "../types/Blog";
import { useState } from "react";

interface BlogFormProps {
  initialData?: Omit<Blog, "id">;
  onSubmit: (blog: Omit<Blog, "id">) => void;
}

const BlogForm: React.FC<BlogFormProps> = ({ initialData, onSubmit }) => {
  const [title, setTitle] = useState(initialData?.title || "");
  const [content, setContent] = useState(initialData?.content || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, content });
  };

  return (
    <form onSubmit={handleSubmit} className="blog-form">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default BlogForm;
