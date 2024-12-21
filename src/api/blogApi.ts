import { Blog } from "../types/Blog";

const API_URL = "http://localhost:5000/posts";

export const fetchPosts = async (): Promise<Blog[]> => {
  const response = await fetch(API_URL);
  return await response.json();
};

export const fetchBlogById = async (id: number): Promise<Blog> => {
  const response = await fetch(`${API_URL}/${id}`);
  return await response.json();
};

export const createPost = async (post: Omit<Blog, "id">): Promise<Blog> => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });
  return await response.json();
};

export const updatePost = async (id: number, updatedPost: Blog): Promise<Blog> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedPost),
  });
  return await response.json();
};

export const deletePost = async (id: number): Promise<void> => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};
