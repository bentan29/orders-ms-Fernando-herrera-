import { IsNumber, IsPositive } from "class-validator";

export class OrderItemDto {

    @IsNumber()
    @IsPositive()
    productId: number;

    @IsNumber()
    @IsPositive()
    quantity: number;

    @IsNumber()
    @IsPositive()
    //@Type(() => Number) //- convertimos a numero por si viene como string "10" -> 10
    price: number

}