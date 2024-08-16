import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
    @Column
    username: string;

    @Column
    password: string;
    
    @Column
    name: string;

    @Column
    email: string;

    @Column
    phone: string;
}
