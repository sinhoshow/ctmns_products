import { Connection, ConnectionOptions, createConnection, getConnectionOptions } from 'typeorm';
import ormTestConfig from '../../../../ormconfig.test.json';

export default async (host = "database"): Promise<Connection> => {
    const defaultOptions = process.env.NODE_ENV === 'test' ? ormTestConfig as ConnectionOptions : await getConnectionOptions();

    return createConnection(
        Object.assign(defaultOptions, {
            host: process.env.NODE_ENV === 'production'
                ? 'localhost'
                : host
        })
    );
};
