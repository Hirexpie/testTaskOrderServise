import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { OrderStatus } from '../../DB/entities/order.entity';

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  itemName: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsEnum(OrderStatus)
  status: OrderStatus;
}
