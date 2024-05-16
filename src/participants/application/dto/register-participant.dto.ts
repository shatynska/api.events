import { createZodDto } from '@anatine/zod-nestjs';
import { ParticipantDtoSchema, participantDtoStubs } from './participant.dto';

export class RegisterParticipantDto extends createZodDto(
  ParticipantDtoSchema.omit({
    id: true,
    registeredAt: true,
  }).required(),
) {}

export const registerParticipantDtoStubs: RegisterParticipantDto[] =
  participantDtoStubs.map((dto) => {
    const { id, registeredAt, referralId = '', ...rest } = dto;
    return { referralId, ...rest };
  });
