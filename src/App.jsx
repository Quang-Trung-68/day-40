import { BrowserRouter as Router, Routes, Route } from "react-router";

import Home from "./pages/Home";
import Address from "./pages/Address";
import PostList from "./pages/PostsList";
import UsersList from "./pages/UsersList";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/address" element={<Address />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/users" element={<UsersList />} />
      </Routes>
    </Router>
  );
}

export default App;
