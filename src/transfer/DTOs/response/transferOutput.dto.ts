import { IsNotEmpty, IsString, IsDate} from 'class-validator';
import {TransferDto} from '../common/transfer.dto';
import {Type} from 'class-transformer';


export class TransferOutputDto extends TransferDto {
    @IsDate()
    @IsNotEmpty()
    @Type(() => Date)
    createdAt: Date;

    @IsDate()
    @IsNotEmpty()
    @Type(() => Date)
    updatedAt: Date;
}





