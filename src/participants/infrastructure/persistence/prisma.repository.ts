import { Injectable } from '@nestjs/common';
import { Repository } from '~/participants/application/repository';
import { PrismaService } from '~/shared/prisma/prisma.service';
import { RegisterParticipantDto } from '../../application/dto/register-participant.dto';

@Injectable()
export class PrismaRepository implements Repository {
  constructor(private readonly prismaService: PrismaService) {}

  async register(dto: RegisterParticipantDto): Promise<void> {
    await this.prismaService.participant.create({
      data: {
        fullName: dto.fullName,
        email: dto.email,
        birthDate: dto.birthDate,
        referral: {
          connect: {
            id: dto.referralId,
          },
        },
        event: {
          connect: {
            id: dto.eventId,
          },
        },
      },
    });
  }
}
