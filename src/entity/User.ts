import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phone: number;

  @Column()
  driverLicense: string;

  @Column()
  vehicle: number;

  @Column()
  role: boolean;

}
