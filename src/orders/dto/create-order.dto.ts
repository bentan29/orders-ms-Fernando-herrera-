import { ArrayMinSize, IsArray,  ValidateNested } from 'class-validator';
import { OrderItemDto } from './order-item.dto';
import { Type } from 'class-transformer';

export class CreateOrderDto {

    @IsArray()
    @ArrayMinSize(1)
    @ValidateNested({ each: true }) //- valida cada elemento del array
    @Type(() => OrderItemDto) //- cada elemento es de este tipo
    items: OrderItemDto[]

}




// export class CreateOrderDto {

    // @IsNumber()
    // @IsPositive()
    // totalAmount: number;

    // @IsNumber()
    // @IsPositive()
    // totalItems: number;

    // @IsEnum(OrderStatusList, {
    //     message: `Possible status values are ${OrderStatusList}`
    // })
    // @IsOptional()
    // status: OrderStatus = OrderStatus.PENDING;

    // @IsBoolean()
    // @IsOptional()
    // paid: boolean = false;

// }
