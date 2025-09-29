import {Link} from "react-router-dom";
import {useStories} from "../context/StoriesProvider.tsx";

export default function Stories() {
    const stories = useStories();

    return (
        <div>
            <h2>Stories</h2>
            <ul>
                {stories.stories.map((storyEntry) => {
                    const storyName = Object.keys(storyEntry)[0];
                    return (
                        <li key={storyName}>
                            <Link to={`/stories/${storyName}`}>
                                {storyName}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}