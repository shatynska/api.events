import { Injectable } from '@nestjs/common';
import { PrismaService } from '~/prisma/prisma.service';
import { RegisterParticipantDto } from './dto/register-participant.dto';

@Injectable()
export class ParticipantsRepository {
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
