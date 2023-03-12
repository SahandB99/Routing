import { Route, Routes } from "react-router-dom";

import "./App.css";
import Container from "./components/container/Container";
import Navbar from "./components/navbar/Navbar";
import Article from "./pages/articles/Article";
import Articles from "./pages/articles/Articles";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<Article />} />
      </Routes>
      {/* <Navbar />
      <Container>
        <h1>hello</h1>
        <Home />

        <Articles />

        <br />
        <br />

        <Login />

        <br />
        <br />
      </Container> */}
    </>
  );
}

export default App;
