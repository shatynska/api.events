import { Module } from '@nestjs/common';
import { PrismaModule } from '~/shared/prisma/prisma.module';
import { REPOSITORY_TOKEN } from './application/repository';
import { SERVICES } from './application/services';
import { CONTROLLERS } from './infrastructure/http/controllers';
import { PrismaRepository } from './infrastructure/persistence/prisma.repository';

@Module({
  imports: [PrismaModule],
  controllers: [...CONTROLLERS],
  providers: [
    ...SERVICES,
    {
      provide: REPOSITORY_TOKEN,
      useClass: PrismaRepository,
    },
  ],
})
export class ParticipantsModule {}
