import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExcepcionSancion } from './entities/excepcionSancion.entity';
import { Saldo } from './entities/saldo.entity';
import { SaldoController } from './saldo.controller';
import { SaldoService } from './saldo.service';

@Module({
  imports: [TypeOrmModule.forFeature([Saldo, ExcepcionSancion])],
  controllers: [SaldoController],
  providers: [SaldoService],
  exports: [SaldoService],
})
export class SaldoModule {}
