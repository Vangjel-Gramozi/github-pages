import {Link} from "react-router-dom";

export default function Home() {
    return <div>Welcome — pick a story from <Link to="/stories">Stories</Link>.</div>;
}