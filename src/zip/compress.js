import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

export const compress = async () => {
    const FILE = 'src/zip/files/fileToCompress.txt';
    const ZIP_FILE = 'src/zip/files/archive.gz';

    const file = createReadStream(FILE);
    const zip = createWriteStream(ZIP_FILE);

    const stream = file.pipe(createGzip()).pipe(zip);

    stream.on('finish', () => console.log('Compression is done!'));
};

compress();