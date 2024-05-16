import { Inject, Injectable } from '@nestjs/common';
import { RegisterParticipantDto } from '../dto/register-participant.dto';
import { REPOSITORY_TOKEN, Repository } from '../repository';

@Injectable()
export class RegisterService {
  constructor(
    @Inject(REPOSITORY_TOKEN) private readonly repository: Repository,
  ) {}

  async register(registerParticipantDto: RegisterParticipantDto) {
    // TODO Add check whether the user is already registered for this event

    await this.repository.register(registerParticipantDto);
  }
}
