import { cpus } from 'os';
import { Worker, isMainThread } from 'worker_threads';


// data will contain one line of error data
// I added throw on first core inside worker to test error case.
export const performCalculations = async () => {
    if (!isMainThread) {
        console.log('Inside worker')
        return;
    }

    const CORES = cpus();
    const N = 10;
    const data = await Promise.all(CORES.map((_, i) => {
        return new Promise((resolve) => {
            const worker = new Worker('./src/wt/worker.js', {workerData: N + i});
            worker.on('message', (data) => {
                resolve({
                    status: 'resolve',
                    data,
                })
            });

            worker.on('error', () => {
                console.log('Error was made on purpose, to test error case. You can check worker.js')
                resolve({
                    status: 'error',
                    data: null,
                })
            });
        }); 
    }));

    console.log(data);
    return data;
};

performCalculations();