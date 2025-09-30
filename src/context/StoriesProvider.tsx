import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export interface StoryEntry {
  [storyName: string]: string[];
}

export interface StoriesIndex {
  [folderName: string]: StoryEntry[];
}

const StoriesContext = createContext<StoriesIndex | null>(null);

// StoriesProvider.tsx
export function StoriesProvider({ children }: { children: ReactNode }) {
  const [stories, setStories] = useState<StoriesIndex | null>(null); // start with null

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}content/index.json`)
      .then((res) => res.json())
      .then((data: StoriesIndex) => setStories(data))
      .catch(() => setStories({}));
  }, []);

  if (stories === null) return <div>Loading stories...</div>;

  return (
    <StoriesContext.Provider value={stories}>
      {children}
    </StoriesContext.Provider>
  );
}

export function useStories(): StoriesIndex {
  const context = useContext(StoriesContext);

  if (!context)
    throw new Error("useStories must be used within StoriesProvider");

  return context;
}
