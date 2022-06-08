import { readFile } from 'fs/promises';
import { FSError } from "../helpers.js";

export const read = async () => {
    const FILE_PATH = 'src/fs/files/fileToRead.txt';

    try {
        const fileContent = await readFile(FILE_PATH, 'utf-8');
        console.log(fileContent);
    } catch  {
        throw new FSError;
    }
};

read();