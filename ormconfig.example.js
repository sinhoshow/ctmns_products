module.exports = {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "docker",
    "password": "admin",
    "database": "ctmns",
    "migrations": [
        "./src/shared/infra/typeorm/migrations/*{.ts,.js}"
    ],
    "entities": [
        "./src/modules/**/entities/*{.ts,.js}"
    ],
    "cli": {
        "migrationsDir": "src/shared/infra/typeorm/migrations"
    },
    "seeds": [
        "./src/shared/infra/typeorm/seeds/*{.ts,.js}"
    ],
    "factories": [
        "./src/modules/**/factories/*{.ts,.js}"
    ]
}
