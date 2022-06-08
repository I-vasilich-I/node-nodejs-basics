import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';

export const decompress = async () => {
    const ZIP_FILE = 'src/zip/files/archive.gz';
    const FILE = 'src/zip/files/fileToCompress.txt';

    const zip = createReadStream(ZIP_FILE);
    const file = createWriteStream(FILE);

    const stream = zip.pipe(createGunzip()).pipe(file);

    stream.on('finish', () => console.log('Decompression is done!'));
};

decompress();