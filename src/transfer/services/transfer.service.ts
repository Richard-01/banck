import { Injectable, NotFoundException } from '@nestjs/common';
import {Transfer} from '../entities/bank.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from'mongoose';
import {TransferDto} from '../DTOs/common/transfer.dto';
import {TransferOutputDto} from '../DTOs/response/transferOutput.dto';
import {TransferInputDto} from '../DTOs/request/transferInput.dto';
export class TransferService {
    constructor(@InjectModel(Transfer.name) protected transferModel: Model<Transfer>) { }

    async findAll(): Promise<TransferOutputDto[]> {
        try {
            const transfers = await this.transferModel.find().exec();
            return transfers.map(transfer => transfer.toObject());
        } catch (error) {
            throw new Error(`Error occurred while fetching transfers: ${error.message}`);
        }
    }

    async findOne(userId: string): Promise<TransferOutputDto> {
        try {
            const transfer = await this.transferModel.findOne({ userId }).exec();
            if (!transfer) {
                throw new NotFoundException(`Transfer with userId ${userId} not found`);
            }
            return transfer.toObject();
        } catch (error) {
            throw new Error(`Error occurred while fetching transfer: ${error.message}`);
        }
    }

    async create(createTransferDto: TransferDto): Promise<Transfer> {
        try {
            const createdTransfer = new this.transferModel(createTransferDto);
            const savedTransfer = await createdTransfer.save();
            return savedTransfer.save();
        } catch (error) {
            throw new Error(`Error occurred while creating transfer: ${error.message}`);
        }
    }

    async update(userId: string, updateTransferDto: TransferInputDto): Promise<TransferOutputDto> {
        try {
            const updatedTransfer = await this.transferModel.findOneAndUpdate({ userId }, updateTransferDto, { new: true }).exec();
            if (!updatedTransfer) {
                throw new NotFoundException(`Transfer with userId ${userId} not found`);
            }
            return updatedTransfer.toObject();
        } catch (error) {
            throw new Error(`Error occurred while updating transfer: ${error.message}`);
        }
    }

    async remove(userId: string): Promise<TransferOutputDto> {
        try {
            const deletedTransfer = await this.transferModel.findOneAndDelete({ userId }).exec();
            if (!deletedTransfer) {
                throw new NotFoundException(`Transfer with userId ${userId} not found`);
            }
            return deletedTransfer.toObject();
        } catch (error) {
            throw new Error(`Error occurred while deleting transfer: ${error.message}`);
        }
    }
}
