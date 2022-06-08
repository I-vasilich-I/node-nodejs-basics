import { fork } from 'child_process';

export const spawnChildProcess = async (args) => {
    const SCRIPT = 'src/cp/files/script.js';
    process.stdin.on('data', (data) => fork(SCRIPT, data.toString('utf-8').split(' ')));
};

spawnChildProcess();