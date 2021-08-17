const rootDir = (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test") ?
    "./src" :
    "./dist"

const configOrm = process.env.NODE_ENV === "test" ? {
    "type": "sqlite",
    "database": "src/database/database.sqlite",
    "migrations": [
        rootDir + "/database/migrations/*{.ts,.js}"
    ],
    "entities": [
        rootDir + "/modules/**/entities/*{.ts,.js}"
    ],
    "cli": {
        "migrationsDir": rootDir + "/database/migrations"
    },
    "seeds": [
        rootDir + "/database/seeds/*{.ts,.js}"
    ],
    "factories": [
        rootDir + "/modules/**/factories/*{.ts,.js}"
    ]
} : {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "docker",
    "password": "admin",
    "database": "ctmns",
    "migrations": [
        rootDir + "/database/migrations/*{.ts,.js}"
    ],
    "entities": [
        rootDir + "/modules/**/entities/*{.ts,.js}"
    ],
    "cli": {
        "migrationsDir": rootDir + "/database/migrations"
    },
    "seeds": [
        rootDir + "/database/seeds/*{.ts,.js}"
    ],
    "factories": [
        rootDir + "/modules/**/factories/*{.ts,.js}"
    ]
}


module.exports = configOrm
