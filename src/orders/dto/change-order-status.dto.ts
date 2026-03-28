import { OrderStatus } from "@prisma/client";
import { IsEnum, IsOptional, IsUUID } from "class-validator";
import { OrderStatusList } from "../enum/order.enum";

export class ChangeOrderStatusDto {

    @IsUUID()
    id:string;
    
    @IsEnum(OrderStatusList, {
        message: `Possible status values are ${OrderStatusList}`
    })
    @IsOptional()
    status: OrderStatus
    
}