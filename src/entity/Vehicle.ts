import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Vehicle {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  licensePlate: string;

  @Column()
  model: string;

}
