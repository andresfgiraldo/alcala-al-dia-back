import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Saldo } from './entities/saldo.entity';
import { ExcepcionSancion } from './entities/excepcionSancion.entity';

@Injectable()
export class SaldoService {
  private readonly logger = new Logger(SaldoService.name);
  private readonly MAX_DEUDA = process.env.ALCALA_MAX_DEUDA || 500000;
  constructor(
    @InjectRepository(Saldo)
    private saldoRepository: Repository<Saldo>,
    @InjectRepository(ExcepcionSancion)
    private excepcionSancionRepository: Repository<ExcepcionSancion>,
  ) {}

  async findAll(): Promise<any> {
    const saldos = await this.saldoRepository.find();
    const excepciones = await this.excepcionSancionRepository.find();
    const response = saldos.map(s => {
      const exepcionApto = excepciones.find(e => e.apto == s.apto);
      const autorizado =
        exepcionApto?.excepcion == true || s.saldo <= this.MAX_DEUDA;

      return {
        apto: s.apto,
        autorizado: autorizado,
      };
    });
    return response;
  }
}
