import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./component/layouts/layout";
import SingIn from "./pages/singin";
import SingUp from "./pages/singup";
import About from "./pages/about";
import UserLayout from "./component/layouts/user-layout";
import Profile from "./pages/profile";
import { AuthProvider } from "./providers/AuthProvider";
import Contact from "./pages/contact";

export const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/singin" element={<SingIn />} />
          <Route path="/singup" element={<SingUp />} />
          <Route path="/contacts" element={<Contact />} />
        </Route>

        <Route element={<UserLayout />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};
