import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (host = "database"): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions();

    return createConnection(
        Object.assign(defaultOptions, {
            type: process.env.NODE_ENV === 'test'
                ? 'sqlite'
                : defaultOptions.type,
            host: process.env.NODE_ENV === 'development'
                ? host
                : 'localhost',
            database:
                process.env.NODE_ENV === 'test'
                    ? 'src/shared/infra/typeorm/test_db.sqlite'
                    : defaultOptions.database,
        })
    );
};
