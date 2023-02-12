import { Entity, Column, Index, PrimaryColumn } from 'typeorm';
import { CommonBaseEntityAudit } from 'src/common/entities/CommonBaseEntityAudit';

@Entity('excepcion_sancion')
@Index('saldo_idx', ['apto'], { unique: true })
export class ExcepcionSancion extends CommonBaseEntityAudit {
  @PrimaryColumn({ length: 45, name: 'apto', nullable: false })
  apto: string;

  @Column({ name: 'excepcion', nullable: false })
  excepcion: boolean;

  @Column({ name: 'motivo', nullable: false })
  motivo: string;
}
