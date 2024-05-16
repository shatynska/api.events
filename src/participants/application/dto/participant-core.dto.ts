import { createZodDto } from '@anatine/zod-nestjs';
import { ParticipantDtoSchema, participantDtoStubs } from './participant.dto';

export class ParticipantCoreDto extends createZodDto(
  ParticipantDtoSchema.pick({
    id: true,
    fullName: true,
    email: true,
    eventId: true,
    registeredAt: true,
  }),
) {}

export const participantCoreDtoStubs: ParticipantCoreDto[] =
  participantDtoStubs.map((dto) => {
    const { id, fullName, email, eventId, registeredAt } = dto;
    return { id, fullName, email, eventId, registeredAt };
  });
