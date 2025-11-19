import { BrowserRouter as Router, Routes, Route } from "react-router";

import Home from "./pages/Home";
import Address from "./pages/Address";
import UsersList from "./pages/UsersList";
import PostsList from "./pages/PostsList";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/address" element={<Address />} />
        <Route path="/posts" element={<PostsList />} />
        <Route path="/users" element={<UsersList />} />
      </Routes>
    </Router>
  );
}

export default App;
