import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Item from "./pages/Item";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { AuthProvider } from "./Utils/AuthContext";
import { useEffect } from "react";
import { auth } from "./Utils/firebase";
import Admin from "./pages/Admin";
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [timeActive, setTimeActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [imgPath, setImgPath] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(
      auth,
      (user) => {
        setCurrentUser(user);
        setLoading(false);
      },
      []
    );
  }, []);

  if (loading) {
    return (
      <div>
        <h1>loading.....</h1>
      </div>
    );
  }
  const setProductDetails = (name, imgPath, description) => {
    setName(name);
    setImgPath(imgPath);
    setDescription(description);
  };

  return (
    <BrowserRouter>
      <AuthProvider value={{ currentUser, timeActive, setTimeActive }}>
        {currentUser && currentUser.emailVerified ? (
          <Routes>
            <Route
              path="/"
              element={<Home setProductDetails={setProductDetails} />}
            >
              {/* <Route path="*" element ={<NoPage/>}/> */}
            </Route>
            <Route
              path="item"
              element={
                <Item name={name} imgPath={imgPath} description={description} />
              }
            />
          </Routes>
        ) : (
          <Routes>
            <Route
              path="/"
              element={<Home setProductDetails={setProductDetails} />}
            >
              {/* <Route path="*" element ={<NoPage/>}/> */}
            </Route>
            <Route
              path="item"
              element={
                <Item name={name} imgPath={imgPath} description={description} />
              }
            />
            <Route path="admin" element={<Admin />} />
          </Routes>
        )}
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
