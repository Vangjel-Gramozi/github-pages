import {Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Stories from "./pages/Stories";
import Story from "./pages/Story";
import Chapter from "./pages/Chapter";

export default function App() {
    return (
        <div>
            <header style={{padding: 16, textAlign: "center"}}>
                <h1>Into the Tall Grass</h1>
                <nav style={{display: "flex", gap: 12, justifyContent: "center"}}>
                    <Link to="/">Home</Link>
                    <Link to="/stories">Stories</Link>
                    <Link to="/fan-art">Fan Art</Link>
                    <Link to="/kids">Kid Version</Link>
                    <Link to="/author">Author's More</Link>
                    <Link to="/faq">FAQ</Link>
                    <Link to="/donate">Donate</Link>
                </nav>
            </header>

            <main style={{padding: 24}}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/stories" element={<Stories/>}/>
                    <Route path="/stories/:storyId" element={<Story/>}/>
                    <Route path="/stories/:storyId/:chapterId" element={<Chapter/>}/>
                    <Route path="/fan-art" element={<div>Fan art</div>}/>
                    <Route path="/kids" element={<div>Kid-friendly</div>}/>
                    <Route path="/author" element={<div>Author's more</div>}/>
                    <Route path="/faq" element={<div>FAQ</div>}/>
                    <Route path="/donate" element={<div>Donate</div>}/>
                </Routes>
            </main>
        </div>
    );
}