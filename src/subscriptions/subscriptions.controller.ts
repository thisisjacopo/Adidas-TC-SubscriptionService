import { Body, Controller, Get, Post } from '@nestjs/common';
import { request } from 'express';
import { SubscriptionsService } from './subscriptions.service';

@Controller('subscriptions')
export class SubscriptionsController {

    constructor(private subscriptionsService: SubscriptionsService){

    }

    @Get()
    getAllSubscriptions(){
        return this.subscriptionsService.getAllSubscriptions()
    }

    @Post()
    createSubscription( @Body() request ){
            return this.subscriptionsService.createSubscription(request.email, request.firstName, request.gender, 
                                                                request.consent, request.dateOfBirth)
    }
}
