/* eslint-disable prettier/prettier */
import {IsDateString, IsNotEmpty, IsString, IsUrl} from 'class-validator';
export class AirlineDto {

 @IsString()
 @IsNotEmpty()
 readonly name: string;
 
 @IsString()
 @IsNotEmpty()
 readonly description: string;
 
 @IsDateString()
 @IsNotEmpty()
 readonly founding_date: string;
 
 @IsUrl()
 @IsNotEmpty()
 readonly website: string;
}