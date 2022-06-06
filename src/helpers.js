import { access } from 'fs/promises';

class FSError extends Error {
  constructor() {
    super('FS operation failed');
  }
}

const isPathExist = async (path) => {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

export { isPathExist, FSError };