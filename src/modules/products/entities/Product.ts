import { Column, CreateDateColumn, UpdateDateColumn, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import Image from './Image';
import { Exclude } from "class-transformer";

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

    @OneToMany(() => Image, image => image.product, {
        eager: true
    })
    images: Image[];

    @Exclude()
    @CreateDateColumn()
    created_at: Date;

    @Exclude()
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
