import { createWriteStream } from 'fs';

export const write = async () => {
    const FILE_PATH = 'src/streams/files/fileToWrite.txt';
    const file = createWriteStream(FILE_PATH, 'utf-8');

    process.stdin.pipe(file);
};

write();
