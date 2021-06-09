import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { SubscriptionRepository } from './Subscription.repository';
import { SubscriptionsController } from './subscriptions.controller';
import { SubscriptionsService } from './subscriptions.service';
import { SubscriptionSchema, Subscription } from './schemas/Subscriptions.schema'

@Module({
  imports: [MongooseModule.forFeature([{name: Subscription.name, schema: SubscriptionSchema}])],
  controllers: [SubscriptionsController],
  providers: [SubscriptionsService, SubscriptionRepository]
})
export class SubscriptionsModule {}
