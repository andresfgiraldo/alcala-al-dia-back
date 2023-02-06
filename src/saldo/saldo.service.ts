import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Saldo } from './entities/saldo.entity';

@Injectable()
export class SaldoService {
  private readonly MAX_DEUDA = process.env.ALCALA_MAX_DEUDA || 500000;
  constructor(
    @InjectRepository(Saldo)
    private saldoRepository: Repository<Saldo>,
  ) {}

  async findAll(): Promise<any> {
    const saldos = await this.saldoRepository.find();
    const response = saldos.map(s => {
      return {
        apto: s.apto,
        autorizado: s.saldo <= this.MAX_DEUDA,
      };
    });
    return response;
  }
}
