import { FSError, isPathExist } from "../helpers.js";
import { copyFile, cp, mkdir, readdir } from 'fs/promises';

export const copy = async () => {
    const FILES_PATH = 'src/fs/files';
    const FILES_COPY_PATH = 'src/fs/files_copy';
    const isFolderExist = !await isPathExist(FILES_PATH);
    const isCopyForlderExist = await isPathExist(FILES_COPY_PATH);
    const shouldThrow = isFolderExist || isCopyForlderExist;

    try {
        if (shouldThrow) {
            throw new FSError;
        }

        await mkdir(FILES_COPY_PATH);
        
        const files = await readdir(FILES_PATH);
        await Promise.all(files?.map((file) => copyFile(`${FILES_PATH}/${file}`, `${FILES_COPY_PATH}/${file}` )));
    } catch (error) {
        console.error(error);
    }
};

copy();