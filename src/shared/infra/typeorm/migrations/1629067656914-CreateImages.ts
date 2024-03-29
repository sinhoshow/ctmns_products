import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateImages1629067656914 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'images',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'url',
                        type: 'varchar',
                    },
                    {
                        name: 'productId',
                        type: 'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'current_timestamp',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'current_timestamp',
                    },
                ],
            }),
        );

        await queryRunner.createForeignKey(
            'images',
            new TableForeignKey({
                columnNames: ['productId'],
                referencedColumnNames: ['id'],
                referencedTableName: 'products',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images');
    }

}
