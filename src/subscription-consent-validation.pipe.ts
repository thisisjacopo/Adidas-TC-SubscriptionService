import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class SubscriptionConsentValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if(!value.consent || value.consent === false || value.consent != Boolean){
      throw new BadRequestException('Please consent to our policy')
    }
    return value;
  }
}
