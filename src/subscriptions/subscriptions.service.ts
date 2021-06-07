import { Body, Injectable, Post } from '@nestjs/common';
import { Subscription } from './Subscription.module';
import {v1 as uuid} from 'uuid';
@Injectable()
export class SubscriptionsService {

    private subscriptions : Subscription[] = []

    getAllSubscriptions(){
        return this.subscriptions
    }

    createSubscription(
        email: string,
        firstName: string,
        gender: string,
        consent: boolean,
        dateOfBirth: Date ){

            const subscription = {
                id: uuid(),
                email,
                firstName,
                gender,
                consent,
                dateOfBirth
            }

            this.subscriptions.push(subscription)
            return subscription
    }
}
