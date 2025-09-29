import * as fs from "fs";
import * as path from "path";

const contentBase = path.join(process.cwd(), "public/content");

interface StoryEntry {
    [storyName: string]: string[];
}

interface StoriesIndex {
    [folderName: string]: StoryEntry[];
}

const storiesIndex: StoriesIndex = {};

// Read all folders in contentBase dynamically
const contentFolders = fs.readdirSync(contentBase, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

contentFolders.forEach(folder => {
    const folderPath = path.join(contentBase, folder);
    const folderArray: StoryEntry[] = [];

    const storyDirs = fs.readdirSync(folderPath, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory());

    storyDirs.forEach(dirent => {
        const storyName = dirent.name;
        const storyPath = path.join(folderPath, storyName);

        const chapters = fs.readdirSync(storyPath)
            .filter(file => file.endsWith(".md"))
            .map(file => file.replace(".md", ""))
            .sort();

        folderArray.push({ [storyName]: chapters });
    });

    storiesIndex[folder] = folderArray;
});

// Write index.json
const indexPath = path.join(contentBase, "index.json");
fs.writeFileSync(indexPath, JSON.stringify(storiesIndex, null, 2));
console.log("index.json updated ✅");