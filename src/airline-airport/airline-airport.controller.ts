/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { AirportDto } from 'src/airport/airport.dto';
import { AirportEntity } from 'src/airport/airport.entity';
import { AirlineAirportService } from './airline-airport.service';

@Controller('airline-airport')
export class AirlineAirportController {
    constructor(private readonly airlineAirportService: AirlineAirportService) {}

    @Post(':airlineId/airports/:airportId')
    async addAirportToAirline(@Param('airlineId') airlineId: string, @Param('airportId') airportId: string) {
        return await this.airlineAirportService.addAirportAirline(airlineId, airportId);
    }

    @Get(':airlineId/airports/:airportId')
    async findAirportFromAirline(
        @Param('airlineId') airlineId: string,
        @Param('airportId') airportId: string,
    ) {
        return await this.airlineAirportService.findAirportByAirlineIdAirportId(airlineId, airportId);
    }

    @Get(':airlineId/airports')
    async findAirportsFromAirline(@Param('airlineId') airlineId: string) {
        return await this.airlineAirportService.findAirportsByAirlineId(airlineId);
    }

    @Put(':airlineId/airports')
    async updateAirportsFromAirline(@Body() airportsDto: AirportDto[], @Param('airlineId') airlineId: string) {
        const airports = plainToInstance(AirportEntity, airportsDto);
        return await this.airlineAirportService.associateAirportsAirline(airlineId, airports);
    }

    @Delete(':airlineId/airports/:airportId')
    @HttpCode(204)
    async deleteAirportFromAirline(@Param('airlineId') airlineId: string, @Param('airportId') airportId: string) {
        return await this.airlineAirportService.deleteAirportAirline(airlineId, airportId);
    }
}
