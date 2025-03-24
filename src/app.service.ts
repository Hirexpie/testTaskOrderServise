import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  mainRoute(): string {
    return 'this is test Task';
  }
}
