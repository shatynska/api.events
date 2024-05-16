import { RegisterParticipantDto } from './dto/register-participant.dto';

export const REPOSITORY_TOKEN = Symbol('ParticipantsRepositoryToken');

export interface Repository {
  register(dto: RegisterParticipantDto): Promise<void>;
}
