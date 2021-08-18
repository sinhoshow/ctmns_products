import { Connection, ConnectionOptions, createConnection, getConnectionOptions } from 'typeorm';
import ormTestConfig from '../../../../ormconfig.json';

export default async (host = "database"): Promise<Connection> => {
    const defaultOptions = process.env.NODE_ENV === 'test' ? ormTestConfig as ConnectionOptions : await getConnectionOptions();

    return createConnection(
        Object.assign(defaultOptions, {
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
