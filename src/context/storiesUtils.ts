export interface StoryEntry {
    [storyName: string]: string[];
}

export interface StoriesIndex {
    [folderName: string]: StoryEntry[];
}

export function getChaptersForStory(stories: StoriesIndex, storyId: string): string[] {
    const [folder, storyName] = storyId.split("/");
    const folderStories = stories[folder];
    if (!folderStories) return [];
    const storyObj = folderStories.find(obj => storyName in obj);
    return storyObj ? storyObj[storyName] : [];
}

export function storyExists(stories: StoriesIndex, storyId: string): boolean {
    return getChaptersForStory(stories, storyId).length > 0;
}