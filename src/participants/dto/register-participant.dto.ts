import { createZodDto } from '@anatine/zod-nestjs';
import { ParticipantDtoSchema } from './participant.dto';

export class RegisterParticipantDto extends createZodDto(
  ParticipantDtoSchema.omit({
    id: true,
    registeredAt: true,
  }).required(),
) {}
