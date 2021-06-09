import { Module } from '@nestjs/common';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGODB_CONNECTION } from './app.secrets'

@Module({
  imports: [SubscriptionsModule, MongooseModule.forRoot(MONGODB_CONNECTION) ],
})
export class AppModule {}
