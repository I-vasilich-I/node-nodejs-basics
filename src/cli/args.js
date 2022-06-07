export const parseArgs = () => {
    //I would have used minimist.
    const args = process.argv.slice(2);
    const res = args.reduce((acc, b, id) => {
        let prop = b;
        let s = ' is ';
        if (id % 2 === 0) {
            s = ', ';
            prop = b.slice(2);
        } 

        if (id === 0) {
            s = '';
        }

        return `${acc}${s}${prop}`
    }, '');
    console.log(res);
};

parseArgs();