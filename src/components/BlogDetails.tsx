import { Blog } from "../types/Blog";

interface BlogDetailsProps {
  blog: Blog;
  onDelete: () => void;
}

const BlogDetails: React.FC<BlogDetailsProps> = ({ blog, onDelete }) => (
  <div className="blog-details">
    <h1>{blog.title}</h1>
    <p>{blog.content}</p>
    <button onClick={onDelete}>Delete</button>
  </div>
);

export default BlogDetails;
