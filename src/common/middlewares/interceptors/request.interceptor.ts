import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const { method, originalUrl, ip } = req;
    const userAgent = req.get('user-agent') || '';

    Logger.log(
      `Incoming Request: ${method} ${originalUrl} from ${ip} - ${userAgent}`,
    );

    if (req.body) {
      Logger.log(`Request Payload: ${JSON.stringify(req.body)}`);
    }
    if (req.query) {
      Logger.log(`Query Parameters: ${JSON.stringify(req.query)}`);
    }
    return next.handle();
  }
}
