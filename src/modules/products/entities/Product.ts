import { Column, CreateDateColumn, UpdateDateColumn, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import Image from './Image';

@Entity('products')
class Product {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column('int')
    price: number;

    @OneToMany(() => Image, image => image.product)
    images: Image[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;


    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
        this.name = '';
        this.description = '';
        this.price = 0;
        this.created_at = new Date();
    }
}

export default Product;
