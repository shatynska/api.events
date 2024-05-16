import { createZodDto } from '@anatine/zod-nestjs';
import { ParticipantDtoSchema } from './participant.dto';

export class ParticipantCoreDto extends createZodDto(
  ParticipantDtoSchema.pick({
    id: true,
    fullName: true,
    email: true,
    eventId: true,
    registeredAt: true,
  }),
) {}
