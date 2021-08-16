import { createConnection, getConnectionOptions } from 'typeorm';

interface IOptions {
    host: string;
}

getConnectionOptions().then(options => {
    const newOptions = options as IOptions;
    newOptions.host = process.env.NODE_ENV === "development" ? 'database' : 'localhost';
    createConnection({
        ...options,
    });
});
