import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

import { Stories } from "@/pages/Stories.tsx";
import Story from "@/pages/Story.tsx";
import Chapter from "@/pages/Chapter.tsx";
import DefaultLayout from "@/layouts/default.tsx";

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route element={<Home />} path="/" />
        <Route element={<Stories />} path="/stories" />
        <Route element={<Story />} path="/stories/:storyId" />
        <Route element={<Chapter />} path="/stories/:storyId/:chapterId" />
        <Route element={<div>Fan art</div>} path="/fan-art" />
        <Route element={<div>Kid-friendly</div>} path="/kids" />
        <Route element={<div>Author&#39;s more</div>} path="/author" />
        <Route element={<div>FAQ</div>} path="/faq" />
        <Route element={<div>Donate</div>} path="/donate" />
      </Route>
    </Routes>
  );
}

export default App;
