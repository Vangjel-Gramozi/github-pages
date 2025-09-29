import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Chapter() {
    const {storyId, chapterId} = useParams();
    const [md, setMd] = useState("Loading...");

    useEffect(() => {
        const base = import.meta.env.BASE_URL || "/";
        const path = `${base}content/${storyId}/${chapterId}.md`;
        fetch(path)
            .then(res => {
                if (!res.ok) throw new Error("Not found");
                return res.text();
            })
            .then(text => setMd(text))
            .catch(() => setMd("# Chapter not found\nThat chapter doesn't exist yet."));
    }, [storyId, chapterId]);

    return (
        <article>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{md}</ReactMarkdown>
        </article>
    );
}