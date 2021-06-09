import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as mongoose from 'mongoose'
import { create } from 'eslint/lib/rules/*';
import { SubscriptionCreateDto } from './SubscriptionCreate.dto';
import { SubscriptionSchema, Subscription, SubscriptionDocument } from './schemas/Subscriptions.schema'
import { SubscriptionSearchDto } from './SubscriptionSearch.dto';
import { SubscriptionUpdateDto } from './SubscriptionUpdate.dto';


@Injectable()
export class SubscriptionRepository{

    constructor(@InjectModel(Subscription.name) private subscriptionModel: Model<SubscriptionDocument>) {}

    
    async create(createSubscriptionDTO : SubscriptionCreateDto): Promise<Subscription>{

            let newSubscription = new this.subscriptionModel(createSubscriptionDTO)
            return await newSubscription.save();
    }

    async findAllSubscriptions(): Promise<Subscription[]>{
        return await this.subscriptionModel.find();
    }

    async findOneSubscription(id: string): Promise<Subscription> {
        return await this.subscriptionModel.findOne({ _id: id })
    }

    async SubscriptionfindWithFilters(filter: SubscriptionSearchDto){
        let name = Object.is(filter.firstName, undefined) ? '' : filter.firstName
        let email = Object.is(filter.email, undefined) ? '' : filter.email
        return await this.subscriptionModel.find({ $and: [{ email: { $regex: email } }, { firstName: { $regex: name } }] })
    }

    async updateSubscription(subscription: SubscriptionUpdateDto): Promise<Subscription> {

        return await this.subscriptionModel.findOneAndUpdate({ _id: subscription.id },
            { email: subscription.email }, {
            new: true
        })
    }

    async deleteSubscription(id: string): Promise<boolean> {
        let objId = mongoose.Types.ObjectId(id)

        let ret = await this.subscriptionModel.deleteOne({ _id: objId })
        console.log(ret.n)
        return (ret.n === 1)
    }
}