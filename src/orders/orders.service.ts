import { Injectable,HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from '../DB/entities/order.entity';
import { Repository } from 'typeorm';
@Injectable()
export class OrdersService {

  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}
    
  
  
  async create(dto: CreateOrderDto) {
    try {
      const order = this.orderRepository.create(dto);
      await this.orderRepository.save(order);
      return {
        message: 'заказ создан',
        order
      };
    } 
    catch (error) {
      throw new Error('Не удалось получить заказы');
    }
  }

  async getOrders(page: number = 1) {
    try {
      const limit = 100;
      const offset = (page - 1) * limit;

      const [orders, total] = await this.orderRepository.findAndCount({
        skip: offset,
        take: limit,
      });

      return {
        orders,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      };
    } catch (error) {
      throw new Error('Не удалось получить заказы');
    }
  }

  async findOne(id: string) {
    
    const order = await this.orderRepository.findOne({ where: { id } });

    if (!order) {
      throw new NotFoundException(`Заказ с id ${id} не найден`);
    }

    return {order};  
  }

}
