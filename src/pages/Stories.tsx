import { Link } from "react-router-dom";

const STORIES = [
    { id: "island-challenge", title: "Island Challenge", chapters: ["chapter-1"] },
    { id: "story-2", title: "Story 2", chapters: ["chapter-1"] },
];

export default function Stories() {
    return (
        <div>
            <h2>Stories</h2>
            <ul>
                {STORIES.map(s => (
                    <li key={s.id}>
                        <Link to={`/stories/${s.id}`}>{s.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}