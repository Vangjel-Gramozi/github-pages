export interface StoryEntry {
    [storyName: string]: string[];
}

export interface StoriesIndex {
    [folderName: string]: StoryEntry[];
}

export function getChaptersForStory(stories: StoriesIndex, storyId: string): string[] {
    const story = stories.stories.find(s => Object.keys(s)[0] === storyId);
    if (!story) {
        return [];
    }
    return story[storyId];
}

export function storyExists(stories: StoriesIndex, storyId: string): boolean {
    return getChaptersForStory(stories, storyId).length > 0;
}