import { IsNotEmpty, IsNumber, IsString, IsDate} from 'class-validator';

export class TransferDto {
    
    @IsString()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsNotEmpty()
    sender: string;

    @IsString()
    @IsNotEmpty()
    receiver: string;

    @IsNumber()
    @IsNotEmpty()
    amount: number;

    @IsDate()
    @IsNotEmpty()
    date: Date;
}

