export const parseEnv = () => {
    const { env } = process;
    const RSS_VARS = Object
        .entries(env)
        .reduce((acc, [key, value]) => {
            if (key.includes('RSS_')) {
                acc.push(`${key}=${value}`)
            }
            return acc;
        }, [])
        .join('; ');
    console.log(RSS_VARS);
};

parseEnv();