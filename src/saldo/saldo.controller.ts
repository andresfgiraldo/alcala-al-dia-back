import { Controller, Get } from '@nestjs/common';
import { SaldoService } from './saldo.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('saldo')
@Controller('saldo')
export class SaldoController {
  constructor(private readonly saldoService: SaldoService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todas los saldos' })
  findAll() {
    return this.saldoService.findAll();
  }
}
