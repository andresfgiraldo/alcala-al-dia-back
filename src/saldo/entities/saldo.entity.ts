import { Entity, Column, Index, PrimaryColumn } from 'typeorm';
import { CommonBaseEntityAudit } from 'src/common/entities/CommonBaseEntityAudit';

@Entity('saldo')
@Index('saldo_idx', ['apto'], { unique: true })
export class Saldo extends CommonBaseEntityAudit {
  @PrimaryColumn({ length: 45, name: 'apto', nullable: false })
  apto: string;

  @Column({ name: 'saldo', nullable: false })
  saldo: number;
}
