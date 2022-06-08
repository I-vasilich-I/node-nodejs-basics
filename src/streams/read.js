import { createReadStream } from 'fs';

export const read = async () => {
  const FILE_PATH = 'src/streams/files/fileToRead.txt';
  const readStream = createReadStream(FILE_PATH, 'utf-8');
  readStream.on('open', () => readStream.pipe(process.stdout));
};

read();