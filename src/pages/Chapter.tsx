import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {useStories} from "../context/StoriesProvider.tsx";
import {getChaptersForStory, storyExists} from "../context/storiesUtils.ts";

export default function Chapter() {
    const {storyId, chapterId} = useParams<{ storyId: string; chapterId: string }>();
    const navigate = useNavigate();
    const stories = useStories();

    const [md, setMd] = useState("Loading...");
    const [chapters, setChapters] = useState<string[]>([]);

    useEffect(() => {
        if (!storyId || !chapterId) return;

        const storyChapters = getChaptersForStory(stories, storyId);
        setChapters(storyChapters);

        if (!storyExists(stories, storyId) || !storyChapters.includes(chapterId)) {
            setMd("# Chapter not found\nThat chapter doesn't exist yet.");
            return;
        }


        const base = import.meta.env.BASE_URL || "/";
        const path = `${base}content/stories/${storyId}/${chapterId}.md`;
        fetch(path)
            .then(res => {
                if (!res.ok) throw new Error("Not found");
                return res.text();
            })
            .then(text => setMd(text))
            .catch(() => setMd("# Chapter not found\nThat chapter doesn't exist yet."));
    }, [storyId, chapterId, stories]);

    const currentIndex = chapters.indexOf(chapterId!);
    const prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
    const nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;

    return (
        <article>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{md}</ReactMarkdown>
            <nav style={{marginTop: "2rem"}}>
                {prevChapter && <button onClick={() => navigate(`/stories/${storyId}/${prevChapter}`)}>←
                  Previous</button>}
                {nextChapter &&
                  <button onClick={() => navigate(`/stories/${storyId}/${nextChapter}`)}
                          style={{marginLeft: "1rem"}}>Next
                    →</button>}
            </nav>
        </article>
    );
}