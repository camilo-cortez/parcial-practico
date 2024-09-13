/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AirportEntity } from '../airport/airport.entity';

@Entity()
export class AirlineEntity {
 @PrimaryGeneratedColumn('uuid')
 id: string;

 @Column()
 name: string;
 
 @Column()
 description: string;
 
 @Column()
 founding_date: string;
 
 @Column()
 website: string;

 @ManyToMany(() => AirportEntity, airport => airport.airlines)
 @JoinColumn()
 airports: AirportEntity[];
}