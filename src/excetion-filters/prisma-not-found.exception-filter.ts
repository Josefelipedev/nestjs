import { ArgumentsHost, ExceptionFilter, Catch } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Response } from 'express';

@Catch(Prisma.PrismaClientInitializationError)
export class PrismaNotFoundExceptionFilter implements ExceptionFilter {
  catch(
    exception: Prisma.PrismaClientInitializationError,
    host: ArgumentsHost
  ) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const messageError = exception.message ?? ' Not Found';

    exception.errorCode === 'P2025'
      ? response.status(404).json({
          statusCode: 404,
          message: messageError,
        })
      : response.status(500).json({
          statusCode: 500,
          message: exception.message ?? 'Internal Server Error',
        });
  }
}
