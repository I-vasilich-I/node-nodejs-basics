import { appendFile } from 'fs/promises';
import { isPathExist, FSError } from '../helpers.js';


export const create = async () => {
    const FILE_PATH = 'src/fs/files/fresh.txt';
    const isFileExist = await isPathExist(FILE_PATH);

    try {
        if (isFileExist) {
            throw new FSError;
        }
        await appendFile(FILE_PATH, 'I am fresh and young', 'utf8');
    } catch (e) {
        console.error(e)
    }
};

create();