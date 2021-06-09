import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { request } from 'express';
import { SubscriptionsService } from './subscriptions.service';
import { SubscriptionSearchDto } from './SubscriptionSearch.dto';
import { SubscriptionUpdateDto } from './SubscriptionUpdate.dto';
import { SubscriptionCreateDto } from './SubscriptionCreate.dto';
import { SubscriptionConsentValidationPipe } from 'src/subscription-consent-validation.pipe';
import { Subscription } from './schemas/Subscriptions.schema'


@Controller('subscriptions')
export class SubscriptionsController {

    constructor(private subscriptionsService: SubscriptionsService){

    }

    @Get()
    @UsePipes(ValidationPipe)
    async getAllSubscriptions(@Query() param:SubscriptionSearchDto):Promise<Subscription[]>{
        if (Object.keys(param).length) {
            return this.subscriptionsService.subscriptionSearch(param)
        } else {
            return this.subscriptionsService.getAllSubscriptions()
        }
    }

    @Post()
    @UsePipes(ValidationPipe)
    // @UsePipes(new SubscriptionConsentValidationPipe())
    async createSubscription( @Body() subscriptionCreateDto: SubscriptionCreateDto): Promise <Subscription>{
            return await this.subscriptionsService.createSubscription(subscriptionCreateDto)
    }

    @Get('/:id')
    async getSubscriptionById(@Param('id') id: string){
        return await this.subscriptionsService.getSubscriptionById(id)
    }

    @Put('/:id/email')
    async updateSubscription(@Param('id') id: string, @Body() subscriptionUpdateDto:SubscriptionUpdateDto): Promise<Subscription>{
        subscriptionUpdateDto.id = id
        return await this.subscriptionsService.updateSubscription(subscriptionUpdateDto)
    }

    @Delete('/:id')
    @HttpCode(204)
    async deleteSubscription(@Param('id') id:string){
        let subscriptionId = await this.subscriptionsService.deleteSubscription(id)
        if(!subscriptionId){
            throw new NotFoundException('Subscription does not exsit')
        }
    }
}
