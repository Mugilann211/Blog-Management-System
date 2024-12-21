import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import NewPostPage from "./pages/NewPostPage";
import EditPostPage from "./pages/EditPostPage";
import ViewPostPage from "./pages/ViewPostPage";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/new" element={<NewPostPage />} />
      <Route path="/edit/:id" element={<EditPostPage />} />
      <Route path="/blogs/:id" element={<ViewPostPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
