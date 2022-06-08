import { readdir } from 'fs/promises';
import { FSError } from "../helpers.js";

export const list = async () => {
    const FILES_PATH = 'src/fs/files';
    try {
        const files = await readdir(FILES_PATH);
        console.log(files);
    } catch {
        throw new FSError
    }
};

list();