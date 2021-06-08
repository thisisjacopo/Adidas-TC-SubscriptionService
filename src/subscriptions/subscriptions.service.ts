import { Body, Injectable, Post } from '@nestjs/common';
import { Subscription } from './Subscription.module';
import {v1 as uuid} from 'uuid';
import { SubscriptionSearchDto } from './SubscriptionSearch.dto';
import { SubscriptionUpdateDto } from './SubscriptionUpdate.dto';
import { SubscriptionCreateDto } from './SubscriptionCreate.dto';

@Injectable()
export class SubscriptionsService {

    private subscriptions : Subscription[] = []

    getAllSubscriptions(){
        return this.subscriptions
    }

    createSubscription(subscriptionCreateDto: SubscriptionCreateDto) {
        const {
            email,
            firstName,
            gender,
            consent,
            dateOfBirth
        } = subscriptionCreateDto

        const subscription = {
            id: uuid(),
            email,
            firstName,
            gender,
            consent,
            dateOfBirth
        }

        this.subscriptions.push(subscription)
        return subscription;
    }


    subscriptionSearch(subscriptionSearchDto: SubscriptionSearchDto){

        const {email, firstName} = subscriptionSearchDto;
        let subscriptions = this.getAllSubscriptions();
        if(email){
            subscriptions = subscriptions.filter(subscription => subscription.email === email);
        }
        if (firstName) {
            subscriptions = subscriptions.filter(subscription => subscription.firstName === firstName);
        }
        return subscriptions
    }

    getSubscriptionById(id: string): Subscription{
        const subscriptions = this.getAllSubscriptions();

        return subscriptions.find(subscription => subscription.id === id);
    }

    updateSubscription(subscriptionUpdatedto: SubscriptionUpdateDto) : Subscription{

        const {id, email} = subscriptionUpdatedto;
        let subscription = this.getSubscriptionById(id);
        subscription.email = email

        return subscription
    }

    deleteSubscription(id: string): boolean{
        let subscriptions = this.getAllSubscriptions();
        this.subscriptions = subscriptions.filter(subscription => subscription.id != id)
        return (subscriptions.length != this.subscriptions.length)
    }
}
