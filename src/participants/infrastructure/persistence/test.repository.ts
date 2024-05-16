import { Injectable } from '@nestjs/common';
import {
  ParticipantDto,
  participantDtoStubs,
} from '../../application/dto/participant.dto';
import { RegisterParticipantDto } from '../../application/dto/register-participant.dto';
import { Repository } from '../../application/repository';

@Injectable()
export class TestRepository implements Repository {
  private participants: ParticipantDto[] = [];

  async register(dto: RegisterParticipantDto): Promise<void> {
    this.participants.push({
      id: participantDtoStubs[0].id,
      fullName: dto.fullName,
      email: dto.email,
      birthDate: dto.birthDate,
      referralId: dto.referralId,
      eventId: dto.eventId,
      registeredAt: participantDtoStubs[0].registeredAt,
    });
  }
}
