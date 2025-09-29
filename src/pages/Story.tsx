import {Link, useParams} from "react-router-dom";

const STORIES: Record<string, { title: string; chapters: string[] }> = {
    "island-challenge": { title: "Island Challenge", chapters: ["chapter-1"] },
    "story-2": { title: "Story 2", chapters: ["chapter-1"] },
};

export default function Story() {
    const {storyId} = useParams<{ storyId: string }>();
    const story = storyId ? STORIES[storyId] : undefined;
    if (!story) return <div>Story not found</div>;

    return (
        <div>
            <h2>{story.title}</h2>
            <ul>
                {story.chapters.map(ch => (
                    <li key={ch}>
                        <Link to={`/stories/${storyId}/${ch}`}>{ch.replace("-", " ")}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}