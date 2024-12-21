import { deletePost } from "../api/blogApi"; // Add this line
import { Blog } from "../types/Blog";
import { Link } from "react-router-dom";

interface BlogListProps {
  blogs: Blog[];
}

const BlogList: React.FC<BlogListProps> = ({ blogs }) => (
  <div>
    {blogs.map((blog) => (
      <div key={blog.id} className="blog-item">
        <h2>
          <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
        </h2>
        <p>{blog.content.substring(0, 100)}...</p>
        <div className="blog-actions">
          <Link to={`/edit/${blog.id}`} className="edit-button">
            Edit
          </Link>
          <button
            onClick={async () => {
              if (window.confirm("Are you sure you want to delete this blog?")) {
                try {
                  await deletePost(blog.id); // Call deletePost function
                  window.location.reload(); // Reload the page to reflect deletion
                } catch (error) {
                  console.error("Failed to delete blog:", error);
                }
              }
            }}
            className="delete-button"
          >
            Delete
          </button>
          <Link to={`/blogs/${blog.id}`} className="view-button">
            View
          </Link>
        </div>
      </div>
    ))}
  </div>
);

export default BlogList;
