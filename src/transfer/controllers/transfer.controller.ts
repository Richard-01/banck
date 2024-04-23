import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { TransferService } from '../services/transfer.service';
import dataTransfer from '../entities/bank.entity';

@Controller('transfers')
export class TransferController {
  constructor(private readonly transferService: TransferService) {}

  @Get()
  findAll(): dataTransfer[] {
    return this.transferService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): dataTransfer {
    return this.transferService.findOne(+id);
  }

  @Post()
  create(@Body() transfer: dataTransfer): dataTransfer {
    return this.transferService.create(transfer);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() transfer: dataTransfer): dataTransfer {
    return this.transferService.update(+id, transfer);
  }

  @Delete(':id')
  remove(@Param('id') id: string): dataTransfer {
    return this.transferService.remove(+id);
  }
}
