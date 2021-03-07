import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class CrashEvent {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  client: number;

  @Column()
  thirdParties: number;

  @Column()
  details: string;

}
