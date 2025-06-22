import { Controller, Get, Post, Param, Query, Headers, Body, HttpCode, NotFoundException } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/ejemplo/:id')
  @HttpCode(200)
  postEjemplo(@Param('id') id, @Query('hola') hola, @Headers('escuela') escuela, @Body('monto') monto): string {
    return id + hola + ' funcionando' + escuela + monto;
  }

  @Get('/casa')
  getEjemplo(@Query('idCasa') idCasa) {
    let casas = [
      {
        "id": 1,
        "nombre": "Casa 1"
      },
      {
        "id": 2,
        "nombre": "Casa 2"
      }
    ];

    if (idCasa) {
      let resultado = casas.find(casa => casa.id == idCasa);

      if (resultado) {
        return [resultado];
      } else {
        // Retornar el mensaje "No se encuentra" con el codigo de error 404
        throw new NotFoundException('No se encuentra');
      }
    }

    return casas;
  }
}
