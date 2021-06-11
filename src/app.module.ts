import { Module } from '@nestjs/common';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGODB_URI } from './app.secrets'

@Module({
  imports: [SubscriptionsModule, MongooseModule.forRoot(MONGODB_URI)],
})
export class AppModule {}
