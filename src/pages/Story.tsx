import { Link, useParams } from "react-router-dom";

import { useStories } from "../context/StoriesProvider.tsx";

export default function Story() {
  const { storyId } = useParams<{ storyId: string }>();

  const stories = useStories();

  if (!stories.stories || stories.stories.length === 0)
    return <div>Loading stories...</div>;
  const story = storyId
    ? stories.stories.find((s) => Object.keys(s)[0] === storyId)
    : undefined;

  if (!story) return <div>Story not found</div>;

  return (
    <div>
      {Object.entries(story).map(([storyName, chapters]) => (
        <div key={storyName}>
          <h3>{storyName}</h3>
          <ul>
            {chapters.map((ch) => (
              <div key={ch}>
                <Link key={ch} to={`/stories/${storyName}/${ch}`}>
                  {ch}
                </Link>
              </div>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
