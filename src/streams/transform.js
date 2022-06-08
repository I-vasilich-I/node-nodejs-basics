import { Transform } from "stream";

const { stdin, stdout } = process;

const reverse = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString('utf-8').split('').reverse().join(''));
  },
});

export const transform = async () => {
    stdin.pipe(reverse).pipe(stdout);
};

transform();
