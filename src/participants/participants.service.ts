import { Injectable } from '@nestjs/common';
import { RegisterParticipantDto } from './dto/register-participant.dto';
import { ParticipantsRepository } from './participants.repository';

@Injectable()
export class ParticipantsService {
  constructor(private repository: ParticipantsRepository) {}

  async register(registerParticipantDto: RegisterParticipantDto) {
    // TODO Add check whether the user is already registered for this event

    await this.repository.register(registerParticipantDto);
  }
}
