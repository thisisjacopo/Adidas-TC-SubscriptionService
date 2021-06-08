import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { request } from 'express';
import { SubscriptionsService } from './subscriptions.service';
import { SubscriptionSearchDto } from './SubscriptionSearch.dto';
import { SubscriptionUpdateDto } from './SubscriptionUpdate.dto';
import { SubscriptionCreateDto } from './SubscriptionCreate.dto';
import { SubscriptionConsentValidationPipe } from 'src/subscription-consent-validation.pipe';

@Controller('subscriptions')
export class SubscriptionsController {

    constructor(private subscriptionsService: SubscriptionsService){

    }

    @Get()
    getAllSubscriptions(@Query() param:SubscriptionSearchDto){
        if(Object.keys(param).length){
            return this.subscriptionsService.subscriptionSearch(param)
        } else {
        return this.subscriptionsService.getAllSubscriptions()
        }
    }

    @Post()
    @UsePipes(ValidationPipe)
    @UsePipes(new SubscriptionConsentValidationPipe())
    createSubscription( @Body() subscriptionCreateDto: SubscriptionCreateDto){
            return this.subscriptionsService.createSubscription(subscriptionCreateDto)
    }

    @Get('/:id')
    getSubscriptionById(@Param('id') id: string){
        return this.subscriptionsService.getSubscriptionById(id)
    }

    @Put('/:id/email')
    updateSubscription(@Param('id') id: string, @Body() subscriptionUpdateDto:SubscriptionUpdateDto){
        subscriptionUpdateDto.id = id
        return this.subscriptionsService.updateSubscription(subscriptionUpdateDto)
    }

    @Delete('/:id')
    @HttpCode(204)
    deleteSubscription(@Param('id') id:string){
        if(this.subscriptionsService.deleteSubscription(id)){
            throw new NotFoundException('Subscription does not exsit')
        }
    }
}
