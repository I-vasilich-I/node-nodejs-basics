import { rename as fsRename } from 'fs/promises';
import { FSError, isPathExist } from "../helpers.js";

export const rename = async () => {
    const WRONG_FILE_PATH = 'src/fs/files/wrongFilename.txt';
    const PROPER_FILE_PATH = 'src/fs/files/properFilename.md';

    const isWrongFileExist = await isPathExist(WRONG_FILE_PATH);
    const isProperFileExist = await isPathExist(PROPER_FILE_PATH);
    const shouldThrow = !isWrongFileExist || isProperFileExist;

    try {
        if (shouldThrow) {
            throw new FSError;
        }

        await fsRename(WRONG_FILE_PATH, PROPER_FILE_PATH);
    } catch (error) {
        console.error(error);
    }
};

rename();