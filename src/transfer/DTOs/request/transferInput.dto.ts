import { OmitType } from '@nestjs/swagger';
import {TransferDto} from '../common/transfer.dto';


export class CreateTransferDto extends OmitType(TransferDto, ['id']) {}