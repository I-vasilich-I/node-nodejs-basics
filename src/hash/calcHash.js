import { readFile } from 'fs/promises';
import { createHash } from 'crypto';

export const calculateHash = async () => {
    const FILE_PATH = 'src/hash/files/fileToCalculateHashFor.txt'

    const fileBuffer = await readFile(FILE_PATH);
    const hashSum = createHash('sha256');
    hashSum.update(fileBuffer);

    const hex = hashSum.digest('hex');

    console.log(hex);
};

calculateHash();