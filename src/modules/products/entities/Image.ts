import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import Product from './Product';

@Entity('images')
class Image {
    @PrimaryColumn()
    id?: string;

    @Column()
    url: string;

    @ManyToOne(() => Product, product => product.images)
    product: Product;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
        this.url = '';
        this.created_at = new Date();
    }
}

export default Image;
