import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export enum OrderStatus {
    PENDING = 'В обработке',
    SHIPPED = 'В пути',
    DELIVERED = 'Доставлено',
}

@Entity('orders') 
export class Order {
  @PrimaryGeneratedColumn('uuid') 
  id: string;

  @Column({ length: 255 ,nullable: false})
  itemName: string;

  @Column({ length: 255 ,nullable: false})
  address: string;

  @Column({ type: 'enum', enum: OrderStatus, default: OrderStatus.PENDING })
  status: OrderStatus;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
