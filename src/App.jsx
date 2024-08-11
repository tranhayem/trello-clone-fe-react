import { useState } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import Header from "./components/header/Navbar";

import NotFound from "./pages/NotFound";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Workspaces from "./pages/workspaces/Workspaces";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <Router>
      {loggedIn && <Header />}
      <Routes>
        <Route
          path="/"
          element={loggedIn ? <Dashboard /> : <Navigate to="/login" />}
        />

        <Route
          path="/login"
          element={loggedIn ? <Navigate to="/" /> : <Login />}
        />

        <Route
          path="/workspaces"
          element={loggedIn ? <Workspaces /> : <Navigate to="/login" />}
        />

        <Route
          path="*"
          element={loggedIn ? <NotFound /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
