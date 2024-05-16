import { Injectable } from '@nestjs/common';
import { PrismaRepository } from '~/participants/infrastructure/persistence/prisma.repository';
import { RegisterParticipantDto } from '../dto/register-participant.dto';

@Injectable()
export class RegisterService {
  constructor(private repository: PrismaRepository) {}

  async register(registerParticipantDto: RegisterParticipantDto) {
    // TODO Add check whether the user is already registered for this event

    await this.repository.register(registerParticipantDto);
  }
}
