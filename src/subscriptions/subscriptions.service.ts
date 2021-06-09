import { Body, Injectable, NotFoundException, Post } from '@nestjs/common';
import {v1 as uuid} from 'uuid';
import { SubscriptionSearchDto } from './SubscriptionSearch.dto';
import { SubscriptionUpdateDto } from './SubscriptionUpdate.dto';
import { SubscriptionCreateDto } from './SubscriptionCreate.dto';
import { Subscription } from './schemas/Subscriptions.schema'
import { SubscriptionRepository } from './Subscription.repository';

@Injectable()
export class SubscriptionsService {

    constructor(private subscriptionRepository: SubscriptionRepository){

    }

    async getAllSubscriptions():Promise<Subscription[]> {
        return await this.subscriptionRepository.findAllSubscriptions()
    }

    async createSubscription(subscriptionCreateDto: SubscriptionCreateDto):Promise <Subscription> {
        return await this.subscriptionRepository.create(subscriptionCreateDto);
    }


    async subscriptionSearch(subscriptionSearchDto: SubscriptionSearchDto){
        return await this.subscriptionRepository.SubscriptionfindWithFilters(subscriptionSearchDto);
    }

    async getSubscriptionById(id: string): Promise<Subscription> {

        let subscription = this.subscriptionRepository.findOneSubscription(id)
        if (!subscription) {
            throw new NotFoundException(`${id} this subscription can not be found`)
        }
        return await subscription
    }

    async updateSubscription(subscriptionUpdateDto: SubscriptionUpdateDto): Promise<Subscription> {

        return this.subscriptionRepository.updateSubscription(subscriptionUpdateDto)
    }

    async deleteSubscription(id: string): Promise<boolean> {

        let subscriptionId = await this.subscriptionRepository.deleteSubscription(id);
        console.log(subscriptionId)
        return subscriptionId;

    }
}
