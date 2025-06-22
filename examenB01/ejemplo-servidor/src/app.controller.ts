import { Controller, Get, NotFoundException, Query } from '@nestjs/common';
import { AppService } from './app.service';

class Casa {
  constructor(public id: number, public nombre: string) {}
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('casa')
  getCasa(@Query('idCasa') idCasa?: string): Casa[] {
    let casas: Casa[] = [new Casa(1, "Casa 1"), new Casa(2, "Casa 2")];

    if (idCasa) {
      let res: Casa | undefined = casas.find(casa => casa.id == +idCasa);

      if (res) {
        return [res];
      } else {
        throw new NotFoundException('No se encuentra');
      }
    }

    return casas;
  }
}