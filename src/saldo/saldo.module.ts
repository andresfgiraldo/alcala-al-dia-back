import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Saldo } from './entities/saldo.entity';
import { SaldoController } from './saldo.controller';
import { SaldoService } from './saldo.service';

@Module({
  imports: [TypeOrmModule.forFeature([Saldo])],
  controllers: [SaldoController],
  providers: [SaldoService],
  exports: [SaldoService],
})
export class SaldoModule {}
