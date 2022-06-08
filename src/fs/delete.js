import { unlink } from 'fs/promises';
import { FSError } from "../helpers.js";

export const remove = async () => {
    const FILE_PATH = 'src/fs/files/fileToRemove.txt';

    try {
        await unlink(FILE_PATH);
    } catch {
        throw new FSError
    }
};

remove();
