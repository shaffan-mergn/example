import {
	Injectable,
	NestInterceptor,
	ExecutionContext,
	CallHandler,
	HttpException,
	Logger,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { ResponseMessageKey } from "src/common/decorators/response-message.decorator";

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
	private readonly reflector = new Reflector();
	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		const responseMessage =
			this.reflector.get<string>(ResponseMessageKey, context.getHandler()) ||
			"";

		return next.handle().pipe(
			map((data) => {
				return {
					success: true,
					message: responseMessage,
					data: data,
				};
			}),
			catchError(this.errorHandler)
		);
	}
	errorHandler = (error: any) => {
		if (error instanceof HttpException) {
			Logger.error("ERROR: ", error.message, "STACK: ", error.stack);

			const status = error.getStatus();
			const message = error.getResponse()["message"];
			let errorMessage = message;
			if (Array.isArray(message)) {
				errorMessage = message[0];
			}
			throw new HttpException(
				{ success: false, status, message: errorMessage },
				status
			);
		} else {
			const status = 500;
			const message = error.message || "Internal Server Error";
			throw new HttpException({ success: false, status, message }, status);
		}
	};
}
